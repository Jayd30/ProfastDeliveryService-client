import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import secureAxios from '../../hooks/secureAxios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
// originalllllll
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
const navigate=useNavigate()



const {id}=useParams();
const axioSecu=secureAxios()

const {data:parcel={}}=useQuery({
    queryKey:['parcels_id',id],
    queryFn:async ()=>{
        const res=await axioSecu.get(`/parcels/${id}`);
        return res.data
    }
})
const amount=parcel.cost;
  const amountInCents = amount * 100;


  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
// CREATE PAYMENT INTENT
    const res = await axioSecu.post(
      '/create-payment-intent',
      {
        amountInCents,
        id
      }
    );

    const clientSecret = res.data.clientSecret;

    // CONFIRM PAYMENT
    const result = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {

          card: elements.getElement(CardElement),

          billing_details: {
            name: 'Jenny Rosen'
          }

        }
      }
    );

    // ERROR
    if (result.error) {

      console.log(result.error.message);

      Swal.fire({
        icon: 'error',
        title: 'Payment Failed',
        text: result.error.message
      });

    }

    // SUCCESS
    else {

     if (result.paymentIntent.status === 'succeeded') {

  // PAYMENT INFO
  const paymentData = {

    parcelId: id,

    email: parcel.created_by,

    amount: amount,

    transactionId: result.paymentIntent.id,

    paymentMethod:
      result.paymentIntent.payment_method_types[0],

    paid_at: new Date()

  };

  // SAVE PAYMENT HISTORY
  const paymentRes =
    await axioSecu.post('/payments', paymentData);

  console.log(paymentRes.data);

  // CLEAR CARD
  card.clear();

  Swal.fire({
    title: "Payment Successful!",
    text: "Your parcel payment has been completed.",
    icon: "success",
    confirmButtonColor: "#16a34a"
  });

  navigate('/dashboard/myparcels');

}

    }
    
  };

  return (
    <form
  className='
    space-y-6 
    bg-white/90 
    backdrop-blur-md
    p-8 
    rounded-3xl 
    shadow-2xl 
    border border-gray-200
    w-full 
    max-w-md 
    mx-auto
    hover:shadow-blue-200
    transition-all 
    duration-500
  '
  onSubmit={handleSubmit}
>

  {/* HEADING */}
  <div className='text-center space-y-2'>
    <h2 className='text-3xl font-bold text-gray-800'>
      Secure Payment
    </h2>

    <p className='text-sm text-gray-500'>
      Complete your parcel payment safely
    </p>
  </div>

  {/* CARD ELEMENT */}
  <div
    className='
      p-4 
      border-2 
      border-gray-200 
      rounded-2xl 
      bg-gray-50
      focus-within:border-primary
      focus-within:shadow-lg
      transition-all
      duration-300
    '
  >

    <CardElement
      options={{
        style: {
          base: {
            fontSize: '18px',
            color: '#1f2937',
            fontFamily: 'Poppins, sans-serif',
            '::placeholder': {
              color: '#9ca3af',
            },
          },
          invalid: {
            color: '#ef4444',
          },
        },
      }}
    />

  </div>

  {/* PAYMENT INFO */}
  <div className='bg-blue-50 rounded-xl p-4  border border-blue-100'>

    <div className='flex justify-between items-center'>
      <span className='text-gray-600 font-medium'>
        Total Amount
      </span>

      <span className='text-2xl font-bold text-primary'>
        ${amount}
      </span>
    </div>

  </div>

  {/* BUTTON */}
  <button
    className='
      btn 
      w-full
      rounded-2xl
      text-lg
      font-bold
      border-0
      bg-gradient-to-r 
      from-primary 
      to-purple-600
      hover:scale-[1.02]
      hover:shadow-xl
      transition-all
      duration-300
      text-white
    '
    type='submit'
    disabled={!stripe}
  >


    {
      !stripe
        ? 'Loading Payment...'
        : `Pay:$${amount}`
    }

  </button>

</form>
  );
};

export default PaymentForm;
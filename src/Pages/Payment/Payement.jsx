
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
// originalllllll


const stripePromise = loadStripe('pk_test_51TaaITC9pSdfv5xz4beqOQaWYCuFNo8aYKl0AeDhwCzjCkVnjXBLS6rtMF3nEKHAZeNpxZNfP3BbvWfRbzp1g4sm00gof7BQaQ');

const Payement = () => {

    return (
       <Elements stripe={stripePromise}>
     <PaymentForm></PaymentForm>
    </Elements>
    );
};

export default Payement;
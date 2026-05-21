import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import secureAxios from '../../hooks/secureAxios';

const BookParcel = () => {
    const generateTrackingID = () => {

  const randomNumber = Math.floor(
    100000 + Math.random() * 900000
  );

  return `PF-${Date.now()}-${randomNumber}`;
};
const{user}=useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // axios
  const axiosSecu=secureAxios()
  // WATCH TYPE
  const type = watch('type');

  // FORM SUBMIT
  const onSubmit = (data) => {

    console.log(data);

    let cost = 0;

    // COST CALCULATION
    if (data.type === 'document') {

      cost = 180;

    } else {

      const weight = parseFloat(data.weight);

      if (weight <= 2) {

        cost = 120;

      } else {

        cost = 120 + (weight - 2) * 40;

      }
    }

    // SWEET ALERT
    Swal.fire({

      title: 'Confirm Parcel Booking',

      html: `
      
        <div style="text-align:left">

          <h3 style="
            font-size:20px;
            font-weight:bold;
            margin-bottom:10px;
            color:#16a34a
          ">
            Parcel Details
          </h3>

          <p><strong>Type:</strong> ${data.type}</p>

          <p><strong>Title:</strong> ${data.title}</p>

          ${
            data.type === 'non-document'
              ? `<p><strong>Weight:</strong> ${data.weight} KG</p>`
              : ''
          }

          <hr style="margin:15px 0">

          <h3 style="
            font-size:20px;
            font-weight:bold;
            margin-bottom:10px;
            color:#2563eb
          ">
            Sender Information
          </h3>

          <p><strong>Name:</strong> ${data.senderName}</p>

          <p><strong>Contact:</strong> ${data.senderContact}</p>

          <p><strong>Region:</strong> ${data.senderRegion}</p>

          <p><strong>Service Center:</strong> ${data.senderCenter}</p>

          <p><strong>Address:</strong> ${data.senderAddress}</p>

          <hr style="margin:15px 0">

          <h3 style="
            font-size:20px;
            font-weight:bold;
            margin-bottom:10px;
            color:#dc2626
          ">
            Receiver Information
          </h3>

          <p><strong>Name:</strong> ${data.receiverName}</p>

          <p><strong>Contact:</strong> ${data.receiverContact}</p>

          <p><strong>Region:</strong> ${data.receiverRegion}</p>

          <p><strong>Service Center:</strong> ${data.receiverCenter}</p>

          <p><strong>Address:</strong> ${data.receiverAddress}</p>

          <hr style="margin:15px 0">

          <h3 style="
            font-size:20px;
            font-weight:bold;
            margin-bottom:10px;
            color:#7c3aed
          ">
            Price Breakdown
          </h3>

          ${
            data.type === 'document'
              ? `
                <p>Document Delivery Charge: Rs 80</p>
              `
              : `
                <p>Base Charge (First 2 KG): Rs 120</p>

                <p>
                  Extra Weight Charge:
                  Rs ${
                    (parseFloat(data.weight) - 2 > 0)
                      ? (parseFloat(data.weight) - 2) * 40
                      : 0
                  }
                </p>
              `
          }

          <h2 style="
            margin-top:20px;
            color:#16a34a;
            font-size:30px;
            font-weight:bold;
          ">
            Total_Cost: Rs ${cost}
          </h2>

        </div>
      `,

      icon: 'info',

      showCancelButton: true,

      confirmButtonText: 'Proceed To Payment',

      cancelButtonText: 'Continue Editing',

      confirmButtonColor: '#16a34a',

      cancelButtonColor: '#dc2626',

    }).then((result) => {

      // IF CONFIRM
      if (result.isConfirmed) {

        const parcelData = {

          ...data,
          cost,
          created_by:user.email,
          creation_date: new Date().toISOString(),
          payment_status:'unpaid',
          delivery_status:"not_collected",
          tracking_id:generateTrackingID(),
          status: 'pending',

        };

        console.log(parcelData);
        

        // DATABASE SAVE HERE
      axiosSecu.post('/parcels',parcelData)
      .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({

          title: 'Parcel Booked Successfully',

          text: 'Redirecting to payment gateway...',

          icon: 'success',

          timer: 2500,

          showConfirmButton: false,

        });
        }
      })

        

      }

    });

  };

  return (

    <section className="bg-base-200 min-h-screen py-16 px-4 md:px-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Book Your Parcel
          </h1>

          <p className="text-gray-500 max-w-3xl mx-auto leading-8">
            Door to Door delivery service with secure parcel handling,
            fast pickup and real-time tracking.
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-10"
        >

          {/* PARCEL INFO */}
          <div className="bg-base-100 p-8 rounded-3xl shadow-lg border border-base-300">

            <h2 className="text-2xl font-bold mb-8 text-primary">
              Parcel Info
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* TYPE */}
              <div>

                <label className="label">
                  Parcel Type
                </label>

                <select
                  {...register('type', {
                    required: true,
                  })}
                  className="select select-bordered w-full"
                >
                  <option value="">
                    Select Type
                  </option>

                  <option value="document">
                    Document
                  </option>

                  <option value="non-document">
                    Non Document
                  </option>

                </select>

                {
                  errors.type &&
                  <p className="text-red-600 mt-1">
                    Parcel type required
                  </p>
                }

              </div>

              {/* TITLE */}
              <div>

                <label className="label">
                  Parcel Title
                </label>

                <input
                  type="text"
                  placeholder="Parcel title"
                  className="input input-bordered w-full"
                  {...register('title', {
                    required: true,
                  })}
                />

                {
                  errors.title &&
                  <p className="text-red-600 mt-1">
                    Title required
                  </p>
                }

              </div>

              {/* WEIGHT */}
              <div>

                <label className="label">
                  Parcel Weight (KG)
                </label>

                <input
                  type="number"
                  step="0.1"
                  placeholder="Weight"
                  className="input input-bordered w-full"
                  disabled={type === 'document'}
                  {...register('weight')}
                />

              </div>

            </div>

          </div>

          {/* SENDER INFO */}
          <div className="bg-base-100 p-8 rounded-3xl shadow-lg border border-base-300">

            <h2 className="text-2xl font-bold mb-8 text-primary">
              Sender Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="label">Sender Name</label>

                <input
                  type="text"
                  className="input input-bordered w-full"
                  value="John Doe"
                  readOnly
                  {...register('senderName', {
                    required: true,
                  })}
                />
              </div>

              <div>
                <label className="label">Contact Number</label>

                <input
                  type="text"
                  placeholder="Contact Number"
                  className="input input-bordered w-full"
                  {...register('senderContact', {
                    required: true,
                  })}
                />
              </div>

              <div>
                <label className="label">Select Region</label>

                <select
                  className="select select-bordered w-full"
                  {...register('senderRegion', {
                    required: true,
                  })}
                >
                  <option value="">Select Region</option>

                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Kolkata</option>
                  <option>Bangalore</option>

                </select>
              </div>

              <div>
                <label className="label">Service Center</label>

                <select
                  className="select select-bordered w-full"
                  {...register('senderCenter', {
                    required: true,
                  })}
                >
                  <option value="">Select Center</option>

                  <option>North Hub</option>
                  <option>South Hub</option>
                  <option>Central Hub</option>

                </select>
              </div>

              <div>
                <label className="label">Address</label>

                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Full Address"
                  {...register('senderAddress', {
                    required: true,
                  })}
                ></textarea>
              </div>

              <div>
                <label className="label">Pickup Instruction</label>

                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Pickup Instruction"
                  {...register('pickupInstruction', {
                    required: true,
                  })}
                ></textarea>
              </div>

            </div>

          </div>

          {/* RECEIVER INFO */}
          <div className="bg-base-100 p-8 rounded-3xl shadow-lg border border-base-300">

            <h2 className="text-2xl font-bold mb-8 text-primary">
              Receiver Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="label">Receiver Name</label>

                <input
                  type="text"
                  placeholder="Receiver Name"
                  className="input input-bordered w-full"
                  {...register('receiverName', {
                    required: true,
                  })}
                />
              </div>

              <div>
                <label className="label">Contact Number</label>

                <input
                  type="text"
                  placeholder="Receiver Contact"
                  className="input input-bordered w-full"
                  {...register('receiverContact', {
                    required: true,
                  })}
                />
              </div>

              <div>
                <label className="label">Select Region</label>

                <select
                  className="select select-bordered w-full"
                  {...register('receiverRegion', {
                    required: true,
                  })}
                >
                  <option value="">Select Region</option>

                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Kolkata</option>
                  <option>Bangalore</option>

                </select>
              </div>

              <div>
                <label className="label">Service Center</label>

                <select
                  className="select select-bordered w-full"
                  {...register('receiverCenter', {
                    required: true,
                  })}
                >
                  <option value="">Select Center</option>

                  <option>North Hub</option>
                  <option>South Hub</option>
                  <option>Central Hub</option>

                </select>
              </div>

              <div>
                <label className="label">Address</label>

                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Receiver Address"
                  {...register('receiverAddress', {
                    required: true,
                  })}
                ></textarea>
              </div>

              <div>
                <label className="label">Delivery Instruction</label>

                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Delivery Instruction"
                  {...register('deliveryInstruction', {
                    required: true,
                  })}
                ></textarea>
              </div>

            </div>

          </div>

          {/* BUTTON */}
          <div className="text-center">

            <button className="btn btn-primary px-12 text-lg rounded-2xl">
              Submit Parcel
            </button>

          </div>

        </form>

      </div>

    </section>
  );
};

export default BookParcel;
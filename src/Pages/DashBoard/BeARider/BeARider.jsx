import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import img1 from './../../../assets/rest/agent-pending.png'
import secureAxios from '../../../hooks/secureAxios';
import Swal from 'sweetalert2';

const BeARider = () => {

  const { user } = useAuth();
const axioSecu =secureAxios()
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {

    const riderData = {
      ...data,
      
      status: 'pending'
    };
// reset()
    console.log(riderData);
axioSecu.post('/riders',riderData)
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
     

  };

  return (

    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="bg-base-100 shadow-2xl rounded-3xl overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-10">

          {/* =========================
              LEFT SIDE FORM 70%
          ========================== */}
          <div className="lg:col-span-7 p-8 md:p-12">

            <h1 className="text-5xl font-bold mb-4 text-lime-500">
              Become A Rider
            </h1>

            <p className="text-gray-500 mb-10">
              Join our delivery team and start earning with ProFast.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >

              {/* NAME & EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* NAME */}
                <div>

                  <label className="label font-semibold">
                    Name
                  </label>

                  <input
                    type="text"
                    value={user?.displayName || ''}
                    readOnly
                    className="input input-bordered w-full bg-gray-100"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label className="label font-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    value={user?.email || ''}
                    readOnly
                    className="input input-bordered w-full bg-gray-100"
                  />

                </div>

              </div>


              {/* AGE & PHONE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* AGE */}
                <div>

                  <label className="label font-semibold">
                    Age
                  </label>

                  <input
                    type="number"
                    placeholder="Enter Your Age"
                    className="input input-bordered w-full"
                    {...register('age', {
                      required: true
                    })}
                  />

                  {
                    errors.age &&
                    <p className="text-red-500 text-sm mt-1">
                      Age is required
                    </p>
                  }

                </div>

                {/* PHONE */}
                <div>

                  <label className="label font-semibold">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="input input-bordered w-full"
                    {...register('phone', {
                      required: true
                    })}
                  />

                  {
                    errors.phone &&
                    <p className="text-red-500 text-sm mt-1">
                      Phone number is required
                    </p>
                  }

                </div>

              </div>


              {/* REGION & CITY */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* REGION */}
                <div>

                  <label className="label font-semibold">
                    Region
                  </label>

                  <select
                    className="select select-bordered w-full"
                    {...register('region', {
                      required: true
                    })}
                  >

                    <option value="">
                      Select Region
                    </option>

                    <option>Kolkata</option>
                    <option>Mumbai</option>
                    <option>Pune</option>
                    <option>Delhi</option>

                  </select>

                  {
                    errors.region &&
                    <p className="text-red-500 text-sm mt-1">
                      Region is required
                    </p>
                  }

                </div>

                {/* CITY */}
                <div>

                  <label className="label font-semibold">
                    City
                  </label>

                  <select
                    className="select select-bordered w-full"
                    {...register('city', {
                      required: true
                    })}
                  >

                    <option value="">
                      Select City
                    </option>

                    <option>Kolkata</option>
                    <option>Mumbai</option>
                    <option>Pune</option>
                    <option>Delhi</option>

                  </select>

                  {
                    errors.city &&
                    <p className="text-red-500 text-sm mt-1">
                      City is required
                    </p>
                  }

                </div>

              </div>


              {/* ADDRESS */}
              <div>

                <label className="label font-semibold">
                  Address
                </label>

                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Enter Full Address"
                  rows="3"
                  {...register('address', {
                    required: true
                  })}
                ></textarea>

                {
                  errors.address &&
                  <p className="text-red-500 text-sm mt-1">
                    Address is required
                  </p>
                }

              </div>


              {/* PIN & AADHAAR */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* PIN */}
                <div>

                  <label className="label font-semibold">
                    Pin Code
                  </label>

                  <input
                    type="text"
                    placeholder="Pin Code"
                    className="input input-bordered w-full"
                    {...register('pinCode', {
                      required: true
                    })}
                  />

                </div>

                {/* AADHAAR */}
                <div>

                  <label className="label font-semibold">
                    Aadhaar Card Number
                  </label>

                  <input
                    type="text"
                    placeholder="Aadhaar Number"
                    className="input input-bordered w-full"
                    {...register('aadhaar', {
                      required: true
                    })}
                  />

                </div>

              </div>


              {/* PAN & BIKE REG */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* PAN */}
                <div>

                  <label className="label font-semibold">
                    PAN Card Number
                  </label>

                  <input
                    type="text"
                    placeholder="PAN Number"
                    className="input input-bordered w-full"
                    {...register('pan', {
                      required: true
                    })}
                  />

                </div>

                {/* BIKE REG */}
                <div>

                  <label className="label font-semibold">
                    Bike Registration Number
                  </label>

                  <input
                    type="text"
                    placeholder="Bike Registration Number"
                    className="input input-bordered w-full"
                    {...register('bikeRegistration', {
                      required: true
                    })}
                  />

                </div>

              </div>


              {/* BIKE LICENSE */}
              <div>

                <label className="label font-semibold">
                  Bike License Number
                </label>

                <input
                  type="text"
                  placeholder="Bike License Number"
                  className="input input-bordered w-full"
                  {...register('bikeLicense', {
                    required: true
                  })}
                />

              </div>


              {/* STATUS */}
              <div>

                <label className="label font-semibold">
                  Application Status
                </label>

                <input
                  type="text"
                  value="Pending"
                  readOnly
                  className="input input-bordered w-full bg-gray-100 text-yellow-600 font-bold"
                />

              </div>


              {/* BUTTON */}
              <button
                className="btn bg-lime-400 hover:bg-lime-500 border-none text-black px-10 mt-4"
              >

                Submit Application

              </button>

            </form>
           

          </div>


          {/* =========================
              RIGHT SIDE IMAGE 30%
          ========================== */}
          <div className="lg:col-span-3 bg-gradient-to-br from-lime-300 via-lime-400 to-lime-500 flex items-center justify-center p-8">

            <img
              src={img1}
              alt="rider"
              className="rounded-3xl shadow-2xl object-cover"
            />

          </div>

        </div>

      </div>

    </section>

  );
};

export default BeARider;
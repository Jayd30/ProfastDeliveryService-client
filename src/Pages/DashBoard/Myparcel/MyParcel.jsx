import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import secureAxios from '../../../hooks/secureAxios';
import { useNavigate } from 'react-router';

const MyParcel = () => {

  const { user } = useAuth();

  const axiosSecure = secureAxios();

  const navigate = useNavigate();

  const [selectedParcel, setSelectedParcel] = useState(null);

  // GET PARCELS
  const {
    data: parcels = [],
    refetch
  } = useQuery({

    queryKey: ['my-parcels', user?.email],

    enabled: !!user?.email,

    queryFn: async () => {

      const res = await axiosSecure.get(
        `/parcels?email=${user?.email}`
      );

      return res.data;

    }

  });

  // PAYMENT PAGE
  const handlePay = (id) => {

    navigate(`/dashboard/payment/${id}`);

  };

  // DELETE PARCEL
  const handleDelete = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "Parcel will be deleted!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes Delete',
    }).then(async (result) => {

      if (result.isConfirmed) {

        const res = await axiosSecure.delete(`/parcels/${id}`);

        if (res.data.deletedCount > 0) {

          Swal.fire({
            title: 'Deleted!',
            text: 'Parcel deleted successfully',
            icon: 'success',
          });

          refetch();

        }

      }

    });

  };

  // UPDATE PARCEL
  const handleUpdate = async (e) => {

    e.preventDefault();

    const form = e.target;

    const updatedParcel = {

      type: form.type.value,
      senderName: form.senderName.value,
      senderContact: form.senderContact.value,
      receiverName: form.receiverName.value,
      receiverContact: form.receiverContact.value,
      address: form.address.value,
      cost: form.cost.value,

    };

    const res = await axiosSecure.patch(
      `/parcels/${selectedParcel._id}`,
      updatedParcel
    );

    if (res.data.modifiedCount > 0) {

      Swal.fire({
        title: 'Updated!',
        text: 'Parcel updated successfully',
        icon: 'success',
      });

      setSelectedParcel(null);

      refetch();

    }

  };

  return (

    <div className="p-4 md:p-8">

      {/* HEADING */}
      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          My Parcels
        </h1>

        <p className="text-gray-500 mt-2">
          Total Parcels: {parcels.length}
        </p>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-2xl shadow-lg border border-base-300 bg-base-100">

        <table className="table">

          {/* TABLE HEAD */}
          <thead className="bg-primary text-white">

            <tr>

              <th>#</th>

              <th>Type</th>

              <th>Sender</th>

              <th>Receiver</th>

              <th>Cost</th>

              <th>Tracking ID</th>

              <th>Payment Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          {/* TABLE BODY */}
          <tbody>

            {
              parcels.map((parcel, index) => (

                <tr
                  key={parcel._id}
                  className="hover"
                >

                  {/* SERIAL */}
                  <td>{index + 1}</td>

                  {/* TYPE */}
                  <td>

                    {
                      parcel.type === 'document'
                        ? (
                          <span className="badge badge-info text-white">
                            Document
                          </span>
                        )
                        : (
                          <span className="badge badge-secondary text-white">
                            Non Document
                          </span>
                        )
                    }

                  </td>

                  {/* SENDER */}
                  <td>{parcel.senderName}</td>

                  {/* RECEIVER */}
                  <td>{parcel.receiverName}</td>

                  {/* COST */}
                  <td className="font-bold text-green-600">
                    ₹ {parcel.cost}
                  </td>

                  {/* TRACKING ID */}
                  <td>
                    {parcel.trackingID}
                  </td>

                  {/* PAYMENT STATUS */}
                  <td>

                    {
                      parcel.payment_status === 'paid'
                        ? (
                          <span className="badge badge-success text-white">
                            Paid
                          </span>
                        )
                        : (
                          <span className="badge badge-error text-white">
                            Not Paid
                          </span>
                        )
                    }

                  </td>

                  {/* ACTIONS */}
                  <td>

                    <div className="flex flex-wrap gap-2">

                      {/* UPDATE */}
                      <button
                        onClick={() => setSelectedParcel(parcel)}
                        className="btn btn-sm btn-warning text-white"
                      >
                        Update Parcel
                      </button>

                      {/* PAY */}
                      {
                        parcel.payment_status !== 'paid' && (

                          <button
                            onClick={() => handlePay(parcel._id)}
                            className="btn btn-sm btn-success text-white"
                          >
                            Pay
                          </button>

                        )
                      }

                      {/* DELETE */}
                      <button
                        onClick={() => handleDelete(parcel._id)}
                        className="btn btn-sm btn-error text-white"
                      >
                        Cancel Parcel
                      </button>

                    </div>

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

      {/* UPDATE MODAL */}
      {
        selectedParcel && (

          <dialog
            open
            className="modal modal-open"
          >

            <div className="modal-box max-w-3xl">

              <h3 className="font-bold text-2xl mb-6">
                Update Parcel
              </h3>

              <form
                onSubmit={handleUpdate}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >

                {/* PARCEL TYPE */}
                <div className="md:col-span-2">

                  <label className="font-semibold mb-3 block">
                    Parcel Type
                  </label>

                  <div className="flex items-center gap-6">

                    {/* DOCUMENT */}
                    <label className="flex items-center gap-2">

                      <input
                        type="radio"
                        name="type"
                        value="document"
                        defaultChecked={
                          selectedParcel.type === 'document'
                        }
                        className="radio radio-primary"
                      />

                      <span>
                        Document
                      </span>

                    </label>

                    {/* NON DOCUMENT */}
                    <label className="flex items-center gap-2">

                      <input
                        type="radio"
                        name="type"
                        value="non-document"
                        defaultChecked={
                          selectedParcel.type === 'non-document'
                        }
                        className="radio radio-secondary"
                      />

                      <span>
                        Non Document
                      </span>

                    </label>

                  </div>

                </div>

                {/* SENDER NAME */}
                <input
                  type="text"
                  name="senderName"
                  defaultValue={selectedParcel.senderName}
                  placeholder="Sender Name"
                  className="input input-bordered w-full"
                />

                {/* SENDER CONTACT */}
                <input
                  type="number"
                  name="senderContact"
                  defaultValue={selectedParcel.senderContact}
                  placeholder="Sender Contact"
                  className="input input-bordered w-full"
                />

                {/* RECEIVER NAME */}
                <input
                  type="text"
                  name="receiverName"
                  defaultValue={selectedParcel.receiverName}
                  placeholder="Receiver Name"
                  className="input input-bordered w-full"
                />

                {/* RECEIVER CONTACT */}
                <input
                  type="number"
                  name="receiverContact"
                  defaultValue={selectedParcel.receiverContact}
                  placeholder="Receiver Contact"
                  className="input input-bordered w-full"
                />

                {/* ADDRESS */}
                <textarea
                  name="address"
                  defaultValue={selectedParcel.address}
                  placeholder="Delivery Address"
                  className="textarea textarea-bordered md:col-span-2"
                ></textarea>

                {/* COST */}
                <input
                  type="number"
                  name="cost"
                  defaultValue={selectedParcel.cost}
                  placeholder="Parcel Cost"
                  className="input input-bordered md:col-span-2"
                />

                {/* BUTTONS */}
                <div className="md:col-span-2 flex justify-end gap-3 mt-4">

                  <button
                    type="button"
                    onClick={() => setSelectedParcel(null)}
                    className="btn"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Update Parcel
                  </button>

                </div>

              </form>

            </div>

          </dialog>

        )
      }

    </div>

  );

};

export default MyParcel;
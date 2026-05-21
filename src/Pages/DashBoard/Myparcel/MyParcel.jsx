import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import secureAxios from '../../../hooks/secureAxios';
import Swal from 'sweetalert2';

const MyParcel = () => {

  const { user } = useAuth();

  const axiosSecure = secureAxios();

  // GET PARCELS
  const { data: parcels = [], refetch } = useQuery({

    queryKey: ['my-parcels', user?.email],

    enabled: !!user?.email,

    queryFn: async () => {

      const res = await axiosSecure.get( `/parcels?email=${user?.email}`);

      return res.data;

    }

  });

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

              <th>Created At</th>

              <th>Cost</th>

              <th>Payment</th>

              <th>Tracking ID</th>

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
                  <td>
                    {index + 1}
                  </td>

                  {/* TYPE */}
                  <td>

                    {
                      parcel.type === 'document'
                        ? (
                          <span className="badge badge-info badge-outline">
                            Document
                          </span>
                        )
                        : (
                          <span className="badge badge-secondary badge-outline">
                            Non Document
                          </span>
                        )
                    }

                  </td>

                  {/* CREATED DATE */}
                  <td>

                    {
                      new Date(
                        parcel.creation_date
                      ).toLocaleDateString()
                    }

                  </td>

                  {/* COST */}
                  <td className="font-bold text-green-600">

                    ₹ {parcel.cost}

                  </td>

                  {/* PAYMENT STATUS */}
                  <td>

                    {
                      parcel.payment_status === 'paid'
                        ? (
                          <span className="badge badge-success">
                            Paid
                          </span>
                        )
                        : (
                          <span className="badge badge-error">
                            Unpaid
                          </span>
                        )
                    }

                  </td>

                  {/* TRACKING */}
                  <td>

                    <span className="font-semibold text-primary">
                      {parcel.trackingID}
                    </span>

                  </td>

                  {/* ACTION BUTTONS */}
                  <td>

                    <div className="flex flex-wrap gap-2">

                      {/* VIEW */}
                      <button className="btn btn-sm btn-info text-white">
                        View
                      </button>

                      {/* PAY */}
                      {
                        parcel.payment_status !== 'paid' && (

                          <button className="btn btn-sm btn-success text-white">
                            Pay
                          </button>

                        )
                      }

                      {/* DELETE */}
                      <button
                        onClick={() => handleDelete(parcel._id)}
                        className="btn btn-sm btn-error text-white"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default MyParcel;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import secureAxios from '../../hooks/secureAxios';
import Swal from 'sweetalert2';

const Yourresponse = () => {
const{user}=useAuth()
const secuAxios=secureAxios()
const {data:contacts=[],refetch}=useQuery({
queryKey:['my_contact',user?.email],
queryFn:async ()=>{
const res=await secuAxios.get(`/contacts?email=${user?.email}`);
return res.data

}

})

const handleDelete=(id)=>{

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async (result)=>{
    if(result.isConfirmed){
        const res=await secuAxios.delete(`/contacts/${id}`)
        if(res.data.deletedCount >0){
            Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });refetch()
        }
    }
})
}

    
    return (
           <div className="p-4 md:p-8">

      {/* HEADING */}
      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          My Responses
        </h1>

        <p className="text-gray-500 mt-2">
          Total Messages: {contacts.length}
        </p>

      </div>

      {/* EMPTY STATE */}
      {
        contacts.length === 0 && (

          <div className="text-center py-20">

            <h2 className="text-2xl font-bold text-gray-500">
              No Messages Found
            </h2>

          </div>

        )
      }

      {/* TABLE */}
      {
        contacts.length > 0 && (

          <div className="
            overflow-x-auto
            rounded-3xl
            shadow-xl
            border
            border-base-300
            bg-base-100
          ">

            <table className="table">

              {/* TABLE HEAD */}
              <thead className="bg-primary text-white">

                <tr>

                  <th>#</th>

                  <th>Name</th>

                  <th>Email</th>

                  <th>Message</th>

                  <th>Actions</th>

                </tr>

              </thead>

              {/* TABLE BODY */}
              <tbody>

                {
                  contacts.map((contact, index) => (

                    <tr
                      key={contact._id}
                      className="hover"
                    >

                      {/* SERIAL */}
                      <td>
                        {index + 1}
                      </td>

                      {/* NAME */}
                      <td className="font-semibold">
                        {contact.name}
                      </td>

                      {/* EMAIL */}
                      <td className="text-primary font-medium">
                        {contact.email}
                      </td>

                      {/* MESSAGE */}
                      <td className="max-w-xs">

                        <p className="truncate">
                          {contact.message}
                        </p>

                      </td>

                      {/* ACTIONS */}
                      <td>

                        <div className="flex gap-2">

                          <button
                            className="
                              btn
                              btn-sm
                              btn-error
                              text-white
                            "
                            onClick={() =>
                              handleDelete(contact._id)
                            }
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

        )
      }

    </div>
    );
};

export default Yourresponse;
import React, { useEffect, useState } from 'react';
import secureAxios from '../../../hooks/secureAxios';
import useAuth from '../../../hooks/useAuth';

const RiderApplication = () => {

  const axiosSecu = secureAxios();
const {user}=useAuth()

  const [riders, setRiders] = useState([]);

useEffect(()=>{


if(user?.email){
  axiosSecu.get(`/riders/${user.email}`)
  .then(res=>{
    setRiders(res.data)
  })
}

})
    

  return (

    <div className="overflow-x-auto rounded-2xl shadow-lg border border-base-300 bg-base-100">

      <table className="table ">

        <thead className='text-black bg-[#CAEB66] hover:bg-[#b8da54]'>

          <tr className=''>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Region</th>
            <th>City</th>
            {/* <th>Status</th> */}
          </tr>

        </thead>

        <tbody>

          {
            riders.map((rider, index) => (

              <tr  key={rider._id}>

                <td>{index + 1}</td>

                <td>{user.displayName}</td>

                <td>{user.email}</td>

                <td>{rider.phone}</td>

                <td>{rider.region}</td>

                <td>{rider.city}</td>

                {/* <td>
                  
                </td> */}

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  );
};

export default RiderApplication;
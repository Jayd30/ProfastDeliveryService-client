import { useForm } from "react-hook-form";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import secureAxios from "../../../hooks/secureAxios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const ContactUs = () => {
const{user}=useAuth()
  const { register, handleSubmit, reset } = useForm();

  const axiosSecu = secureAxios();

  // FORM SUBMIT
  const onSubmit = async (data) => {
const newData={
  ...data
}
  console.log(newData);

  // data store in api
  axiosSecu.post('/contacts',newData)
 .then(res=>{
  console.log(res.data)
  if(res.data.insertedId){
Swal.fire({

          title: 'Your Message Send Successfully',

        

          icon: 'success',

          timer: 2500,

          showConfirmButton: false,

        })
  }reset()
 })
  }
  return (

    <section className="min-h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Contact Us
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto leading-8">
            Have questions about parcel booking, delivery tracking,
            or logistics services? Feel free to contact us anytime.
          </p>

        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold text-white mb-8">
              Get In Touch
            </h2>

            {/* NAME */}
            <div className="flex items-center gap-5 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-lime-400/20 flex items-center justify-center text-lime-300 text-2xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Name
                </h3>

                <p className="text-gray-300">
                  Jay Chandra Das
                </p>
              </div>

            </div>

            {/* PHONE */}
            <div className="flex items-center gap-5 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center text-cyan-300 text-2xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Mobile Number
                </h3>

                <p className="text-gray-300">
                  +91 8910789810
                </p>
              </div>

            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-5 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-pink-400/20 flex items-center justify-center text-pink-300 text-2xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Email Address
                </h3>

                <p className="text-gray-300 break-all">
                  darjjay09@gmail.com
                </p>
              </div>

            </div>

            {/* SOCIAL */}
            <div className="mt-10">

              <h3 className="text-2xl font-bold text-white mb-5">
                Follow Me
              </h3>

              <div className="flex gap-5">

                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-xl hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://github.com/Jayd30"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-xl hover:bg-blue-400 transition-all duration-300 hover:-translate-y-1"
                >
                  <FaLinkedinIn />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold text-white mb-8">
              Send Message
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >

              {/* NAME */}
              <div>

                <label className="text-white mb-2 block">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register('name', {
                    required: true
                  })}
                  className="input input-bordered w-full bg-white/10 border-white/10 text-white placeholder:text-gray-400"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="text-white mb-2 block">
                  Your Email
                </label>

                <input
                  type="email"
                  value={user?.email || ""}
                  placeholder="Enter your email"
                  {...register('email', {
                    required: true
                  })}
                  className="input input-bordered w-full bg-white/10 border-white/10 text-white placeholder:text-gray-400"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="text-white mb-2 block">
                  Your Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  {...register('message', {
                    required: true
                  })}
                  className="textarea textarea-bordered w-full bg-white/10 border-white/10 text-white placeholder:text-gray-400"
                ></textarea>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-lime-400
                  to-cyan-500
                  text-white
                  font-bold
                  text-lg
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactUs;
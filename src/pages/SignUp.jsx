import { FaRegEnvelope, FaRegUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdLockOpen } from "react-icons/md";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="lg:pr-4 2xl:px-52 xl:px-44">
      <div className="mt-12 mb-4 w-full xl:h-[745px] shadow-md rounded-md bg-white lg:p-8 p-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Sign Up</h2>
          <span className="text-gray-500">Sign up for free</span>
        </div>

        <div>
          <form onSubmit={(e) => e.preventDefault()}> 
          <div className="mt-10 mb-8">
              <label>Name</label>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border py-4 pl-6 pr-10 outline-none focus:border-[#28404d] focus-visible:shadow-none"
                />
                <FaRegUser className="absolute top-5 right-4 text-gray-400" />
              </div>
            </div>
            <div className="mt-10 mb-8">
              <label>Email</label>
              <div className="relative mt-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border py-4 pl-6 pr-10 outline-none focus:border-[#28404d] focus-visible:shadow-none"
                />
                <FaRegEnvelope className="absolute top-5 right-4 text-gray-400" />
              </div>
            </div>
            <div className="mt-10 mb-8">
              <label>Password</label>
              <div className="relative mt-2">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border py-4 pl-6 pr-10 outline-none focus:border-[#28404d] focus-visible:shadow-none"
                />
                <MdLockOpen className="absolute right-4 top-5 text-gray-400" />
              </div>
            </div>
            <div className="mt-10 mb-4">
              <label>Re-type Password</label>
              <div className="relative mt-2">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border py-4 pl-6 pr-10 outline-none focus:border-[#28404d] focus-visible:shadow-none"
                />
                <MdLockOpen className="absolute right-4 top-5 text-gray-400" />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className=" w-full bg-blue-700/90 py-4 px-6 text-white rounded-lg hover:bg-blue-600/90"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

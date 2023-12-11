import { FaRegEnvelope } from 'react-icons/fa6';
import { MdLockOpen } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="lg:pr-4 2xl:px-52 xl:px-44">
      <div className="mt-12 mb-4 w-full xl:h-[745px] shadow-md rounded-md bg-white lg:p-8 p-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Sign In</h2>
          <span className='text-gray-500'>Enter your email and password to Sign In.</span>
        </div>

        <div>
          <form onSubmit={(e) => e.preventDefault()}>
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
            <div className="mb-4">
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
            <div className="mt-8">
              <button
                type="submit"
                className=" w-full bg-blue-700/90 py-4 px-6 text-white rounded-lg hover:bg-blue-600/90"
              >
                Sign In
              </button>
            </div>
            <div className="mt-8 ">
              <button
                type="submit"
                className=" w-full flex items-center justify-center bg-slate-100 py-4 px-6 text-gray-600 rounded-lg hover:bg-slate-200"
              >
                {' '}
                <FcGoogle className='mr-3 text-xl lg:text-2xl'/> Sign in with Google
              </button>
            </div>
          </form>
        </div>
        <div className='text-center mt-10'>
          <p>Don't have any Account? <Link to={"#"} className='text-blue-700'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Auth;

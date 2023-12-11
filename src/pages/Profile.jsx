import {
  FaFacebookF,
  FaTwitter,
  FaSquareInstagram,
  FaGithub,
} from 'react-icons/fa6';

const Profile = () => {
  return (
    <div className="lg:pr-4 2xl:px-52 xl:px-44">
      <div className="mt-12 mb-4 w-full xl:h-[745px] shadow-md rounded-md bg-white">
        <div className="relative w-full overflow-hidden">
          <div>
            <img
              src="https://images.unsplash.com/photo-1653163061406-730a0df077eb?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="lg:h-[240px] h-[165px] w-full object-cover rounded-t-md"
            />
          </div>
          <div className="h-9/12 flex items-center flex-col justify-center w-full">
            <div>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[150px] w-[150px] rounded-full object-cover absolute lg:top-40 top-24 left-1/2 transform -translate-x-1/2"
              />
            </div>
            <div className="mt-24 text-center">
              <p className="text-2xl font-semibold lg:text-3xl">Linda Jones</p>
              <span className="text-gray-500 ">FullStack Developer</span>
            </div>
            <hr className="w-2/3 my-6 border-black/30" />
            <div className="text-center w-2/3 px-4">
              <p className="mb-6 text-lg text-gray-800">About me</p>
              <p className="text-gray-400 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                sequi laudantium atque sed culpa, quis, minus nobis quaerat iste
                saepe consequuntur aliquid inventore iusto necessitatibus.
              </p>
              <span className="text-lg text-gray-800">Follow me on</span>
            </div>
            <div className="mt-4 mb-8 flex gap-x-3 text-lg text-gray-600">
              <FaFacebookF />
              <FaTwitter />
              <FaSquareInstagram />
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

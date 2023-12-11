import { AiOutlineLineChart, AiOutlineUser } from 'react-icons/ai';
import { FaRegMoneyBillAlt, FaCreditCard } from 'react-icons/fa';
import { CgPerformance } from 'react-icons/cg';
import TrafficChart from '../components/charts/TrafficChart';
import BarChart from '../components/charts/BarChart';
import { ORDERS, PAGE_VISITS_TABLE } from '../data/Data';

const Home = () => {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="relative flex flex-col rounded-lg bg-white  text-gray-700 shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-400">Traffic</h3>
              <span className="text-xl font-bold">350,987</span>
            </div>
            <div className="absolute right-4 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full p-2 text-white text-xl">
              <AiOutlineLineChart />
            </div>
          </div>

          <div className="flex mt-4 border-t">
            <p className="font-thin">
              <span className="text-green-500">↑ 12.45%</span> Than last month
            </p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-lg bg-white text-gray-700 shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-400">Today's Users</h3>
              <span className="text-xl font-bold">2,700</span>
            </div>
            <div className="absolute right-4 bg-gradient-to-tr from-pink-600 to-pink-400 rounded-full p-2 text-white text-xl">
              <AiOutlineUser />
            </div>
          </div>

          <div className="flex mt-4 border-t">
            <p className="font-thin">
              <span className="text-red-500">↓ 1.02%</span> Than last month
            </p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-lg bg-white text-gray-700 shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-400">Sales</h3>
              <span className="text-xl font-bold">$47k</span>
            </div>
            <div className="absolute right-4 bg-gradient-to-tr from-green-600 to-green-400 rounded-full p-2 text-white text-xl">
              <FaRegMoneyBillAlt />
            </div>
          </div>

          <div className="flex mt-4 border-t">
            <p className="font-thin">
              <span className="text-green-500">↑ 3.48%</span> Than last month
            </p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-lg bg-white text-gray-700 shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-400">Performance</h3>
              <span className="text-xl font-bold">51,22%</span>
            </div>
            <div className="absolute right-4 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-full p-2 text-white text-xl">
              <CgPerformance />
            </div>
          </div>

          <div className="flex mt-4 border-t">
            <p className="font-thin">
              <span className="text-green-500">↑ 9.33%</span> Than last month
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-y-12 gap-x-6 xl:grid-cols-3">
        <div className="bg-white relative flex flex-col bg-clip-border rounded-xl text-white shadow-md col-span-1 xl:col-span-2 p-4">
          <div>
            <span className="text-xl text-black font-bold">Traffic Chart</span>
          </div>
          <div className="sm:h-[450px] h-[400px]">
            <TrafficChart />
          </div>
        </div>

        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md col-span-1 p-4">
          <div>
            <span className="text-xl font-bold">Sales Chart</span>
          </div>
          <div className="sm:h-[450px] h-[400px]">
            <BarChart />
          </div>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-y-12 gap-x-6 xl:grid-cols-3">
        <div className="bg-white relative flex flex-col bg-clip-border rounded-xl shadow-md xl:col-span-2 overflow-hidden p-4">
          <div>
            <p className="text-xl font-bold">Page Visits</p>
          </div>
          <div className="max-md:overflow-x-scroll sm:h-[450px] h-[400px]">
            <table className="w-full min-w-[640px] table-auto h-full mt-4">
              <thead>
                <tr>
                  <th className="border-b border-gray-100 py-3 px-6 text-left">
                    <p className="block text-sm text-gray-400">PAGE NAME</p>
                  </th>
                  <th className="border-b border-gray-100 py-3 px-6 text-left">
                    <p className="block text-sm text-gray-400">VISITORS</p>
                  </th>
                  <th className="border-b border-gray-100 py-3 px-6 text-left">
                    <p className="block text-sm text-gray-400">UNIQUE USERS</p>
                  </th>
                  <th className="border-b border-gray-100 py-3 px-6 text-left">
                    <p className="block text-sm text-gray-400">BOUNCE RATE</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {PAGE_VISITS_TABLE.map(item => (
                  <tr key={item.name}>
                    <td className="px-5 border-b border-gray-100">
                      <p className="block text-md font-medium">/{item.name}</p>
                    </td>
                    <td className="px-5 border-b border-gray-100">
                      <p className="block"> {item.visitors}</p>
                    </td>
                    <td className="px-5 border-b border-gray-100">
                      <p className="block ">{item.unique_users}</p>
                    </td>
                    <td className="px-5 border-b border-gray-100">
                      <p className="block">
                        {item.bounce_rate > 0 ? (
                          <p>
                            {' '}
                            <span className="text-green-500">↑ </span>
                            {item.bounce_rate}
                          </p>
                        ) : (
                          <p>
                            <span className="text-red-500">↓ </span>
                            {item.bounce_rate.toString().slice(1)}
                          </p>
                        )}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md col-span-1 p-4 overflow-hidden">
          <div>
            <span className="text-xl font-bold">Orders Overview</span>
          </div>
          <div className="sm:h-[450px] h-[350px]">
            {ORDERS.map(item => (
              <div className="w-full min-w-[640px] my-6" key={item.id}>
                <div className='flex items-center w-full'>
                  <FaCreditCard className='mr-2'/>
                  <p className="block text- font-medium">{item.description}</p>
                </div>
                <span className="text-sm text-gray-400 font-medium">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

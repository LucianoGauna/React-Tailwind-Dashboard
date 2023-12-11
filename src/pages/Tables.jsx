import React from 'react';
import { PAGE_VISITS_TABLE, SALES_CHART } from '../data/Data';

const Tables = () => {
  return (
    <div className="mb-4 grid grid-cols-1 gap-y-12 gap-x-6 mt-12">
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

      <div className="bg-white relative flex flex-col bg-clip-border rounded-xl shadow-md xl:col-span-2 overflow-hidden p-4">
        <div>
          <span className="text-xl font-bold">Sales table</span>
        </div>
        <div className="sm:h-[450px] h-[350px] flex items-center overflow-x-scroll">
          {SALES_CHART.map(element => (
            <div className="w-full min-w-[640px] my-6 " key={element.year}>
              <span className="text-sm text-gray-400 font-medium">
                Year: {element.year}
              </span>
              <div className="flex flex-col w-full ">
                {element.data.map(item => (
                  <div key={item.id} className="my-2 flex px-5 border-b border-gray-100">
                    <span className='mr-2 block font-medium'>{item.id}th Month:</span>
                    <p className="block">{item.visits}</p>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tables;

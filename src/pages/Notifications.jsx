import { IoClose } from 'react-icons/io5';
import { NOTIFICATIONS } from '../data/Data';
import { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  function handleDelete(id) {
    setNotifications(notifications.filter(item => item.id !== id));
  }

  return (
    <div className="lg:pr-4 2xl:px-52 xl:px-44">
      <div className="mt-12 p-4 bg-white shadow-md rounded-md">
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4">Alerts</h3>
        </div>
        {notifications?.map(item => (
          <div
            key={item.id}
            className={`w-full ${item.state} px-4 py-2 rounded-md flex justify-between items-center mb-4`}
          >
            <p className="text-white font-medium">{item.description}</p>
            <IoClose
              className="text-white text-xl cursor-pointer"
              onClick={() => handleDelete(item.id)}
            />
          </div>
        ))}
      </div>
      <div className="mt-7 p-4 bg-white shadow-md rounded-md">
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4">Alerts with Icons</h3>
        </div>
        {/* {notifications.map(item => (
          <div
            key={item.id}
            className={`w-full bg-[${item.state}] px-4 py-2 rounded-md flex justify-between items-center mb-4`}
          >
            <p className="text-white font-medium">{item.description}</p>
            <IoClose
              className="text-white text-xl cursor-pointer"
              onClick={() => handleDelete(item.id)}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Notifications;

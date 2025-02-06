import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaTransgenderAlt } from "react-icons/fa";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  if (!user) {
    return <div className="flex justify-center items-center h-screen text-lg font-semibold text-gray-700">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-row items-center border-4 border-gray-600 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          className="w-40 h-40 rounded-full border-4 border-gray-600 shadow-lg"
          src={user.picture.large}
          alt="User"
        />
        <div className="ml-8 text-white">
          <h2 className="text-3xl font-semibold text-gray-200">{user.name.first} {user.name.last}</h2>
          <div className="flex items-center text-lg text-gray-300 mt-4">
            <FaTransgenderAlt className="text-blue-400 mr-2" />
            <p><span className="font-medium text-gray-200">Gender:</span> {user.gender}</p>
          </div>
          <div className="flex items-center text-lg text-gray-300 mt-2">
            <FaPhoneAlt className="text-green-400 mr-2" />
            <p><span className="font-medium text-gray-200">Phone:</span> {user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}

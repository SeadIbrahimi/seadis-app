import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Motions from "./Motions";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  maidenName: string;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
}

function UserDetails() {
  const location = useLocation();
  const selectedUser = location.pathname.split("/")[2];

  const [user, setUser] = useState<User | null>(null);
  // const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${selectedUser}`)
      .then((res) => setUser(res.data));
    // .catch((err) => setError(err.message));
  }, []);

  return (
    <Motions>
      <div className="container mx-auto my-10">
        {user && (
            <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
              <div className="rounded-t-lg h-32 overflow-hidden">
                <img
                  className="object-cover object-top w-full"
                  src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cover"
                />
              </div>
              <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  className="object-cover object-center h-32"
                  src={user.image}
                  alt={user.firstName}
                />
              </div>
              <div className="text-center mt-2">
                <h2 className="font-semibold">
                  {user.firstName} ({user.maidenName}) {user.lastName}
                </h2>
                <p className="text-gray-500">{user.phone}</p>
              </div>
              <div className="p-4 border-t mx-8 mt-2">
              </div>
              <ul className="py-4  text-gray-700 flex items-center justify-around">
                <li className="flex flex-col items-center justify-around">
                  <span>Weight</span>
                  <div>{user.weight} Kg</div>
                </li>
                <li className="flex flex-col items-center justify-between">
                  <span>Height</span>
                  <div>{user.height} cm</div>
                </li>
                <li className="flex flex-col items-center justify-around">
                  <span>Age</span>
                  <div>{user.age}</div>
                </li>
              </ul>
            </div>
        )}
      </div>
    </Motions>
  );
}

export default UserDetails;

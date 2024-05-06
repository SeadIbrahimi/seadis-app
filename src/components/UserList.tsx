import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Motions from "./Motions";
import UserListHeader from "./UserListHeader";

interface Company {
  title: string;
}

type SortKeys = keyof User;

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  image: string;
  email: string;
  company: Company;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  // search
  const [search, setSearch] = useState("");

  //sorting
  const [sortedUsers, setSortedUsers] = useState<User[]>([]);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof User;
    direction: string;
  }>({ key: "id", direction: "" });

  const sortTable = (key: keyof User) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...users].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setSortedUsers(sortedData);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const currentUsers = sortConfig.direction
    ? sortedUsers.slice(firstIndex, lastIndex)
    : users.slice(firstIndex, lastIndex);

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle Search
  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  // Fetch the data and change the state
  useEffect(() => {
    let apiUrl = `https://dummyjson.com/users`;

    if (search.trim() !== "") {
      apiUrl += `/search?q=${search}`;
    }
    axios
      .get(apiUrl)
      .then((res) => setUsers(res.data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, [search]);

  const headers: { key: SortKeys; label: string }[] = [
    { key: "image", label: "" },
    { key: "id", label: "ID" },
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "age", label: "Age" },
    { key: "email", label: "Email" },
    { key: "company", label: "Company" },
  ];
  return (
    <section id="userTable" className="lg:py-20">
      <div className="container mx-auto border sm:rounded-lg">
        {/* Search, Filter, sorting */}

        <UserListHeader
          searchValue={search}
          onSearchChange={handleSearchChange}
        />

        {/* Users List */}

        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 cursor-pointer"
                    onClick={() => sortTable("id")}
                  >
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 cursor-pointer hidden sm:table-cell"
                    onClick={() => sortTable("id")}
                  >
                    <div className="flex gap-2 items-center">
                    <span>ID</span>
                    <svg className="h-3 w-3 text-gray-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 9l4-4l4 4m-4 -4v14" />  <path d="M21 15l-4 4l-4-4m4 4v-14" /></svg>
                    </div>
                    </th>
                  <th
                    scope="col"
                    className="px-4 py-3 cursor-pointer"
                    onClick={() => sortTable("firstName")}
                  >
                  <div className="flex gap-2 items-center">
                    <span>First Name</span>
                    <svg className="h-3 w-3 text-gray-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 9l4-4l4 4m-4 -4v14" />  <path d="M21 15l-4 4l-4-4m4 4v-14" /></svg>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 cursor-pointer  hidden sm:table-cell"
                    onClick={() => sortTable("lastName")}
                  >
                  <div className="flex gap-2 items-center">
                    <span>Last Name</span>
                    <svg className="h-3 w-3 text-gray-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 9l4-4l4 4m-4 -4v14" />  <path d="M21 15l-4 4l-4-4m4 4v-14" /></svg>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 cursor-pointer hidden sm:table-cell"
                    onClick={() => sortTable("age")}
                  >
                  <div className="flex gap-2 items-center">
                    <span>Age</span>
                    <svg className="h-3 w-3 text-gray-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 9l4-4l4 4m-4 -4v14" />  <path d="M21 15l-4 4l-4-4m4 4v-14" /></svg>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 cursor-pointer hidden sm:table-cell"
                    onClick={() => sortTable("email")}
                  >
                  <div className="flex gap-2 items-center">
                    <span>Email</span>
                    <svg className="h-3 w-3 text-gray-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 9l4-4l4 4m-4 -4v14" />  <path d="M21 15l-4 4l-4-4m4 4v-14" /></svg>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 cursor-pointer"
                    onClick={() => sortTable("company")}
                  >
                  <div className="flex gap-2 items-center">
                    <span>Title</span>
                    <svg className="h-3 w-3 text-gray-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 9l4-4l4 4m-4 -4v14" />  <path d="M21 15l-4 4l-4-4m4 4v-14" /></svg>
                    </div>
                  </th>
                  <th scope="col" className="px-4 py-3 cursor-pointer"></th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr className="hover:bg-gray-100" key={user.id}>
                    <td className="px-4 py-3">
                      <Link to={`/user/${user.id}/posts`}>
                        <img
                          className="lg:h-12 lg:w-12 h-6 w-6 flex-none rounded-full bg-gray-50"
                          src={user.image}
                          alt={user.firstName}
                        />
                      </Link>
                    </td>
                    <td className="px-4 py-3  hidden sm:table-cell">
                      <Link to={`/user/${user.id}/posts`}>{user.id}</Link>
                    </td>
                    <td className="px-4 py-3">
                      <Link to={`/user/${user.id}/posts`}>
                        {user.firstName}
                      </Link>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <Link to={`/user/${user.id}/posts`}>{user.lastName}</Link>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <Link to={`/user/${user.id}/posts`}>{user.age}</Link>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <Link to={`/user/${user.id}/posts`}>{user.email}</Link>
                    </td>
                    <td className="px-4 py-3">
                      <Link to={`/user/${user.id}/posts`}>
                        {user.company.title}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <Motions>
          <div className="relative overflow-hidden bg-gray-100 rounded-b-lg shadow-md ">
            <nav
              className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 ">
                Showing{" "}
                <span className="font-semibold">
                  {firstIndex + 1}-{Math.min(lastIndex, users.length)}
                </span>{" "}
                of <span className="font-semibold">{users.length}</span>
              </span>

              <ul className="inline-flex items-stretch -space-x-px">
                {Array.from({
                  length: Math.ceil(users.length / usersPerPage),
                }).map((_, index) => (
                  <li key={index}>
                    <button
                      className={`flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-300 hover:  ${
                        currentPage === index + 1
                          ? "text-white bg-gray-400 border-primary-300 hover:bg-gray-600 hover:text-white "
                          : ""
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Motions>
      </div>
    </section>
  );
}

export default UserList;

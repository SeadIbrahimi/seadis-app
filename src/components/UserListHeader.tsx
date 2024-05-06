import React from "react";
import Motions from "./Motions";

interface UserListHeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const UserListHeader: React.FC<UserListHeaderProps> = ({
  searchValue,
  onSearchChange,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onSearchChange(value);
  };


  return (
    <Motions>
      <div className="relative bg-gray-100   sm:rounded-t-lg">
        <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            {/* Search  */}

            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  value={searchValue}
                  onChange={handleSearchChange}
                  type="text"
                  id="simple-search"
                  className="block w-full p-2 pl-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 "
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </Motions>
  );
};

export default UserListHeader;

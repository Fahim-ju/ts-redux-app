import React, { useEffect, useState } from "react";
import { User } from "../components/UserList";
import { useAppDispatch } from "../redux/hooks";
import { getAllUser } from "../redux/user/getAllUserThunk";
import { unwrapResult } from "@reduxjs/toolkit";
import { Law } from "../components/LawList";

/* interface Option {
  data: User | Law;
}

interface DropDownMenuProps {
  options: Option[];
} */

export default function DropDownMenu(options: User[] | Law[]) {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [selectedOption, setSelectedOption] = useState<User | Law | null>(null);
  const dispatch = useAppDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("button clicked", isOpen);
  };

  const handleOptionClick = (option: User | Law) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen flex items-top justify-center">
      <div className="relative group">
        <button
          onClick={toggleDropdown}
          id="dropdown-button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        >
          <span className="mr-2">
            {selectedOption ? selectedOption.name : "User***"}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            id="dropdown-menu"
            className="absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
          >
            <input
              id="search-input"
              className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
              type="text"
              placeholder="Search items"
            ></input>

            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
              >
                {option.name}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

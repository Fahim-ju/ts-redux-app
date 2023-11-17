import React, { useEffect, useState } from "react";
import { User } from "../components/UserList";
import { useAppDispatch } from "../redux/hooks";
import { getAllUser } from "../redux/user/getAllUserThunk";
import { unwrapResult } from "@reduxjs/toolkit";
import { getAllLawthunk } from "../redux/law/getAllLawThunk";
import { Law } from "../components/LawList";
import { insertFine } from "../redux/fine/insertFineThunk";

interface Fine {
  lawId: number;
  law?: Law;
  isDeleted: boolean;
  note: string;
  userId: number;
  user?: User;
}

export default function InsertFineForm() {
  const [isUserOpen, setIsUserOpen] = useState<Boolean>(false);
  const [isLawOpen, setIsLawOpen] = useState<Boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedLaw, setSelectedLaw] = useState<Law | null>(null);
  const [searchUserValue, setSearchUserValue] = useState<string>("");
  const [searchLawValue, setSearchLawValue] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const dispatch = useAppDispatch();

  const [users, setUsers] = useState<User[]>([]);
  const [laws, setLaws] = useState<Law[]>([]);

  const fine: Fine = {
    lawId: selectedLaw ? selectedLaw.id : 0,
    // law: selectedLaw
    //   ? selectedLaw
    //   : {
    //       id: 0,
    //       name: "",
    //       description: "",
    //       amount: 0,
    //     },
    isDeleted: false,
    note: note,
    userId: selectedUser ? selectedUser.id : 0,
    // user: selectedUser
    //   ? selectedUser
    //   : {
    //       id: 0,
    //       name: "",
    //       totalFine: 0,
    //       isDeactivated: false,
    //       paid: 0,
    //       due: 0,
    //     },
  };

  useEffect(() => {
    dispatch(getAllUser())
      .then(unwrapResult)
      .then((res) => {
        setUsers(
          res.sort((a: User, b: User) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) return -1;
            else if (nameA > nameB) return 1;
            return 0;
          })
        );
      });
    dispatch(getAllLawthunk())
      .then(unwrapResult)
      .then((res) => {
        setLaws(res);
      });
  }, [dispatch]);

  ///user drop down
  const toggleUserDropdown = () => {
    setIsUserOpen(!isUserOpen);
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsUserOpen(false);
  };

  const handleUserSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUserValue(e.target.value);
    //const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(e.target.value.toLowerCase()) );
  };

  ///law drop down
  const toggleLawDropdown = () => {
    setIsLawOpen(!isLawOpen);
  };

  const handleLawClick = (law: Law) => {
    setSelectedLaw(law);
    setIsLawOpen(false);
  };

  const handleLawSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLawValue(e.target.value);
    //const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(e.target.value.toLowerCase()) );
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  const fineOnSubmitHandler = () => {
    console.log("implement fineSubmit", selectedLaw, selectedUser);
    dispatch(insertFine(fine))
      .then(unwrapResult)
      .then((res) => {
        setIsUserOpen(false);
        setIsLawOpen(false);
        setSelectedUser(null);
        setSelectedLaw(null);
        setNote("");
      });
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          <p>Create Fine</p>
        </h2>
      </div>
      <div className="mt-5 sm:mx-auto flex items-top justify-center">
        <div className="relative group z-10">
          <button
            onClick={toggleUserDropdown}
            id="dropdown-button"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          >
            <span className="mr-2">
              {selectedUser ? selectedUser.name : "User"}
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
          {isUserOpen && (
            <div
              id="dropdown-menu"
              className="absolute z-2 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
            >
              <input
                id="search-input"
                className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
                type="text"
                placeholder="Search Users"
                value={searchUserValue}
                onChange={handleUserSearchOnChange}
              ></input>

              {users.map((user) => (
                <li
                  key={user.id}
                  onClick={() => handleUserClick(user)}
                  className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md ${
                    user.name
                      .toLowerCase()
                      .includes(searchUserValue.toLocaleLowerCase())
                      ? ""
                      : "hidden"
                  }`}
                >
                  {user.name}
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 sm:mx-auto flex items-top justify-center">
        <div className="relative group z-0">
          <button
            onClick={toggleLawDropdown}
            id="dropdown-button"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          >
            <span className="mr-2">
              {selectedLaw ? selectedLaw.name : "Laws"}
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
          {isLawOpen && (
            <div
              id="dropdown-menu"
              className="absolute z-0 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
            >
              <input
                id="search-input"
                className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
                type="text"
                placeholder="Search items"
                value={searchLawValue}
                onChange={handleLawSearchOnChange}
              ></input>

              {laws.map((law) => (
                <li
                  key={law.id}
                  onClick={() => handleLawClick(law)}
                  className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md ${
                    law.name
                      .toLowerCase()
                      .includes(searchLawValue.toLowerCase())
                      ? ""
                      : "hidden"
                  }`}
                >
                  {law.name}
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-5  flex items-top justify-center">
        <textarea
          id="note"
          name="note"
          rows={3}
          value={note}
          onChange={handleNoteChange}
          className="block  sm:max-w-sm  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Write note here..."
        />
      </div>
      <button
        type="submit"
        onClick={fineOnSubmitHandler}
        className="mt-5 flex w-full justify-center sm:mx-auto sm:w-full sm:max-w-sm rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit
      </button>
    </>
  );
}

export type { Fine };

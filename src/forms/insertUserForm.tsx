import React, { ChangeEventHandler, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";

import { insertUser } from "../redux/user/insertUserThunk";
import { updateUser } from "../redux/user/updateUserThunk";

interface UserFormData {
  id?: number;
  name: string;
  totalFine: number;
  paid: number;
  due: number;
}

function InsertUserForm() {
  const location = useLocation();
  const { isUpdate, userData } = location.state
    ? location.state
    : {
        isUpdate: false,
        userData: { name: "", totalFine: 0, paid: 0, due: 0 },
      };
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    totalFine: 0,
    paid: 0,
    due: 0,
    ...userData,
  });

  const dispatch = useAppDispatch();

  const insertLawHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    if (isUpdate) {
      dispatch(updateUser(formData));
    } else dispatch(insertUser(formData));
    setFormData({
      name: "",
      totalFine: 0,
      paid: 0,
      due: 0,
    });
  };

  const handleInputChange: ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Link to="/users">
        <button
          className="middle none center rounded-lg bg-indigo-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          style={{ margin: "15px" }}
        >
          Show Users
        </button>
      </Link>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {isUpdate ? <p>Update Law</p> : <p>Insert User</p>}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="" onSubmit={insertLawHandler}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>

              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name:"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="totalFine"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Total Fine
              </label>

              <div className="mt-2">
                <input
                  id="totalFine"
                  name="totalFine"
                  type="number"
                  value={formData.totalFine}
                  onChange={handleInputChange}
                  placeholder="Total Fine:"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="paid"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Paid
              </label>

              <div className="mt-2">
                <input
                  id="paid"
                  name="paid"
                  type="number"
                  value={formData.paid}
                  onChange={handleInputChange}
                  placeholder="Paid:"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="due"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Due
              </label>

              <div className="mt-2">
                <input
                  id="due"
                  name="due"
                  type="number"
                  value={formData.due}
                  onChange={handleInputChange}
                  placeholder="Due:"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isUpdate ? <p>Update User</p> : <p>Insert User</p>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default InsertUserForm;
export type { UserFormData };

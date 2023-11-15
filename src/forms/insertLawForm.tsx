import React, { ChangeEventHandler, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { insertLaw } from "../redux/law/insertLawThunk";
import { updateLaw } from "../redux/law/updateLawThunk";

interface LawFormData {
  Id?: number;
  Name: string;
  Description: string;
  Amount: number;
}

function InsertLawForm() {
  const location = useLocation();
  const { isUpdate, lawData } = location.state
    ? location.state
    : { isUpdate: false, lawData: { Name: "", Description: "" } };
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Amount: 0,
    ...lawData,
  });

  const dispatch = useAppDispatch();

  const insertLawHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    if (isUpdate) {
      dispatch(updateLaw(formData));
    } else dispatch(insertLaw(formData));
    setFormData({
      Name: "",
      Description: "",
      Amount: 0,
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
      <Link to="/LawList">
        <button
          className="middle none center rounded-lg bg-indigo-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          style={{ margin: "15px" }}
        >
          Show Laws
        </button>
      </Link>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {isUpdate ? <p>Update Law</p> : <p>Insert Law</p>}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="" onSubmit={insertLawHandler}>
            <div>
              <label
                htmlFor="Law"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Law Name
              </label>

              <div className="mt-2">
                <input
                  id="Law"
                  name="Name"
                  type="text"
                  value={formData.Name}
                  onChange={handleInputChange}
                  placeholder="Law Name:"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="Description"
                  rows={3}
                  value={formData.Description}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Describe the law here..."
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Amount
              </label>

              <div className="mt-2">
                <input
                  id="amount"
                  name="Amount"
                  type="number"
                  value={formData.Amount}
                  onChange={handleInputChange}
                  placeholder="Amount:"
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
                {isUpdate ? <p>Update Law</p> : <p>Insert Law</p>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default InsertLawForm;
export type { LawFormData };

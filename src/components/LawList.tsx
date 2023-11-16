import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { getAllLawthunk } from "../redux/law/getAllLawThunk";
import { unwrapResult } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { deleteLaw } from "../redux/law/deleteLawThunk";

interface Law {
  id: number;
  name: string;
  description: string;
  amount: number;
}

export function LawList() {
  const dispatch = useAppDispatch();

  const [laws, setLaws] = useState<Law[]>([]);

  useEffect(() => {
    dispatch(getAllLawthunk())
      .then(unwrapResult)
      .then((res) => {
        setLaws(res);
      });

    /* return () => {
      console.log("return of useEffect in LawList");
    }; */
  }, [dispatch]);

  /* if (laws.length === 0) {
    return <div> Loading...</div>;
  } */

  const deleteButtonClickHandler = (Id: number) => {
    dispatch(deleteLaw(Id))
      .then(unwrapResult)
      .then((res) => {
        setLaws(laws.filter((x) => x.id !== Id));
      });
  };

  return (
    <div>
      <Link
        to="/insertLaw"
        state={{
          isUpdate: false,
          lawData: {
            Id: "",
            Name: "",
            Description: "",
          },
        }}
      >
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
          style={{ margin: "10px" }}
        >
          Add Law
        </button>
      </Link>{" "}
      <br></br>
      <table className="min-w-full border-collapse block md:table">
        <caption className="bg-gray-700 p-2 text-white font-bold ">
          List of All Laws
        </caption>
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Law Name
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              {" "}
              Description
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              {" "}
              Amount
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {laws.map((law) => (
            <tr
              key={law.id}
              className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Name
                </span>
                {law.name}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Description
                </span>
                {law.description}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Amount
                </span>
                {law.amount}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Actions
                </span>
                <Link
                  to="/insertLaw"
                  state={{
                    isUpdate: true,
                    lawData: {
                      Id: law.id,
                      Name: law.name,
                      Description: law.description,
                      Amount: law.amount,
                    },
                  }}
                >
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    Edit
                  </button>
                </Link>{" "}
                <span> </span>
                <button
                  onClick={() => deleteButtonClickHandler(law.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type { Law };

import { useAppDispatch } from "../redux/hooks";
import { useEffect, useState } from "react";
import { getAllLawthunk } from "../redux/law/getAllLawThunk";
import { unwrapResult } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { deleteLaw } from "../redux/law/deleteLawThunk";
import { getAllUser } from "../redux/user/getAllUserThunk";
import { DeActivateUser } from "../redux/user/DeActivateUserThunk";

interface User {
  id: number;
  name: string;
  isDeactivated: boolean;
  totalFine: number;
  paid: number;
  due: number;
}

export default function UserList() {
  const dispatch = useAppDispatch();

  const [users, setUsers] = useState<User[]>([]);
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
  }, [dispatch]);

  const userStatusHandler = (user: User) => {
    const userStatus = user.isDeactivated ? false : true;
    dispatch(DeActivateUser({ ...user, isDeactivated: userStatus }))
      .then(unwrapResult)
      .then(() => {
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
      });
  };

  return (
    <div>
      <Link
        to="/insertUser"
        state={{
          isUpdate: false,
          userData: {
            name: "",
            totalFine: 0,
            paid: 0,
            due: 0,
          },
        }}
      >
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
          style={{ margin: "10px" }}
        >
          Add users
        </button>
      </Link>{" "}
      <br></br>
      <table className="min-w-full border-collapse block md:table">
        <caption className="bg-gray-700 p-2 text-white font-bold ">
          List of All Users
        </caption>
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Law Name
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              {" "}
              Total Fine
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              {" "}
              Paid
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              {" "}
              Due
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {users.map((user) => (
            <tr
              key={user.id}
              className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Name
                </span>
                {user.name}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Total Fine
                </span>
                {user.totalFine}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Paid
                </span>
                {user.paid}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Due
                </span>
                {user.due}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Actions
                </span>
                <Link
                  to="/insertUser"
                  state={{
                    isUpdate: true,
                    userData: {
                      id: user.id,
                      name: user.name,
                      totalFine: user.totalFine,
                      paid: user.paid,
                      due: user.due,
                    },
                  }}
                >
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    Edit
                  </button>
                </Link>{" "}
                <span> </span>
                <button
                  onClick={() => userStatusHandler(user)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                >
                  {user.isDeactivated ? "Activate" : "Deactivate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type { User };

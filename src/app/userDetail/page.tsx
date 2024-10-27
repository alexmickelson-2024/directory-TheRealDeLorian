import React from "react";
import { personDbService } from "../../../features/directory/personDbService";
import UserCircleIcon from "@heroicons/react/24/solid/esm/UserCircleIcon";

export default async function UserDetail() {
  const users = await personDbService.getUserById(1);


  return (
    <>
      <div className="">
        {users.map((user) => (
            <div key={user.id} className="px-6 py-3 max-w-sm mx-auto bg-white rounded-lg shadow-lg">
              <div className="flex gap-x-4">
                <div>
                  <UserCircleIcon
                    className="h-16 w-16 fill-slate-300"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-xl font-medium text-black">
                    {user.first_name} {user.last_name}
                  </p>
                  <p className="text-slate-500">{user.email}</p>
                  <p className="text-slate-500"> {user.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4 justify-end">
                <div className="hover:underline select-none cursor-pointer ">
                  Delete
                </div>
                <div className="hover:bg-slate-300 select-none cursor-pointer bg-slate-200 rounded-lg px-4 py-2">
                  Edit
                </div>
              </div>
            </div>
        ))}
      </div>
    </>
  );
}

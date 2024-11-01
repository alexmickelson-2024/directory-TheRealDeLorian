import { personDbService } from "../../../../features/directory/personDbService";
import UserCircleIcon from "@heroicons/react/24/solid/esm/UserCircleIcon";
import { getUserFromCookie } from "../../../../features/authentication/getUserFromCookie";
import EditForm from "./EditForm";



export default async function UserDetail({ params }: {params: Promise<{userId: string}>}) {
  const selectedUserId = (await params).userId;
  const selectedUser = await personDbService.getUserById(selectedUserId);
  const currentLoggedInUser = await getUserFromCookie();

  //personDbService.editUser including the user's privacy info and SQL statements that edit the info
  //make the home page display the info or not based on the privacy parameter
    //how to do this? change the sql to not even get it? is the data secure if I just don't display it? How can i know?
  //new edit component that calls the editUser function I assume
  //make the details page only display the edit button and edit component if the emails match

  return (
    <>
      <div className="">
        <div
          key={selectedUser.id}
          className="px-6 py-3 max-w-sm mx-auto bg-white rounded-lg shadow-lg"
        >
          <div className="flex gap-x-4">
            <div>
              <UserCircleIcon
                className="h-16 w-16 fill-slate-300"
                aria-hidden="true"
              />
            </div>

            <div>
              <p className="text-xl font-medium text-black">
                {selectedUser.first_name} {selectedUser.last_name}
              </p>
              <p className="text-slate-500">{selectedUser.first_name}</p>
              <p className="text-slate-500"> {selectedUser.phone}</p>
            </div>
          </div>
          {currentLoggedInUser &&
          currentLoggedInUser.email == selectedUser.email ? (
            <div className="flex items-center gap-x-4 justify-end">
              <div className="hover:underline select-none cursor-pointer ">
                Delete
              </div>
              <div className="hover:bg-slate-300 select-none cursor-pointer bg-slate-200 rounded-lg px-4 py-2">
                Edit
              </div>
            </div>
          ) : (
            ""
          )}
          {currentLoggedInUser &&
          currentLoggedInUser.email == selectedUser.email ? (
            <EditForm user={selectedUser}/>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

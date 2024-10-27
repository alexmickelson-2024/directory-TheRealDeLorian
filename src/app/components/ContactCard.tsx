import React from "react";
import { DirectoryUser } from "../../../features/directory/personModel";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface ContactCardProps {
  user: DirectoryUser;
}

export const ContactCard: React.FC<ContactCardProps> = ({ user }) => {
  return (
    <Link href={`userDetail`} passHref>
        <div className="bg-white shadow-lg p-6 gap-x-4 flex items-center rounded-lg m-2 max-w-xs cursor-pointer hover:bg-slate-100 transition-colors">
            <UserCircleIcon
              className="h-16 w-16 fill-slate-300"
              aria-hidden="true"
            />
            
            {user.first_name} {user.last_name}
        </div>
    </Link>
  );
};

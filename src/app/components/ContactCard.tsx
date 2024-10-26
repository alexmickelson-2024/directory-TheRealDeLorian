import React from "react";
import { DirectoryUser } from "../../../features/directory/personModel";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface ContactCardProps {
  user: DirectoryUser;
}

export const ContactCard: React.FC<ContactCardProps> = ({ user }) => {
  return (
    <Link href={`userDetail/${user.id}`} passHref>

    <div>
      <div className="bg-slate-200 rounded p-4 m-2 max-w-xs cursor-pointer hover:bg-slate-300 transition-colors">
        <div>
        <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
        </div>
        {user.first_name} {user.last_name} {user.email}
      </div>
    </div>
    </Link>
  );
};

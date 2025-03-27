import {
  HomeIcon,
UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import LoginLogoutButton from "../../features/authentication/AuthSetup";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Details",
    href: `/userDetail`,
    icon: UserIcon,
  },
];

export default function NavLinks() {
  return (
    <>
      <div className="flex mb-3"> {/*flex space-x-4 mb-3 max-w-sm md:max-w-full mx-auto*/}

        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
            key={link.name}
            href={link.href}
            className="flex p-6 rounded text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition duration-200"
            >
            <LinkIcon className="w-6 h-6" />
            <span className="hidden md:block ml-2">{link.name}</span>
          </Link>
          );
        })}
        <div className="flex items-center justify-end rounded text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition duration-200 cursor-pointer">
          <LoginLogoutButton></LoginLogoutButton>
        </div>
      </div>
    </>
  );
}

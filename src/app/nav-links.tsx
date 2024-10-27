import {
  HomeIcon,
UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

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
      <div className="flex space-x-4 mb-3 max-w-sm md:max-w-full mx-auto">
        
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
            key={link.name}
            href={link.href}
            className="flex items-center p-6 rounded text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition duration-200"
          >
            <LinkIcon className="w-6 h-6" />
            <span className="hidden md:block ml-2">{link.name}</span>
          </Link>
          );
        })}
      </div>
    </>
  );
}

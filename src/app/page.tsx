import { getUserFromCookie } from "../../features/authentication/getUserFromCookie";
import { personDbService } from "../../features/directory/personDbService";
import { ContactCard } from "./components/ContactCard";

export default async function Home() {
  const users = await personDbService.getAllUsers();
  const user = await getUserFromCookie();


  return (
    <div>
      <div className="max-w-sm mx-auto">
        your name is {user?.givenName}
        <div className="text-center font-bold">Contacts</div>
        {users.map((user) => (
          <ContactCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

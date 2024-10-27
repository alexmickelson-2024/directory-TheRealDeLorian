import { personDbService } from "../../features/directory/personDbService";
import { ContactCard } from "./components/ContactCard";

export default async function Home() {
  const users = await personDbService.getAllUsers();

  return (
    <div>
      <div className="max-w-sm mx-auto">
        <div className="text-center font-bold">Contacts</div>
        {users.map((user) => (
          <ContactCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

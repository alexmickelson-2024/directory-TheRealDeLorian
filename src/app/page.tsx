import { personDbService } from "../../features/directory/personDbService";
import { ContactCard } from "./components/ContactCard";

export default async function Home() {
  const users = await personDbService.getAllUsers();

  return (
    <div>
      <main>
        <div className="container mx-auto">
          {users.map((user) => (
              <ContactCard key={user.id} user={user} />
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

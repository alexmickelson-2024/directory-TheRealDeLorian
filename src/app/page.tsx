import Image from "next/image";
import { personDbService } from "../../features/directory/personDbService"

export default async function Home() {
  const users = await personDbService.getAllUsers();

  return (
    <div>
      <main >
        { users.map(user => (
          <div>{user.first_name} {user.last_name}, {user.email}</div>
        ))}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}

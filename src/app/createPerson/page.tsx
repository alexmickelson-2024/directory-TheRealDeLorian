import { personDbService } from "../../../features/directory/personDbService"
import React from 'react'
import CreatePerson from "./CreatePersonComponent";

export default async function Page() {
  const people = await personDbService.getAllUsers();
  return (
    <div>
      <CreatePerson></CreatePerson>
    <div>number of people: {people.length}</div>
    </div>
  )
}


"use server"

import { personDbService } from "./personDbService"

export async function CreatePerson()
{
  await personDbService.createUser({
    first_name: "josh",
    last_name: "shmiggit",
    phone:"53458345",
    email: "thrh@jgli.sdfs",
    first_name_status,
    last_name_status,
    phone_status,
    email_status

  })
}
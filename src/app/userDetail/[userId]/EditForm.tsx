"use client"

import React, { useState } from "react";
import { DirectoryUser } from "../../../../features/directory/personModel";

interface UserDetailProps {
  user: DirectoryUser;
}

export default function EditForm({ user }: UserDetailProps) {
  // const selectedUserId = user.id;
  const [firstName, setFirstName] = useState(user.first_name);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  // const handleSubmit = async () => {
  //   const newUser: DirectoryUser = {
  //     id: selectedUserId,
  //     first_name: firstName,
  //     last_name: user.last_name,
  //     phone: user.phone,
  //     email: user.email,
  //     created_at: user.created_at,
  //     first_name_status: user.first_name_status,
  //     last_name_status: user.last_name_status,
  //     phone_status: user.phone_status,
  //     email_status: user.email_status,
  //   };
  
  //   try {
  //     await personDbService.editUser(newUser);
  //     // Optionally add success feedback here
  //     console.log("User updated successfully");
  //   } catch (error) {
  //     // Handle error here
  //     console.error("Error updating user:", error);
  //   }
  // };
  
  
  return (
    <>

      <div>Editform</div>
      <div>edit user number {user.id}</div>

      <div>
        <input value={firstName} onChange={handleNameChange}></input>
        <button >Save</button>
        <div>edit name</div>
        <div>toggle name privacy</div>
        <div>toggle email privacy</div>
        <div>edit phone number</div>
        <div>toggle phone privacy</div>
      </div>
      <button>Save edits</button>
    </>
  );
}

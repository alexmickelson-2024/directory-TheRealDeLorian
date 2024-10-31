import { Pool } from "pg";
import { AttributeStatus, DirectoryUser } from "./personModel";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT ?? "5432"),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});


export const personDbService = {
  createUser: async ({
    first_name,
    last_name,
    phone,
    email,
    first_name_status,
    last_name_status,
    phone_status,
    email_status,
  }: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    first_name_status: AttributeStatus;
    last_name_status: AttributeStatus;
    phone_status: AttributeStatus;
    email_status: AttributeStatus;
  }) => {
    await pool.query(
      `insert into directory_user
        (first_name, last_name, phone, email, first_name_status, last_name_status, phone_status, email_status) 
      values
        ($1, $2, $3, $4, $5, $6, $7, $8)
      `,
      [
        first_name,
        last_name,
        phone,
        email,
        first_name_status,
        last_name_status,
        phone_status,
        email_status,
      ]
    );
  },
  getAllUsers: async () => {
    const res = await pool.query<DirectoryUser>(`
      select 
        id,
        first_name,
        last_name,
        phone,
        email,
        first_name_status,
        last_name_status,
        phone_status,
        email_status
      from directory_user
    `);
    // console.log(res.rows);
    return res.rows;
  },
  getUserById: async (id: string) => {
    const res = await pool.query<DirectoryUser>(`
      select 
        id,
        first_name,
        last_name,
        phone,
        email,
        first_name_status,
        last_name_status,
        phone_status,
        email_status
      from directory_user
      where id = $1
    `, [id]); 
    return res.rows[0];
  },  
  editUser: async (user: DirectoryUser) => {
    const res = await pool.query(`
      UPDATE directory_user
      SET 
        first_name = $1,
        last_name = $2,
        phone = $3,
        email = $4,
        first_name_status = $5,
        last_name_status = $6,
        phone_status = $7,
        email_status = $8
      WHERE id = $9
    `, [
      user.first_name,
      user.last_name,
      user.phone,
      user.email,
      user.first_name_status,
      user.last_name_status,
      user.phone_status,
      user.email_status,
      user.id
    ]);
    console.log("database update success: ", res);
    return; 
  }
};
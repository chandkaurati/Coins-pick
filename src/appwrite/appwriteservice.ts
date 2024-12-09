import { Client, Account, ID } from "appwrite";

const client = new Client().setProject(
  import.meta.env.VITE_APPWRITE_PROJECT_ID
); // Your project ID

const account = new Account(client);

interface UserDataType {
  name?: string;
  email: string;
  password: string;
}

export async function RegisterUser({ name, email, password }: UserDataType) {
  const responce = await account.create(ID.unique(), email, password, name);
  console.log(responce);
  if (!responce) throw new Error("failed to create User");
  return responce
}

export async function LoginUser({ email, password }: UserDataType) {
  const responce = await account.createEmailPasswordSession(email, password);
  if (!responce) throw new Error("failed to create User");
  console.log(responce);
  return responce;
}

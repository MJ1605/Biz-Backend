import { account } from "./appwrite";

export function sleep(ms: number)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export const isLoggedIn = async (): Promise<boolean> => {
  try {
    await account.get(); // fetch current user
    return true;
  } catch {
    return false;
  }
};
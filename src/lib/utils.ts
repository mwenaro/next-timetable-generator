import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const fetcher = async (url: string) => {
  try {
    return await (await fetch(url)).json();
  } catch (error) {
    throw error;
  }
};
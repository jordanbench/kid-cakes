import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "contacts.json");

export interface Contact {
  id: string;
  name: string;
  email: string;
  plan: string;
  createdAt: string;
}

export function readContacts(): Contact[] {
  if (!existsSync(FILE_PATH)) return [];
  try {
    return JSON.parse(readFileSync(FILE_PATH, "utf-8")) as Contact[];
  } catch {
    return [];
  }
}

export function appendContact(
  data: Omit<Contact, "id" | "createdAt">
): Contact {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
  const contacts = readContacts();
  const contact: Contact = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  contacts.push(contact);
  writeFileSync(FILE_PATH, JSON.stringify(contacts, null, 2));
  return contact;
}

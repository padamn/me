import { db } from "./db";
import { eq, desc, asc } from "drizzle-orm";
import {
  entries,
  type Entry,
  type InsertEntry,
  type CreateEntryRequest,
} from "@shared/schema";

export interface IStorage {
  getEntries(): Promise<Entry[]>;
  getEntryBySlug(slug: string): Promise<Entry | undefined>;
  createEntry(entry: CreateEntryRequest): Promise<Entry>;
}

export class DatabaseStorage implements IStorage {
  async getEntries(): Promise<Entry[]> {
    return await db.select().from(entries).orderBy(asc(entries.order));
  }

  async getEntryBySlug(slug: string): Promise<Entry | undefined> {
    const [entry] = await db.select().from(entries).where(eq(entries.slug, slug));
    return entry;
  }

  async createEntry(insertEntry: CreateEntryRequest): Promise<Entry> {
    const [entry] = await db.insert(entries).values(insertEntry).returning();
    return entry;
  }
}

export const storage = new DatabaseStorage();

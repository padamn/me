import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const entries = pgTable("entries", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  slug: text("slug").notNull().unique(),
  date: text("date").notNull(), // Display date like "Monday, Oct 2nd"
  doodleUrl: text("doodle_url"),
  isCrossedOut: boolean("is_crossed_out").default(false), // For that "messy" look in the index
  order: serial("order").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertEntrySchema = createInsertSchema(entries).omit({ 
  id: true, 
  createdAt: true,
  order: true 
});

export type Entry = typeof entries.$inferSelect;
export type InsertEntry = z.infer<typeof insertEntrySchema>;

export type CreateEntryRequest = InsertEntry;
export type UpdateEntryRequest = Partial<InsertEntry>;

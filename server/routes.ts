import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.entries.list.path, async (req, res) => {
    const entries = await storage.getEntries();
    res.json(entries);
  });

  app.get(api.entries.get.path, async (req, res) => {
    const entry = await storage.getEntryBySlug(req.params.slug);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.json(entry);
  });

  // Seed data function
  async function seed() {
    const existing = await storage.getEntries();
    if (existing.length === 0) {
      console.log("Seeding diary entries...");
      
      await storage.createEntry({
        title: "Monday: The Start of It All",
        content: "So, Mom bought me this journal. I specifically told her to get one that didn't say 'diary' on it, but here we are. \n\nIf she thinks I'm going to write down my 'feelings' in here or whatever, she's crazy. The only reason I agreed to do this at all is because I figure later on when I'm rich and famous, I'll have better things to do than answer people's stupid questions all day long. So this book is gonna come in handy.",
        date: "Monday, Oct 2nd",
        slug: "monday-start",
        isCrossedOut: false,
        doodleUrl: null,
        order: 1
      });

      await storage.createEntry({
        title: "Tuesday: Physical Education",
        content: "Today in P.E. we had to do square dancing. I got paired up with Fregley. \n\nI tried to trade partners with Rowley but he pretended not to hear me. Note to self: Get new friends.",
        date: "Tuesday, Oct 3rd",
        slug: "tuesday-pe",
        isCrossedOut: true,
        doodleUrl: null,
        order: 2
      });

      await storage.createEntry({
        title: "Wednesday: The Plan",
        content: "I've come up with a plan to become class favorite. It involves a very specific combination of jokes and carefully timed pratfalls. \n\nAlso, I need to figure out how to avoid the Cheese Touch. It's spreading.",
        date: "Wednesday, Oct 4th",
        slug: "wednesday-plan",
        isCrossedOut: false,
        doodleUrl: null,
        order: 3
      });
      
      console.log("Seeding complete!");
    }
  }

  // Run seed
  seed().catch(console.error);

  return httpServer;
}

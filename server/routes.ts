import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { entries } from "@shared/schema";
import { db } from "./db";

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

  async function seed() {
    const existing = await storage.getEntries();
    if (existing.length === 0) {
      console.log("Seeding diary content...");
      
      const seedData = [
        // Questions
        { type: 'question', title: "What's a secret you've never told anyone?", content: "I used to think that if I swallowed a watermelon seed, a watermelon would grow in my stomach. I'm 20 now and I still get a little nervous when I eat watermelon.", slug: "secret-watermelon", order: 10 },
        { type: 'question', title: "What are you most afraid of?", content: "The Cheese Touch. Obviously. But also, failing at things I actually care about. That's the real scary stuff.", slug: "fear-failure", order: 11 },
        
        // Thoughts
        { type: 'note', title: "On Being Human", content: "I think we're all just pretending to know what we're doing. Some people are just better at the 'pretending' part than others.", slug: "being-human", order: 20 },
        { type: 'note', title: "Unfinished Business", content: "I keep starting things and not finishing them. This entry is a perfect exampl—", slug: "unfinished", order: 21, isCrossedOut: true },
        
        // Music
        { type: 'playlist', title: "Löded Diper - Explöded Knee", content: "Listened to this while trying to look cool in front of my brother's friends. Didn't work.", extraInfo: "Listen when: You want to feel like a rockstar (but aren't one)", slug: "loded-diper", order: 30 },
        
        // About
        { type: 'about', title: "Things that matter", content: "- Good stories\n- Not getting the Cheese Touch\n- My sketchbook\n- Sincere conversations", slug: "matters", order: 40 },
        { type: 'about', title: "Things I'm bad at", content: "- Small talk\n- Sharing my fries\n- Remembering names\n- Being 'polished'", slug: "bad-at", order: 41 }
      ];

      for (const data of seedData) {
        await storage.createEntry(data as any);
      }
      
      console.log("Seeding complete!");
    }
  }

  seed().catch(console.error);

  return httpServer;
}

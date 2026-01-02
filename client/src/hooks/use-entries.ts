import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { z } from "zod";

// Helper to infer types from the Zod schemas in routes
type EntriesListResponse = z.infer<typeof api.entries.list.responses[200]>;
type EntryResponse = z.infer<typeof api.entries.get.responses[200]>;

// GET /api/entries
export function useEntries() {
  return useQuery({
    queryKey: [api.entries.list.path],
    queryFn: async () => {
      const res = await fetch(api.entries.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch diary entries");
      return api.entries.list.responses[200].parse(await res.json());
    },
  });
}

// GET /api/entries/:slug
export function useEntry(slug: string) {
  return useQuery({
    queryKey: [api.entries.get.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.entries.get.path, { slug });
      const res = await fetch(url, { credentials: "include" });
      
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch entry");
      
      return api.entries.get.responses[200].parse(await res.json());
    },
  });
}

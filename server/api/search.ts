import Fuse from "fuse.js";
import { database } from "~/server/agents.database";
import { Agent } from "~/app/agents/types";

const fuseOptions: Fuse.IFuseOptions<SearchResults> = {
  keys: ["codeName"],
};

const searchEngine = new Fuse(database, fuseOptions);

const apiHandler = defineEventHandler<Array<Agent>>((event) => {
  const query = getQuery(event);
  if (!query.q) {
    return [];
  }
  return searchEngine.search(query.q as string).map((it) => it.item);
});

export default apiHandler;

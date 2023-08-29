import Fuse from "fuse.js";

type SearchResults = { url: string; title: string };

const fuseOptions: Fuse.IFuseOptions<SearchResults> = {
  keys: ["title"],
};
const database: SearchResults[] = [
  { url: "/agents/1234", title: "Agent Mario" },
  { url: "/agents/1234", title: "Agent Wario" },
];

const searchEngine = new Fuse(database, fuseOptions);

const apiHandler = defineEventHandler<Array<SearchResults>>((event) => {
  const query = getQuery(event);
  if (!query.q) {
    return [];
  }
  return searchEngine.search(query.q as string).map((it) => it.item);
});

export default apiHandler;

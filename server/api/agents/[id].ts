import { database } from "~/server/agents.database";
import { Agent } from "~/app/agents/types";

const apiHandler = defineEventHandler<Agent>((event) => {
  const id = parseInt(event.context.params?.id ?? "");
  return database.find((it) => it.id === id);
});

export default apiHandler;

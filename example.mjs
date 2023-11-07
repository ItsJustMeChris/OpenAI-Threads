import { OpenAIThread } from "./index.mjs";

const thread = new OpenAIThread("asst_Qpb...");

thread.registerFunction("get_event_patrons_count_on_date", ({ date }) => {
  console.log(date);
  return {
    success: true,
    patrons: 100,
  };
});

thread.registerEvent("requires_action", (run) => {
  console.log("requires_action", run);
});

thread.registerEvent("queued", (run) => {
  console.log("queued", run);
});

thread.registerEvent("in_progress", (run) => {
  console.log("in_progress", run);
});

thread.registerEvent("completed", (run) => {
  console.log("completed", run);
});

thread.registerEvent("expired", (run) => {
  console.log("expired", run);
});

thread.registerEvent("cancelling", (run) => {
  console.log("cancelling", run);
});

thread.registerEvent("cancelled", (run) => {
  console.log("cancelled", run);
});

thread.registerEvent("failed", (run) => {
  console.log("failed", run);
});

await thread.createThread();
await thread.createUserMessage(
  "How many users were at the event on 2023-10-10."
);
await thread.runThread("Help the user.");

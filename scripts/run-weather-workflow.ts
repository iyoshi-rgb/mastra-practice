import { mastra } from "../src/mastra/index.ts";

async function main() {
  try {
    const workflow = mastra.getWorkflow("weatherWorkflow");

    const run = await workflow.createRunAsync();
    const result = await run.start({
      inputData: {
        // 任意の入力。必要に応じて変更してください
        city: "Tokyo",
      },
    });

    if (result.status !== "success") {
      console.error("Workflow did not succeed:", JSON.stringify(result, null, 2));
      process.exit(1);
    }

    console.log("\n=== Workflow Result ===");
    console.log(JSON.stringify(result.result, null, 2));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();



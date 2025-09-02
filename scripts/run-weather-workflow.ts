import { mastra } from "../src/mastra/index.ts";

async function main() {
  try {

    // workflowを取得
    const workflow = mastra.getWorkflow("weatherWorkflow");

    const run = await workflow.createRunAsync();

    // workflowを実行
    const result = await run.start({
      inputData: {
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



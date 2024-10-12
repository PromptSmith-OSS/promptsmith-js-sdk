import PromptSmith from "promptsmith-js-sdk/build/main/lib/sdk";
import dotenv from 'dotenv';

dotenv.config();

/**
 * This is an example of how to use the PromptSmith SDK in a TypeScript project.
 */
function main() {

  const url = process.env.PROMPTSMITH_URL || 'http://localhost:3000';
  const apiKey = process.env.PROMPTSMITH_API_KEY || 'api_key';

  const client = new PromptSmith(url, apiKey, 60);

  const uniqueKey = 'nz_tax_rate';

  client.getPrompt(uniqueKey).then((prompt) => {
    console.log(prompt);
  }).catch((error) => {
    console.error(error);
  });
}


main();


import PromptSmith from "promptsmith-js-sdk";


function main() {
  const client = new PromptSmith('http://localhost:3000', 'api_key', 60);
  console.log(client);
}

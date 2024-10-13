import PromptSmith, {Prompt} from "promptsmith-js-sdk/build/main/lib/sdk";


export const promptSmithFetcher = async (promptKey: string): Promise<Prompt> => {
  const url = process.env.PROMPTSMITH_API_URL || 'http://localhost:3000';
  const key = process.env.PROMPTSMITH_API_KEY || '';
  const sdk = new PromptSmith(url, key, 60);
  const prompt = await sdk.getPrompt(promptKey);
  return prompt;
}

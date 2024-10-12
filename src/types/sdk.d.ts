import {Prompt} from "../lib/sdk";


declare class PromptSmith {
  public async(unique_key: string): Promise<Prompt>
}

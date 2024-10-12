import axios, {AxiosInstance} from 'axios';

export type Prompt = {
  unique_key: string;
  description: string;
  uuid: string;
  name: string;
  percentage: number;
  content: string;
  llm_model_name?: string;
}


export class PromptSmith {
  private axiosInstance: AxiosInstance;
  private readonly ttlInSeconds: number;
  private cache: Map<string, {
    value: Prompt,
    timestamp: number
  }> = new Map();

  constructor(baseURL: string, api_key: string, ttlInSeconds: number = 60) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`,
      },
    });
    this.ttlInSeconds = ttlInSeconds;
  }

  public getPrompt = async (unique_key: string): Promise<Prompt> => {
    const cachedData = this.getCache(unique_key);
    if (cachedData) {
      return cachedData;
    }
    const response = await this.axiosInstance.get(`/api/sdk/prompt/${unique_key}`);
    const {data} = response;
    this.setCache(unique_key, data);
    return data;
  }

  private setCache(key: string, value: Prompt) {
    this.cache.set(key, {value, timestamp: Date.now()});
  }

  /**
   * Get value from cache return null if not found or expired
   * @param key
   * @private
   */

  private getCache(key: string): Prompt | null {
    const data = this.cache.get(key);
    if (!data) {
      return null;
    }
    const {value, timestamp} = data;
    if (Date.now() - timestamp > this.ttlInSeconds * 1000) {
      this.cache.delete(key);
      return null;
    }
    return value;
  }
}


export default PromptSmith;

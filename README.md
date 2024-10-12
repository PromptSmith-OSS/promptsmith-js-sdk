# promptsmith-js-sdk

> JS/TS SDK for Prompt Smith.


The Prompt Smith JS SDK is a NodeJS package that provides a simple way to interact with the Prompt Smith API. 
The SDK is designed to make it easy to integrate the Prompt Smith API into your LLM RAG and Agent applications, including support of Vercel AI / Edge functions.

## Installation

```bash

npm install promptsmith-js-sdk

```


## Example

```javascript
import PromptSmith from "promptsmith-js-sdk/build/main/lib/sdk";
const url =  'http://localhost:3000';
const apiKey =  'api_key';

const client = new PromptSmith(url, apiKey, 60);

const uniqueKey = 'nz_tax_rate';

client.getPrompt(uniqueKey).then((prompt) => {
  console.log(prompt);
}).catch((error) => {
  console.error(error);
});

```

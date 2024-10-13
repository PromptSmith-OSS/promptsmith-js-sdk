import {Configuration, OpenAIApi} from "openai-edge";
import {OpenAIStream, StreamingTextResponse} from "ai";
import {promptSmithFetcher} from "@/lib/promptsmith";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request) {
    let {messages} = await req.json();

    const systemPromptResp = await promptSmithFetcher("nz_tax_rate");

    if (systemPromptResp?.content) {

        if (messages.length <= 1) {
            messages = [
                {
                    role: 'system',
                    content: systemPromptResp.content,
                },
                ...messages
            ]
        }

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            stream: true,
            temperature: 0.2,
            messages,
        });

        const stream = OpenAIStream(response);

        return new StreamingTextResponse(stream);
    }
}



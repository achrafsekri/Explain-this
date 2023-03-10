import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
interface IncommingPrompt {
  prompt: string;
}

const generatePrompt = (prompt: Partial<IncommingPrompt>) => {
  return `explain ${prompt.prompt}`;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://explain-this.vercel.app"
  );
  const incommingPrompt = req.query as Partial<IncommingPrompt>;
  const prompt = generatePrompt(incommingPrompt);
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.6,
      max_tokens: 2048,
    });

    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { Partial } from "utility-types";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
interface IncommingPrompt {
  prompt: string;
}

const generatePrompt = (prompt: IncommingPrompt) => {
  return `explain ${prompt.prompt}`;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

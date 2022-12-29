import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import Input from "../components/Home/Input";
import { useState } from "react";
import axios from "axios";

const Page: NextPageWithLayout = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handlePromptInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };
  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`http://localhost:3000/api/explain?prompt=${prompt}}`)
      .then((res) => {
        console.log(res.data.result);
        setResult(res.data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container h-full max-h-full pt-20 mx-auto max-w-7xl">
      <div className="flex flex-col items-center justify-center space-y-3">
        <h1 className="text-5xl font-bold text-center capitalize">
          Let me Explain this
        </h1>
        <p className="text-xl text-center">
          Generate Short, Concise and Easy-to-Understand Explanations of Any
          Concept in Seconds!
        </p>
        <Input onChange={handlePromptInput} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;

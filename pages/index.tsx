import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import { ReactElement, useEffect } from "react";
import Input from "../components/Home/Input";
import { useState, useRef } from "react";
import axios from "axios";
import Button from "../components/Button";
import Loading from "../components/Loading";

const Page: NextPageWithLayout = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handlePromptInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();
    setLoading(true);
    if (prompt == "") {
      inputRef.current?.classList.add("ring-red-500");
      inputRef.current?.focus();
      setLoading(false);
    } else {
      axios
        .get(`http://localhost:3000/api/explain?prompt=${prompt}`)
        .then((res) => {
          console.log(res.data.result);
          setResult(res.data.result);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container h-full max-h-full pt-20 mx-auto max-w-7xl">
      {result == "" && !loading && (
        <div className="flex flex-col items-center justify-center space-y-5">
          <h1 className="text-5xl font-bold text-center capitalize">
            Let me Explain this
          </h1>
          <p className="text-xl text-center">
            Generate Short, Concise and Easy-to-Understand Explanations of Any
            Concept in Seconds!
          </p>
          <Input
            onChange={handlePromptInput}
            onSubmit={handleSubmit}
            inputRef={inputRef}
          />
        </div>
      )}
      {(result != "" || loading) && (
        <div
          className={`container relative h-full max-w-4xl px-4 pt-4 mx-auto font-medium rounded-sm  pb-14 md:h-4/5 bg-primary text-text ${
            loading && "animate-pulse delay-2s"
          }`}
        >
          {loading && (
            <div className="flex items-center justify-center w-full h-full">
              <Loading />
            </div>
          )}
          {!loading && (
            <div className="w-full h-full">
              <div className="w-full h-full overflow-auto">{result}</div>
              <Button
                lable="Explain another"
                onClick={() => {
                  setResult("");
                  setPrompt("");
                }}
                extraStyle="absolute bottom-2 right-2"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;

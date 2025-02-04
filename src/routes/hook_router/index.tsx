import { useState } from "react";
import type { JSX } from "react";

export default function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello, world!");

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h2>Current Text: {text}</h2>
      <button
        onClick={() => {
          console.log("Count before:", count);
          setCount(count + 1);
          console.log("Count after:", count + 1);
        }}
      >
        Increment Count
      </button>

      <button
        onClick={() => {
          console.log("Text before:", text);
          setText(`Text updated! ${Date.now()}`);
          console.log("Text after:", text);
        }}
      >
        Change Text
      </button>
    </div>
  );
}

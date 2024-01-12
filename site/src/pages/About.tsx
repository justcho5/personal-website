import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import aboutText from "../assets/About.md";

function About() {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(aboutText)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
      });
  }, []);

  return (
    <div className="max-w-[950px] m-auto">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default About;

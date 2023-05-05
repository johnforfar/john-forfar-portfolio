import React from "react";
export default function Footer(props) {
  return (
    <>
      <div className="block text-xs font-thin p-2 text-white">
        &copy; {new Date().getFullYear()} {" | "}
        <a
          className="hover:underline"
          href="https://github.com/john-forfar/john-forfar-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Feedback?
        </a>
      </div>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";
export default function tools() {
  return (
    <>
      <Head>
        <title>
        John Forfar&apos;s favourite tools | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-3xl font-bold">🧰 Favourite Tools</div>

        <div className="p-1">
          <div className="typewrite">VS Code</div>
          <code>I use vscode 6~ to 10~ hours every day!</code>
          <sup>
            You can find my list of favourite extensions{" "}
            <Link href="/extensions"><a className="underline">here</a></Link>
          </sup>
          <div className="typewrite">Postman</div>
          <code>
            I can&apos;t POST enough about testing API&apos;s. You GET what I&apos;m PUT&apos;ing down?
          </code>
          <div className="typewrite">FIGMA</div>
          <code>
            Great tool for quickly designing UX/UI before jumping into code.
          </code>
        </div>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}

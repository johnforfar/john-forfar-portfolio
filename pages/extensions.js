import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Extensions() {
  return (
    <>
      <Head>
        <title>
          John Forfar&apos;s Favourite VS Code Extensions | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-5xl font-bold">🦸🏾‍♂️ Extensions</div>

        <div className="p-10">
          <div>Anchor</div>
          <div>Auto Rename Tag</div>
          <div>Docker</div>
          <div>ES7+ React</div>
          <div>Jupyter</div>
          <div>Live Server</div>
          <div>Github Copilot</div>
          <div>Jupyter</div>
          <div>Python</div>
          <div>Tailwind CSS</div>
          <div>Thunder Client</div>
          <div>Trailing Spces</div>
        </div>
      </div>
      <Link href="/">
        <a className="backarrow">
          &larr;
        </a>
      </Link>
    </>
  );
}

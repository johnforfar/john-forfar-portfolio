import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Experience() {
  const ts = new Date(Date.now());
  const awareStart = Date.parse("2021-05-01");

  const diff = ts - awareStart;
  const weeks = Math.floor(diff / (1000 * 60 * 60 * 24) / 7);
  return (
    <>
      <Head>
        <title>
          John Forfar&apos;s Career Experience | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="">
        <div className="text-4xl font-bold">🗄 Experience</div>

        <div className="grid">
          <div className="typewrite mt-5 has-tooltip cursor-pointer">
            Gamerplex
            <span className="tooltip">
              Web3 gaming company on a mission to build fun experiences for players using interoperable NFT&apos;s and Currencies
            </span>
          </div>
          <div className="tenure">{weeks} weeks</div>
          <div className="text-xs grid grid-cols-[1fr_15px_15px_15px] text-right ">
            Legend:
            <div className="problem">
              P<span className="tooltip">Problem</span>
            </div>
            <div className="solution">
              S<span className="tooltip">Solution</span>
            </div>
            <div className="technology">
              T<span className="tooltip">Technology</span>
            </div>
          </div>

          <div className="card">
            <div className="bold">Responsive Gaming Website</div>
            <div id="custom scripts" className="grid grid-cols-[10px_1fr] ">
              <div className="problem">
                P<span className="tooltip">Problem</span>
              </div>
              <div className="textbox">
                Fun, interactive and engaging website needed to showcase Gamerplex
              </div>
              <div className="solution">
                S<span className="tooltip">Solution</span>
              </div>
              <div className="textbox">
              Designed and deployed https://gamerplex.com using NextJS, showcasing front-end development and responsive design skills.
              </div>

              <div className="technology">
                T<span className="tooltip">Technology</span>
              </div>
              <div className="textbox">
                NextJS, ReactJS, JavaScript
              </div>
            </div>
          </div>

          <div className="card">
            <div className="bold">Game Client API Server</div>
            <div id="custom scripts" className="grid grid-cols-[10px_1fr] ">
              <div className="problem">
                P<span className="tooltip">Problem</span>
              </div>
              <div className="textbox">
                  API server needed to handle game client requests for authentication, blockchain integration and game data.
              </div>
              <div className="solution">
                S<span className="tooltip">Solution</span>
              </div>
              <div className="textbox">
                Deployed NodeJS API server to integrate with external SDK's & API's, optimised performance and customised functions.
              </div>

              <div className="technology">
                T<span className="tooltip">Technology</span>
              </div>
              <div className="textbox">NodeJS, Express and Typescript </div>
            </div>
          </div>
        </div>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}

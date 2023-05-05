import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Qualifcations() {
  return (
    <>
      <Head>
        <title>
          John Forfar&apos;s Projects | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="">
        <div className="text-5xl font-bold">📽 Personal Projects</div>

        {/* <!-- Container --> */}
        <div className="max-w-screen-xl mx-auto px-4 flex">

          {/* <!-- Grid column --> */}
          <div className="w-full p-4 sm:w-1/2 lg:w-1/3">
            {/* <!-- Column contents --> */}
            <div className="bg-white rounded-lg shadow-lg">
              {/* <!-- Card contents --> */}
              <Image src="/thumbnails/florian-olivo-4hbJ-eymZ1o-unsplash.jpg" alt="" className="rounded-t-lg" />
              <div className="p-2">
                <h3 className="font-bold mb-2 text-2xl text-purple-700">Defi.Compare</h3>
                <p className="text-purple-500 mb-2">Blockchain fee comparison dashboard using Python, TypeScript, React, Hasura & Timescale.</p>
                <a href="https://defi.compare" className="text-purple-600 hover:text-purple-500 underline text-sm">Read More 👉</a>
              </div>
            </div>
          </div>

          {/* <!-- Grid column --> */}
          <div className="w-full p-4 sm:w-1/2 lg:w-1/3">
            {/* <!-- Column contents --> */}
            <div className="bg-white rounded-lg shadow-lg">
              {/* <!-- Card contents --> */}
              <Image src="/thumbnails/florian-olivo-4hbJ-eymZ1o-unsplash.jpg" alt="" className="rounded-t-lg" />
              <div className="p-2">
                <h3 className="font-bold mb-2 text-2xl text-purple-700">JohnForfar.com</h3>
                <p className="text-purple-500 mb-2">Porfolio website using JavaScript, React, Next, SendGrid, Tailwind, Twilio & MongoDB.</p>
                <a href="https://johnforfar.com" className="text-purple-600 hover:text-purple-500 underline text-sm">Read More 👉</a>
              </div>
            </div>
          </div>

          {/* <!-- Grid column --> */}
          <div className="w-full p-4 sm:w-1/2 lg:w-1/3">
            {/* <!-- Column contents --> */}
            <div className="bg-white rounded-lg shadow-lg">
              {/* <!-- Card contents --> */}
              <Image src="/thumbnails/florian-olivo-4hbJ-eymZ1o-unsplash.jpg" alt="" className="rounded-t-lg" />
              <div className="p-2">
                <h3 className="font-bold mb-2 text-2xl text-purple-700">HeyToly.com</h3>
                <p className="text-purple-500 mb-2">Solana ecosystem discovery AI chat bot using Scrapers, ChatGPT Davinci API, React & Next.</p>
                <a href="https://heytoly.com" className="text-purple-600 hover:text-purple-500 underline text-sm">Read More 👉</a>
              </div>
            </div>
          </div>
        </div>
        {/* Ends Projects */}
      </div>
      <div className="backarrow-container">
        <Link href="/">
          <a className="backarrow">&larr;</a>
        </Link>
      </div>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Qualifications() {
  return (
    <>
      <Head>
        <title>
          About John Forfar | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-3xl font-bold">🏠 Qualifications</div>

        <div className="p-4">
          <div className="mt-10 text-2xl">Graduate Certificate of Applied Data Analytics</div>
          <sup>Monash University (Ongoing - July 2023)</sup>
          <div className="text-xs">
            <ul>
              <li>Data Science - data in a business model and its lifecycle; different data types, preparation, cleaning, processing, and analysis styles; data curation and management; and legal, ethical, and policy issues.</li>
              <li>Python - basic input/output, program control structures, data structures, modularity, problem-solving techniques, iteration, and recursion.</li>
              <li>SQL - relational model, analysis and design, implementation of relational database using Oracle SQL Developer.</li>
            </ul>
          </div>
          <div className="mt-10 text-2xl">Meta Full Stack Developer Certificate</div>
          <sup>Coursera - May 2023</sup>
          <div className="text-xs">Created a React site for Capstone with Figma UX/UI wireframe, semantic HTML, responsive CSS, React components, form validation, fetch API, JSON, and Jest testing. Backend made with Python/Django and MySQL.</div>
          <div className="mt-10 text-2xl">Master of Business Administration</div>
          <sup>University of Western Australia (2015 - 2019)</sup>
          <div className="text-xs">
            <ul>
              <li>Data Driven Decision Making, Finance, Economic Management, Organisational Behaviour, Management of Technology & Innovation, Accounting, Marketing and Strategic Management.</li>
              <li>Overseas Study Tour to Silicon Valley visiting Stanford Uni, Tesla, Salesforce & Australia Startups.</li>
            </ul>
          </div>
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

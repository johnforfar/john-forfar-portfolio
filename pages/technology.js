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
          John Forfar&apos;s Technology | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-5xl font-bold">🕹 Technology</div>

        <div className="p-1">
          <div className="typewrite">Azure</div>
          <code>D, Enterprise Applications, SSO, Auto-provisioning, Functions, Blobs</code>
          <div className="typewrite">AWS</div>
          <code>Lambda Functions, API Gateway, Amazon Connect, Incognito, EC2, S3 Buckets</code>
          <div className="typewrite">GCP</div>
          <code>Cloud Functions </code>
          <div className="typewrite">Twilio</div>
          <code>SMS, Verify, Auth Codes, Serverless Functions</code>
          <div className="typewrite">MongoDB</div>
          <code>Atlas, Realm, Clusters</code>
          <div className="typewrite">Web3.js</div>
          <code>Integrate with Solana Blockchain accounts</code>
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

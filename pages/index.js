import Head from "next/head";
import Image from "next/image";
//import styles from "../styles/Home.module.css";
import React from "react";
import Typewriter from "typewriter-effect";
import clientPromise from "../lib/mongodb";
import profilePic from "../public/self.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Home(props) {
  const [flavour, setFlavour] = React.useState("blank");

  var connected = props.isConnected ? "🟢" : "🔴";
  console.log(connected);
  const handleChange = (event) => {
    document.body.classList.remove(flavour);
    setFlavour(event.target.value);
    document.body.classList.add(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Full Stack Developer Melbourne</title>
      </Head>
      <div>
        <div>
          <select
            className="btn-primary"
            value={flavour}
            onChange={handleChange}
            name="flavour"
            id="flavour"
          >
            <option value="blank">Choose your community:</option>
            <option value="coke">Dogecoin</option>
            <option value="pepsi">Ethereum</option>
            <option value="fanta">Bitcoin</option>
            <option value="solana">Solana</option>
          </select>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <Image
            className="duration-150"
            src={profilePic}
            width={200}
            height={300}
            alt="John Forfar"
          />
        </motion.div>
      </div>
      <div className="text-4xl md:text-6xl lg:7-xl">John Forfar</div>
      <div className="decoration-dotted bg-white opacity-75 w-11/12 m-4 p-2">
        <div className="container w-full h-6">
          <div className="float-left pr-4">johnny@Macbook:</div>
          <div className="float-left"><Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Web3 Developer")
              .pauseFor(420)
              .deleteAll()
              .typeString("Front-End Developer")
              .pauseFor(420)
              .deleteAll()
              .typeString("Back-End Developer")
              .pauseFor(420)
              .deleteAll()
              .typeString("Full Stack Developer!")
              .start();
          }}/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full mt-100">
        <Link href="/about">
          <a className="btn-primary">About</a>
        </Link>
        <Link href="/contact">
          <a className="btn-primary">Contact</a>
        </Link>
        <Link href="#skills">
          <a className="btn-disabled">Skills</a>
        </Link>
        <Link href="/projects">
          <a className="btn-primary">Projects</a>
        </Link>
        <Link href="/experience">
          <a className="btn-primary">Experience</a>
        </Link>
        <Link href="/qualifications">
          <a className="btn-primary">Qualifications</a>
        </Link>
        <Link href="/technology">
          <a className="btn-primary">Technology</a>
        </Link>
        <Link href="/tools">
          <a className="btn-primary">Tools</a>
        </Link>
        <Link href="/John-Forfar-Resume-Full-Stack-Developer-v1.2.pdf" rel="noopener noreferrer">
          <a className="btn-primary text-xs w-1/3  font-thin p-0 mt-5 col-span-2" target="_blank">
            Resume PDF
          </a>
        </Link>
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  try {
    const forwarded = req.headers["x-forwarded-for"];
    var ip = forwarded
      ? forwarded.split(/, /)[0]
      : req.connection.remoteAddress;

    if (ip === "::1") {
      ip = "127.0.0.1";
    }

    // Needs fixing
    const ipUrl = `http://ip-api.com/json/${ip}`;
    const ipRes = await fetch(ipUrl);
    const ipJson = await ipRes.json();
    const location = ipJson.city + " " + ipJson.country;

    const date = new Date();

    const client = await clientPromise;
    const result = await client
      .db("salimsresume")
      .collection("visitors")
      .insertOne({
        ip: ip,
        date: date,
        location: location,
      });

    console.log(result.insertedId.toString());

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

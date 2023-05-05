import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profilePic from "../public/self.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>About John Forfar| Full Stack Developer Melbourne</title>
      </Head>

      <div className="p-20 bg-orange-200">
        <h3 className="text-orange-400 font-bold mb-6">About Me</h3>
        <Link href="/">
          <a className="backarrow">&larr;</a>
        </Link>
        <div className="container mx-auto p-0 m-0">
          <div className="bg-white rounded-lg shadow-2xl grid grid-cols-3 p-0 m-0">
            <div className="col-span-1 p-0 m-0">
              <Image src={profilePic} alt="John Forfar" className="rounded-l-lg md:rounded-l-lg md:rounded-t-none" />
            </div>
            <div className=" p-6 col-span-2">
              <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">John Forfar</h2>
              <p className="text-xl text-orange-700">
              Skilled Full-Stack Developer with 10+ years of expertise in JavaScript, React, Next, Python and SQL. 
              Passionate about learning new technologies such as Web3 & ChatGPT API. Experienced with WordPress/PHP, 
              Python for Network Automation/Django. Studying Applied Data Science Cert and holds a MBA and 
              Meta Full Stack Certificate. Military veteran with authentic leadership and community service commitment. 
              Ready to contribute to your team&apos;s success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="ml-20 mb-10 card w-80 justify-center items-center ">
          <div className="text-2xl font-bold w-60">🏃🏽‍♂️ Hobbies</div>
        </div>
          </div>
           <div className="p-4 text-1xl">
              <div className="grid grid-cols-5 mb-10">
                <div><span className="bg-white p-2">Gym</span></div>
                <div><span className="bg-white p-2">Web3</span></div>
                <div><span className="bg-white p-2">Travelling</span></div>
                <div><span className="bg-white p-2">ChatGPT</span></div>
                <div><span className="bg-white p-2">Video Games</span></div>
              </div>
          <Link href="/">
            <a className="backarrow">&larr;</a>
          </Link>
        </div>
    </>
  )
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Home, Person, Settings, Work, Phone } from "@mui/icons-material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <aside className="container py-6 flex flex-col sidebar bg-neutral-900 grid-rows-3 justify-between w-16 h-screen sticky top-0 ">
      <div className="flex flex-col place-items-center">
        <Link href="/">
          <Home fontSize="large" />
        </Link>
      </div>

      <ul className="flex flex-col place-items-center">
        <Link href="/about">
          <Person className="m-2" fontSize="large" />
        </Link>
        <Link href="/skills">
          <Settings className="m-2" fontSize="large" />
        </Link>
        <Link href="/work">
          <Work className="m-2" fontSize="large" />
        </Link>
        <Link href="/contact">
          <Phone className="m-2" fontSize="large" />
        </Link>
      </ul>
      <ul className="flex flex-col place-items-center">
        <Link href={"https://github.com/Darksw20"}>
          <Image
            className="m-2"
            src="/img/github.png"
            width={50}
            height={50}
            alt="Github"
          />
        </Link>

        <Link href={"https://www.linkedin.com/in/ricardonavi/"}>
          <Image
            className="m-2"
            src="/img/linkedin.png"
            width={50}
            height={50}
            alt="Linkedin"
          />
        </Link>
      </ul>
    </aside>
  );
}

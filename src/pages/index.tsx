import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Home from "../components/home/index";
import Navbar from "../components/navbar/index";

const inter = Inter({ subsets: ["latin"] });

export default function Layout() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <Home />
    </div>
  );
}

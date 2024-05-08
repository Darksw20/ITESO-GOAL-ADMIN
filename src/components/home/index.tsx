import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const gameFont = localFont({ src: "../../../public/fonts/upheavtt.ttf" });
const futuraFont = localFont({
	src: "../../../public/fonts/futura medium bt.ttf",
});

export default function Home() {
	return (
		<div className="container mx-auto basis-11/12 flex  items-center"></div>
	);
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
export const gameFont = localFont({
	src: "../../../public/fonts/upheavtt.ttf",
});
export const futuraFont = localFont({
	src: "../../../public/fonts/futura medium bt.ttf",
});

export default function Contact() {
	return (
		<div className="flex flex-col m-10">
			<div className={gameFont.className}>
				<h1 className="text-6xl">{"> Contact Me_"}</h1>
			</div>
			<div className="flex justify-center bg-neutral-800 m-8 rounded-lg flex flex-col">
				<div className="m-10">
					<p>
						If you have any question, please don`t hesitate to contact using
						form below...
					</p>
				</div>
				<div className="m-8">
					<form className="flex flex-col">
						<div className="form-group m-8 self-center">
							<input type="text" className="form-control" placeholder="Name" />
						</div>
						<div className="form-group m-8 self-center">
							<input
								type="email"
								className="form-control"
								placeholder="Email"
							/>
						</div>
						<div className="form-group m-8 self-center">
							<input type="text" className="form-control" placeholder="Title" />
						</div>
						<div className="form-group m-8 self-center">
							<textarea
								className="form-control"
								placeholder="Message"
							></textarea>
						</div>
						<div className="titles self-center">
							<button
								type="submit"
								style={{
									border: "2px solid white",
									borderRadius: "6px",
									padding: "10px",
									fontSize: "larger",
								}}
							>
								{"Send"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

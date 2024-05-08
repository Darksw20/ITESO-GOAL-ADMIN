import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import ProjectList from "./projects";

const inter = Inter({ subsets: ["latin"] });
export const gameFont = localFont({
	src: "../../../public/fonts/upheavtt.ttf",
});
export const futuraFont = localFont({
	src: "../../../public/fonts/futura medium bt.ttf",
});

const ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

interface Project {
	name: string;
	src: string;
	date: string;
	description: string;
	roles: string[];
}

const getProjects = async (): Promise<Project[]> => {
	try {
		const response = await fetch(`${ENDPOINT}/project`);
		const data: Project[] = await response.json();

		return data;
	} catch (error) {
		console.error("Error fetching roles:", error);
		// Handle the error or return a default value
		return [];
	}
};

export default function About() {
	const [projects, setProjectState] = useState<Project[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const projectData = await getProjects();
			setProjectState(projectData);
		};

		fetchData();
	}, []);

	return (
		<>
			<div className="container mx-auto basis-11/12 flex items-center">
				<div className={gameFont.className}>
					<div className={"align-middle text-center px-10"}>
						<h1 className="text-6xl">{"> About Me_"}</h1>
						<Image src="/img/yo-14.png" alt="yo" width={250} height={250} />
						<h3 className="text-2xl">Who Am I?</h3>
						<div className={futuraFont.className + " card-body"}>
							<p>
								Mobile & web developer from Guadalajara, Jalisco. My passion is
								software interaction and my purpose is solving real life
								problems through it.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto basis-11/12 flex flex-col items-center text-justify align-middle p-16">
				<div className="m-4">
					<p>
						Since a young age I loved the way computers were changing our world
						and I wanted to become someone who could make a difference using
						technology.
					</p>
				</div>
				<div className="m-4">
					<h3>Relevant Projects.</h3>
				</div>
				<div className="m-4">
					{projects?.map((project: any, idx) => {
						console.log(project.date, project.description);
						return (
							<ProjectList
								key={project.name + idx}
								date={project.date}
								description={project.description}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

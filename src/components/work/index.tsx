import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Card from "./card";

const inter = Inter({ subsets: ["latin"] });

export const gameFont = localFont({
  src: "../../../public/fonts/upheavtt.ttf",
});
export const futuraFont = localFont({
  src: "../../../public/fonts/futura medium bt.ttf",
});

const ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

interface Role {
  name: string;
  value: string;
}

interface Project {
  name: string;
  src: string;
  description: string;
  roles: string[];
}

const getRoles = async (): Promise<Role[]> => {
  try {
    const response = await fetch(`${ENDPOINT}/role`);
    const data: Role[] = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching roles:", error);
    // Handle the error or return a default value
    return [];
  }
};

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

export default function Work() {
  const [select, setSelectState] = useState("all");
  const [projects, setProjectState] = useState<Project[] | null>(null);
  const [roles, setRoleState] = useState<Role[] | null>(null);

  const handleSelect = (e: any) => {
    console.log("target: ", e.target.value);
    setSelectState(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const projectData = await getProjects();
      const rolesData = await getRoles();
      setProjectState(projectData);
      setRoleState(rolesData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col m-10">
        <div className={"flex flex-row " + gameFont.className}>
          <h1 className="text-6xl">{"> My Work As"}</h1>
          <div className="self-center m-4">
            <select defaultValue={select} onChange={handleSelect}>
              {roles?.map((role, idx) => {
                return (
                  <option key={role.name + idx} value={role.value}>
                    {role.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="rows subtitles">
          {projects
            ?.filter(
              (project) => select === "all" || project.roles.includes(select)
            )
            .map((project: any, idx: any) => {
              return (
                <Card
                  key={project + idx}
                  name={project.name}
                  src={project.src}
                  description={project.description}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

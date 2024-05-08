import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Percentage from "./percentageComponent";

import localFont from "next/font/local";
import Courses from "./courses";
import SoftSkill from "./softSkills";

const inter = Inter({ subsets: ["latin"] });
export const gameFont = localFont({
  src: "../../../public/fonts/upheavtt.ttf",
});
export const futuraFont = localFont({
  src: "../../../public/fonts/futura medium bt.ttf",
});

const ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

interface SkillsState {
  softSkill: Array<{ src: string; name: string }>;
  courses: Array<{ name: string; place: string; date: string }>;
  languages: Array<{ name: string; percentage: number }>;
  programingLanguages: Array<{ name: string; percentage: number }>;
  tools: Array<{ name: string; percentage: number }>;
}

const getSkills = async (): Promise<SkillsState> => {
  try {
    const res = await fetch(`${ENDPOINT}/skill`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return {
      softSkill: [],
      courses: [],
      languages: [],
      programingLanguages: [],
      tools: [],
    };
  }
};

export default function Skills() {
  const [state, setState] = useState<SkillsState | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const skillsData = await getSkills();
      setState(skillsData);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col m-10">
        <div className={gameFont.className}>
          <h1 className="text-6xl">{"> Skills_"}</h1>
        </div>
        <div className="flex flex-row m-4">
          <div className="flex-col m-4">
            <div className="flex flex-row m-2">
              {state?.softSkill.map((skill: any, idx: any) => {
                return (
                  <SoftSkill
                    key={skill.name + idx}
                    src={skill.src}
                    name={skill.name}
                  />
                );
              })}
            </div>
            <div className="flex-col m-4">
              <div className={gameFont.className}>
                <h2 className="text-2xl">Courses</h2>
              </div>
              {state?.courses.map((course: any, idx: any) => {
                return (
                  <Courses
                    key={course.name + idx}
                    name={course.name}
                    place={course.place}
                    date={course.date}
                  />
                );
              })}
            </div>
            <div className="flex-col m-4">
              <div className={gameFont.className}>
                <h2 className="text-2xl">Languages</h2>
              </div>
              {state?.languages.map((lang: any, idx: any) => {
                return (
                  <Percentage
                    key={lang.name + idx}
                    name={lang.name}
                    percentage={lang.percentage}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex-col m-4">
            <div className="m-4">
              <div className={gameFont.className}>
                <h2 className="text-2xl">Programming languages</h2>
              </div>
              <div>
                <ul className="list-inline">
                  {state?.programingLanguages.map((lang: any, idx: any) => {
                    return (
                      <Percentage
                        key={lang.name + idx}
                        name={lang.name}
                        percentage={lang.percentage}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="m-4">
              <div className={gameFont.className}>
                <h2 className="text-2xl">Tools</h2>
              </div>
              <ul className="list-inline">
                {state?.tools.map((tool: any, idx: any) => {
                  return (
                    <Percentage
                      key={tool.name + idx}
                      name={tool.name}
                      percentage={tool.percentage}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

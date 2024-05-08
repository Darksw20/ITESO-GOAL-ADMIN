import styles from "@/styles/Home.module.css";

export default function ProjectList({ date, description }: any) {
  return (
    <p>
      {date} - {description}
    </p>
  );
}

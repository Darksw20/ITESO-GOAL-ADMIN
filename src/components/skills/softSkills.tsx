import Image from "next/image";

export default function SoftSkill({ src, name }: any) {
  return (
    <div className="p-4">
      <Image width={80} height={80} alt="alt" src={src} />
      <h6>{name}</h6>
    </div>
  );
}

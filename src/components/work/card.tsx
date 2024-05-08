import Image from "next/image";

export default function Card({ name, src, description }: any) {
  return (
    <div className="column web">
      <div className="content">
        <Image src={src} height={100} alt="Port1" width={100} />
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Courses({ name, place, date }: any) {
  return (
    <div className="flex flex-col">
      <p>
        {name}| {place} {date}
      </p>
    </div>
  );
}

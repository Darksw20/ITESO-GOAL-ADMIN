export default function PercentageComponent({ name, percentage }: any) {
  return (
    <div className="flex flex-col">
      <div className="progress" data-percentage={percentage}>
        <span className="progress-left">
          <span className="progress-bar"></span>
        </span>
        <span className="progress-right">
          <span className="progress-bar"></span>
        </span>
        <div className="progress-value">
          <div>
            <span>{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

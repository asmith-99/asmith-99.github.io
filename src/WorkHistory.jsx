import "./WorkHistory.css";

export default function WorkHistory({ company, title, start, end, children }) {
  return (
    <>
      <div className="work-header">
        <span className="company-name">{company}</span>
        <span className="start-end">
          {start}—{end}
        </span>
      </div>
      <div className="job-title">{title}</div>
      {children}
    </>
  );
}

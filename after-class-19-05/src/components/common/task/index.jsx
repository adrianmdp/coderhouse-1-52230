import "./style.scss";

const Task = ({ title, description, category, user, date, status }) => {
  return (
    <div className={`task ${status}`}>
      <h2 className="title">{title}</h2>
      <div>{description}</div>
      <div>{category}</div>
      <div>{user}</div>
      <div>{date}</div>
      <div>{status}</div>
    </div>
  );
};

export { Task };

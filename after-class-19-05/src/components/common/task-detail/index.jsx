const TaskDetail = ({ id, name, description, categoryId }) => {
  return (
    <div>
      Este es el detalle de mi tarea
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{description}</li>
        <li>{categoryId}</li>
      </ul>
    </div>
  );
};

export { TaskDetail };

import { useParams } from "react-router-dom";
import { TaskDetail } from "../../components";
import { useEffect, useState } from "react";
import { getTask } from "../../services";

const TaskDetailContainer = () => {
  const { id } = useParams();

  const [task, setTask] = useState();

  useEffect(() => {
    getTask(id).then((data) => {
      setTask(data);
    });
  }, []);

  if (!task) return <div>Cargando...</div>;

  return (
    <div>
      <TaskDetail
        name={task.name}
        id={task.id}
        description={task.description}
        categoryId={task.categoryId}
      />
    </div>
  );
};

export { TaskDetailContainer };

import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getCategories, getTasks } from "../../services/mocks";
import { TasksList } from "../../components";
import { Filter } from "./components";

const TasksListContainer = () => {
  const { catId } = useParams();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [categeries, setCategories] = useState([]);

  useEffect(() => {
    getTasks(catId).then((data) => {
      setTasks(data);
    });
  }, [catId]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  // Si yo voy a buscar datos acá, no voy a tener control en los re-render del componente

  return (
    <>
      <Container>
        <Filter categeries={categeries} />
        <TasksList
          tasks={tasks.map((task) => ({
            ...task,
            onTaskClicked: () => navigate(`/task-detail/${task.id}`),
            textButton: "Ver detalle",
          }))}
        />
      </Container>
    </>
  );
};

export { TasksListContainer };

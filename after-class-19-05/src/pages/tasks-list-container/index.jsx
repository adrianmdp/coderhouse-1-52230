import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getCategories, getTasks } from "../../services";
import { TasksList } from "../../components";

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
        <nav>
          <ul>
            {categeries.map((category) => (
              <li>
                <NavLink to={`/category/${category.id}`}>
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
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

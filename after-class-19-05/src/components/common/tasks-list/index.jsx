import { Task } from "../task";
import { Row, Col } from "react-bootstrap";

const TasksList = ({ tasks }) => {
  return (
    <Row>
      {tasks.map((task) => (
        <Col>
          <Task
            name={task.name}
            description={task.description}
            id={task.id}
            categoryId={task.categoryId}
            onTaskClicked={task.onTaskClicked}
            textButton={task.textButton}
          />
        </Col>
      ))}
    </Row>
  );
};

export { TasksList };

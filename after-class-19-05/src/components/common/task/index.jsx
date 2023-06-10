import { Card, Button } from "react-bootstrap";
import "./style.scss";

const Task = ({ id, name, description, onTaskClicked, textButton }) => {
  return (
    <Card key={name}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={onTaskClicked}>
          {textButton}
        </Button>
      </Card.Body>
    </Card>
  );
};

export { Task };

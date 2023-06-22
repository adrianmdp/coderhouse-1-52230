import { Card, Button } from "react-bootstrap";
import "./style.scss";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth";
import { useParams } from "react-router-dom";

const Task = ({ id, name, description, onTaskClicked, textButton }) => {
  const { data, setData } = useContext(AuthContext);

  const { catId, otroParam } = useParams();

  return (
    <Card key={name}>
      {JSON.stringify(otroParam)}
      <button onClick={() => setData("Info cambiada")}>
        Cambiar dato de context
      </button>
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

import { Task } from "../../common";

const TaskList = () => {
  // Acá resolvería la lógica para obtener las tareas

  return (
    <div>
      Este es mi Tasks List
      <Task
        title="Tarea 1"
        category="music"
        description="Lorem Ipsum"
        date={new Date().toString()}
        status="completed"
        user="Adrián Ferré"
      />
      <Task
        title="Tarea 2"
        category="music"
        description="Lorem Ipsum"
        date={new Date().toString()}
        status="pending"
        user="Adrián Ferré"
      />
      <Task
        title="Tarea 3"
        category="music"
        description="Lorem Ipsum"
        date={new Date().toString()}
        status="cancelled"
        user="Adrián Ferré"
      />
      <Task
        title="Tarea 4"
        category="music"
        description="Lorem Ipsum"
        date={new Date().toString()}
        status="pending"
        user="Adrián Ferré"
      />
      <Task
        title="Tarea 5"
        category="music"
        description="Lorem Ipsum"
        date={new Date().toString()}
        status="pending"
        user="Adrián Ferré"
      />
    </div>
  );
};

export { TaskList };

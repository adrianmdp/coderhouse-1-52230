import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/auth";

const Filters = ({ onChange }) => {
  const [fields, setFields] = useState({ id: "", name: "", email: "" });

  const { data } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {JSON.stringify(data)}
      <input
        type="text"
        placeholder="id"
        value={fields.id}
        onChange={(e) =>
          setFields((prevState) => ({ ...prevState, id: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="name"
        value={fields.name}
        onChange={(e) =>
          setFields((prevState) => ({ ...prevState, name: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="email"
        value={fields.email}
        onChange={(e) =>
          setFields((prevState) => ({ ...prevState, email: e.target.value }))
        }
      />
      <button type="submit">Filtrar</button>
    </form>
  );
};

export { Filters };

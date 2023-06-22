import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../../../../context/auth";

const Filter = ({ categeries }) => {
  const { data } = useContext(AuthContext);
  const { otroParam } = useParams();
  return (
    <nav>
      <ul>
        <li>{otroParam}</li>
      </ul>
      <ul>
        {categeries.map((category) => (
          <li>
            <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Filter };

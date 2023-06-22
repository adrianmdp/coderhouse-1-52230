import { useEffect, useState } from "react";
import { getUsers } from "../../../../services/users";

const Users = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <ul>
          <li>{item.id}</li>
          <li>{item.name}</li>
          <li>{item.email}</li>
        </ul>
      ))}
    </>
  );
};

export { Users };

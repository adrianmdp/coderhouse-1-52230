const Users = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <ul key={item.id} style={{ border: "1px solid", margin: 20 }}>
          <li>{item.id}</li>
          <li>{item.name}</li>
          <li>{item.email}</li>
        </ul>
      ))}
    </>
  );
};

export { Users };

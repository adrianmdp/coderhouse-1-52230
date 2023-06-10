const Select = ({ items, onChange }) => {
  return (
    <select onChange={onChange}>
      {items.map((item) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
  );
};

export { Select };

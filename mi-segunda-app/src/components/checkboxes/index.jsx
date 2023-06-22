const Checkboxes = ({ items, name, onChange }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div>
            <input
              type="checkbox"
              id={`checkbox${item.value}`}
              name={name}
              onChange={onchange}
            />
            <label htmlFor={`checkbox${item.value}`}>{item.label}</label>
          </div>
        );
      })}
    </>
  );
};

export { Checkboxes };

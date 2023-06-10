const Button = ({ children, className, type, id, onClick }) => {
  return (
    <button className={className} type={type} id={id} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };

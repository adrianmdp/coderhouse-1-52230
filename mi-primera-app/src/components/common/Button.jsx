// texto, clasname, onclick, type

const Button = ({ children, className, type, handleClick }) => (
  <button className={className} type={type} onClick={handleClick}>
    {children}
  </button>
);

export default Button;

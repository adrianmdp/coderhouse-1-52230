// texto, clasname, onclick, type

const Button = ({ className, type, handleClick, text }) => (
  <button className={className} type={type} onClick={handleClick}>
    {text}
  </button>
);

export default Button;

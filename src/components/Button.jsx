const Button = ({ children, textOnly, className, ...props }) => {
  const styles = textOnly ? `text-button ${className}` : `button ${className}`;
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;

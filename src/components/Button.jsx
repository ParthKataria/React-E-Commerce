const Button = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="mt-2 block w-full bg-black hover:bg-gray-400 text-white font-semibold py-2 px-4 shadow"
    >
      {children}
    </button>
  );
};
export default Button;

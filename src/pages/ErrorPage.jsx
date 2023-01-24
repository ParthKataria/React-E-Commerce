const ErrorPage = ({ children }) => {
  return (
    <div>
      Something seems wrong.
      <div>{children}</div>
    </div>
  );
};
export default ErrorPage;

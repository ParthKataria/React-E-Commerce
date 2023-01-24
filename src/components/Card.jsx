import PropTypes from "prop-types";
const Card = ({ url, children }) => {
  return (
    <div className="mx-2 mt-5 bg-white shadow p-2">
      <img className="block w-full" src={url} />
      {children}
    </div>
  );
};
Card.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
};
export default Card;

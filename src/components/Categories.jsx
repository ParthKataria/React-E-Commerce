const Categories = ({ list }) => {
  const content = list.map((category) => <button>{category}</button>);
  return <div>{content}</div>;
};
export default Categories;

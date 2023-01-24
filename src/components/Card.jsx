const Card = ({ item, children }) => {
  //   console.log(item);
  const { articles, images } = item;
  //   console.log(articles);
  const { code } = articles[0];
  //   console.log(images);
  const [{ url }, ...rest] = images;
  //   console.log(code);
  return (
    <div className="mx-2 mt-5 bg-white shadow p-2">
      <img className="block w-full" src={url} />
      {children}
    </div>
  );
};
export default Card;

import "./Item.css";

function Item(props) {
  const gunpla = props.gunpla;
  return (
    <div className="card">
      <h3 className="card-name">
        {gunpla.line} {gunpla.scale} {gunpla.name}
      </h3>

      <img
        src={process.env.PUBLIC_URL + "/img/temp.png"}
        alt="thumbnail"
        className="card-img"
      />

      <ul className="tag-list">
        {gunpla.tags.map((tag) => {
          return (
            <li key={tag} className="tag">
              {tag}
            </li>
          );
        })}
      </ul>

      <p className="card-date">Build date: {gunpla.buildDate}</p>
    </div>
  );
}

export default Item;

export default function ProductCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img scr="" alt={props.image} />
      <p>Price: LKR {props.price}</p>
    </div>
  );
}

export default function PropertyListItem({ name, rating, price }) {
  return (
    <ol>
      <li>{name}</li>
      <li>${price}</li>
      <li>{rating}⭐</li>
    </ol>
  );
}

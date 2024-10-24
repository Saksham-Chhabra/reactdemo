export default function ShoppingListItem({ quantity, item, completed }) {
  return (
    <li
      style={{
        color: completed ? "grey" : "red",
        textDecoration: !completed ? "line-through" : null,
      }}
    >
      {item} - {quantity}
    </li>
  );
}

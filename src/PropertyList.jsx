import PropertyListItem from "./PropertyListItem";
export default function PropertyList({ properties }) {
  return (
    <div className="h-screen flex space-x-10 items-center">
      {properties.map((i) => (
        <PropertyListItem key={i.id} {...i} />
      ))}
    </div>
  );
}

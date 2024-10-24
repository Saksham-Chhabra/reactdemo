export default function ListPicker({ values }) {
  const randIdx = Math.floor(Math.random() * values.length);
  const randElement = values[randIdx];

  return (
    <>
      <h1 className="text-3xl text-purple-800">Array: {values}</h1>
      <h2 className="text-2xl text-purple-800">
        Random Element from {values} is: {randElement}
      </h2>
    </>
  );
}

import "./index.css";
export default function Greeter({ person, from }) {
  return (
    <>
      <h1 className=" text-3xl text-purple-800">Hey There! {person}</h1>;
      <h2 className="text-2xl text-purple-800">from {from}</h2>
    </>
  );
}

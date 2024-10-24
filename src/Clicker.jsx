export default function Clicker() {
  function handleClick() {
    console.log("yo");
  }

  return (
    <div>
      <p>Click The Button</p>
      <button
        onClick={handleClick}
        className=" hover:bg-gray-200 hover:border-none mt-3 p-4 border-2 rounded-md border-black border-solid"
      >
        Click
      </button>
    </div>
  );
}

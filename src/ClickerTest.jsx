export default function ClickerTest({ message, buttonText }) {
  function message() {
    console.log("HI!!");
  }
  return (
    <div>
      <button onClick={message}>{buttonText}</button>
    </div>
  );
}

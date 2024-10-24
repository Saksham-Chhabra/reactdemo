export default function ({ val1, val2, val3 }) {
  const styles = {
    fontSize: "35px",
    color: val1 == val2 && val2 == val3 ? "green" : "red",
  };
  return (
    <div>
      <h1 style={{ fontSize: "80px" }}>
        {val1}
        {val2}
        {val3}
      </h1>
      <h2>
        {val1 == val2 && val2 == val3 ? (
          <>
            <h3 style={styles}>You Win!</h3> <p>Congratulations!</p>
          </>
        ) : (
          <h3 style={styles}> You Loose!</h3>
        )}
      </h2>
    </div>
  );
}

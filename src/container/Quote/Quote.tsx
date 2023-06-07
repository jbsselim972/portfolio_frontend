import "@/styles/Quote.css";

const Quote = () => {
  return (
    <h2 className="head-text">
      <p>
        <span>&#8220;</span> First, <span>solve</span> the problem.
      </p>
      <p>
        Then, <span>Write</span> the code. <span>&#8221;</span>
        <p className="quoted">– John Johnson</p>
      </p>
    </h2>
  );
};

export default Quote;

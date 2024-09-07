import style from "./Feedback.module.css";

function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback }) {
  return (
    <div className={style.wrapper}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}

export default Feedback;

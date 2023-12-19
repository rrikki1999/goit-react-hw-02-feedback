import React, { useState } from 'react';
import styles from './App.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.statistics}>
      {/* <h2>Statistics</h2> */}
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage.toFixed(2)}%</p>
    </div>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles['feedback-options']}>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

const Notification = ({ message }) => {
  return <p className={styles.notification}>{message}</p>;
};

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositivePercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0 ? 0 : (feedback.good / totalFeedback) * 100;
  };

  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <div className={styles.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={handleLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositivePercentage()}
          />
        )}
      </Section>
    </div>
  );
};

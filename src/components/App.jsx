import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import styles from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    return totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;
  };

  render() {
    const feedbackOptions = ['good', 'neutral', 'bad'];
    const totalFeedback = this.countTotalFeedback();

    return (
      <div className={styles.app}>
        <h1>Please leave Feedback</h1>
        
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.handleLeaveFeedback} />

        {totalFeedback > 0 && (
          <>
            <h2>Statistics</h2>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={this.countPositivePercentage()}
            />
          </>
        )}

        {totalFeedback === 0 && (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default App;

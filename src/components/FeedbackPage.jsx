import React from 'react';

class FeedbackPage extends React.Component {
  render() {
    return (
    <div>
      <h1>Please leave feedback</h1>
      <button onClick={() => this.handleButtonClick('good')}>Good</button>
      <button onClick={() => this.handleButtonClick('bad')}>Bad</button>
      <button onClick={() => this.handleButtonClick('neutral')}>Neutral</button>
    </div>
    );
  }

  handleButtonClick(feedback) {
    
    console.log(`Selected feedback: ${feedback}`);
   
  }
}

export default FeedbackPage;

// components/SentimentForm.js
import { useState } from 'react';
import axios from 'axios';

const SentimentForm = ({ onResult }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('', { text });
    onResult(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text for sentiment analysis"
        rows="4"
        cols="50"
      />
      <button type="submit">Analyze Sentiment</button>
    </form>
  );
};

export default SentimentForm;

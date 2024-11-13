import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Quiz11 = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [feedback, setFeedback] = useState(null);
  const { moduleId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/quiz/${moduleId}`).then(response => {
      setQuestions(response.data);
    });
  }, [moduleId]);

  const handleAnswer = async (questionId) => {
    const answer = selectedAnswer[questionId];
    const response = await axios.post('/answers', { userId: 'user1', questionId, selectedAnswer: answer });
    setFeedback(response.data);
  };

  return (
    <div>
      {questions.map(q => (
        <div key={q.id}>
          <p>{q.questionText}</p>
          {Object.keys(q.options).map(optionKey => (
            <div key={optionKey}>
              <input
                type="radio"
                value={optionKey}
                name={q.id}
                onChange={() => setSelectedAnswer({ ...selectedAnswer, [q.id]: optionKey })}
              />
              <strong>{optionKey}:</strong> {q.options[optionKey]}
            </div>
          ))}
          <button onClick={() => handleAnswer(q.id)}>Submit</button>
        </div>
      ))}
      {feedback && <div>{feedback.correct ? "Correct!" : "Wrong!"} Points: {feedback.points}</div>}
    </div>
  );
};

export default Quiz11;

import React, { useState, useEffect } from "react";

const sentences = [
  ["She", "is", "my", "teacher"],
  ["We", "are", "in", "the", "classroom"],
  ["This", "is", "a", "pen"]
];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Play() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledWords, setShuffledWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [finished, setFinished] = useState(false);

  const currentSentence = sentences[currentIndex];

  useEffect(() => {
    if (started && !finished) {
      setShuffledWords(shuffleArray(currentSentence));
      setSelectedWords([]);
      setTimeLeft(20);
    }
  }, [currentIndex, started, finished]);

  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft === 0) {
      checkAnswer();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, started, finished]);

  const handleWordClick = (word) => {
    if (selectedWords.includes(word)) return;
    setSelectedWords([...selectedWords, word]);
  };

  const checkAnswer = () => {
    const correct = currentSentence.join(" ") === selectedWords.join(" ");
    if (correct) setScore(score + 1);
    const nextIndex = currentIndex + 1;
    if (nextIndex < sentences.length) {
      setCurrentIndex(nextIndex);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentIndex(0);
    setScore(0);
    setFinished(false);
    setSelectedWords([]);
    setTimeLeft(20);
  };

  if (!started) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button
          onClick={() => setStarted(true)}
          style={{
            width:'8rem',
            height:'4rem',
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "12px 24px",
            fontSize: "20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Start
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Game Over!</h2>
        <p style={{ fontSize: "18px" }}>
          Score: {score} / {sentences.length}
        </p>
        <button
          onClick={handleRestart}
          style={{
            marginTop: "20px",
            backgroundColor: "#2196F3",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Start Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ width:'30rem',height:'10rem',backgroundColor:'white',textAlign: "center", marginTop: "30px" }}>
      <p style={{ fontSize: "18px" }}>TIME: {timeLeft} MINUTE</p>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>SCORE: {score}</p>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
        {shuffledWords.map((word, index) => (
          <button
            key={index}
            onClick={() => handleWordClick(word)}
            style={{
              padding: "10px 16px",
              fontSize: "16px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              border: "1px solid #ccc",
              cursor: "pointer",
              minWidth: "80px"
            }}
          >
            {word}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: "20px", fontSize: "18px", minHeight: "24px" }}>
        {selectedWords.map((word, index) => (
          <span key={index} style={{ margin: "0 6px", fontWeight: "bold",color:'white' }}>
            {word}
          </span>
        ))}
      </div>

      <button
        onClick={checkAnswer}
        style={{
          backgroundColor: "#ffffff",
          color: "black",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Check your answer
      </button>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const wrongOrder = ['is', 'Saida', 'my', 'name'];
const correctOrder = ['my', 'name', 'is', 'Saida'];

const SentenceAnimation = () => {
  const [words, setWords] = useState(wrongOrder);
  const [phase, setPhase] = useState('wrong');
  const [showButton, setShowButton] = useState(false);

  // Səs faylı (internetdən link və ya öz mp3 faylın da ola bilər)
  const clickSound = new Audio('https://www.soundjay.com/button/sounds/button-3.mp3');

  useEffect(() => {
    const shuffleTimer = setTimeout(() => {
      setPhase('shuffle');
    }, 1500);

    const correctTimer = setTimeout(() => {
      setWords(correctOrder);
      setPhase('correct');
      clickSound.play();
    }, 3000);

    const showBtnTimer = setTimeout(() => {
      setShowButton(true);
    }, 4500);

    return () => {
      clearTimeout(shuffleTimer);
      clearTimeout(correctTimer);
      clearTimeout(showBtnTimer);
    };
  }, []);

  const getAnimation = () => {
    if (phase === 'shuffle') {
      return {
        y: [0, -10, 10, -6, 6, -3, 3, 0],
        transition: { duration: 1 },
      };
    } else if (phase === 'correct') {
      return {
        y: [20, 0],
        transition: { type: 'spring', stiffness: 200, damping: 15 },
      };
    } else {
      return { y: 0 };
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, backgroundColor: '#f5f5f5' }}
        transition={{ duration: 1 }}
        style={{
          display: 'inline-flex',
          gap: '12px',
          padding: '20px',
          borderRadius: '20px',
        }}
      >
        <AnimatePresence>
          {words.map((word, index) => (
            <motion.button
              key={word + index + phase}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, ...getAnimation() }}
              exit={{ opacity: 0 }}
              style={{
                padding: '12px 24px',
                fontSize: '18px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '10px',
                backgroundColor: phase === 'correct' ? 'crimson' : '#ddd',
                color: phase === 'correct' ? 'white' : 'black',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              {word}
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: '30px' }}
        >
         
        </motion.div>
      )}
    </div>
  );
};

export default SentenceAnimation;
import { useState } from 'react';
import { Collapse, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleText = () => setShowMore(prev => !prev);

  return (
    <div className='about-text'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <SchoolIcon className='mezun' style={{ fontSize: '5rem', color: 'blue' }} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Who am I?
      </motion.h1>

      <h1>Saida Aghayeva</h1>

      <p> 
        I have been working as an English instructor for 3 years, and I recently started
        to gain experience in IELTS, pre-IELTS, and Duolingo.
      </p>

      <Collapse in={showMore}>
        <div style={{ marginTop: '1rem' }}>
          <h2>More Information</h2>
          <ul style={{ textAlign: 'left', fontSize: '1.1rem', paddingLeft: '1.5rem', }}>
            <li>☆ EDUCATION: AUL- English Language and Literature</li>
            <li>☆ EXPERIENCE: 3+ years teaching English to various age groups</li>
            <li>☆ COURSES: IELTS, Pre-IELTS, General English</li>
            <li>☆ PASSION: Helping students achieve their language goals</li>
          </ul>
        </div>
      </Collapse>

      <Button variant='contained' color='warning' onClick={toggleText} style={{ marginTop: '1rem' }}>
        {showMore ? 'Hide details' : 'Show more'}
      </Button>
    </div>
  );
};

export default AboutSection;
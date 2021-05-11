import React from 'react';
import { useEffect } from 'react';

function Resume() {
  useEffect(() => {
    console.log('Resume');
  }, []);

  return <h1>Resume</h1>;
}

export default Resume;

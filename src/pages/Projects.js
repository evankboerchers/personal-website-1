import React from 'react';
import { useEffect } from 'react';

function Projects() {
  useEffect(() => {
    console.log('Projects');
  }, []);

  return <h1>Projects</h1>;
}

export default Projects;

import React from 'react'
import {Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>
      <span className = "canvas-load"></span>
      <p
        style = {{
          fontsize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
          width: 300,
          margin: 'auto'
        }}
      >Please Wait &nbsp; <div class = "inline bg-white text-black">{progress.toFixed(2)}%</div></p>
    </Html>
  )
}

export default Loader
import React, { useState } from 'react';
import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const { scene } = useGLTF('./space_station_3.glb');

  return (
    <mesh> {/* Use group to wrap the scene */}
      <hemisphereLight intensity={2.2} groundColor="white" color = "white"/>
      {/* <hemisphereLight intensity={1.1} groundColor="white" color = "white" position = {[10, 0, 0]}/> */}
      <pointLight 
        position={[0, 0, 0]}
        intensity={isMobile? 20:35}
        // penumbra = {-10}
        // castShadow
        color = "green"
      />
      <pointLight 
        position={isMobile?[3.5,0,0]:[5, 0, 0]}
        intensity={15}
        // penumbra = {100}
        // castShadow
        color = "red"
      />
      <pointLight 
        position={[0, 5, 1]}
        intensity={35}
        // penumbra = {100}
        // castShadow
        color = "blue"
      />
      <pointLight 
        position={[5, -15,0]}
        // angle = {0.1}
        intensity={100}
        penumbra = {1}
        // castShadow
        color = "orange"
      />
      
      {/* <spotLight 
        position = {[-20, 50, 10]}
        angle = {0.7}
        penumbra = {3}
        intensity = {500}
        castShadow
        shadow-mapSize = {1024}
        shadow-camera-near = {500}
      /> */}
      <primitive
        object={scene}
        scale = {isMobile ? 0.7 : 0.9}
        position = {isMobile? [0, -1, 0]:[0,-1.4, 0]}
        rotation = {[-0.01,5.6, -0.7]}
        // cameraPosition = {[100,10,0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:600px)');
    setisMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',  handleMediaQueryChange);
    }
  }, [])
  

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [18, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback = {<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
        <Computers isMobile = {isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

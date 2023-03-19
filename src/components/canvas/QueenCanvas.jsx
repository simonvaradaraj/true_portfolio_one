import React , {Suspense, useEffect, useState, useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'

import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../CanvasLoader'

const Queen = ({isMobile}) => {
  const queen = useGLTF('./queen/scene.gltf')
  const modelRef = useRef()

  useFrame(() => {
    modelRef.current.rotation.y += 0.005;
  })

  return (
    <mesh ref={modelRef}>
      {/* Lights */}
      <hemisphereLight intensity = {.25} groundColor='black'/> 
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}/>

        {/* Object Properties */}
        <primitive object={queen.scene}
        scale={isMobile ? 5.5 : 8}
        position={isMobile ? [0, 0, 0] : [0,-3, -1.2]}
        rotation={[0, 0, 0.2]}/>

    </mesh>
  )
}

const QueenCanvas = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)') //checks if you are on mobile device
  
    setIsMobile(mediaQuery.matches) //set isMobile to if the query matches

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches) //makes a function that changes isMobile on event
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }

  }, [])

  return (
    <div className="sm:w-[200px] w-[20vw]  h-[40vh]">
      <Canvas frameLoop='demand'  
      camera={{position: [30, 20, 20], fov: 35, far: 1000, near: 1}} gl={{preserveDrawingBuffer: true}}>
        {/* Loading */}
        <Suspense fallback={<CanvasLoader />}>
          {/* Allows for the user to rotate the object */}
          <OrbitControls enableZoom={false}
            //Stays fixed on one axis
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={Math.PI / 2}
            />
          {/* The object itself */}
          <Queen isMobile={isMobile}/>
        </Suspense>

        <Preload all/>
      </Canvas>
    </div>
  )
}

export default QueenCanvas
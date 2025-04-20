import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../CanvasLoader'

const Phone = () => {
    const earth = useGLTF('./iphone/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity = {2} groundColor='black'/> 
            <pointLight intensity={2} />
            <spotLight 
                position={[5, 30, 5]}
                angle={.30}
                penumbra={1}
                intensity={5}
                castShadow
                shadow-mapSize={1024}/>
            <primitive object={earth.scene}
                scale={.045}
                position-y={-1.85}
                rotation-y={0}>
            </primitive>
        </mesh>
        
    )
}

const PhoneCanvas = () => {
  return (
    <Canvas frameLoop='demand' shadows 
    camera={{fov: 45, near: 0.1, far: 100, position: [-4, 3, 6]}} gl={{preserveDrawingBuffer: true}}>
      {/* Loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Allows for the user to rotate the object */}
        <OrbitControls enableZoom={false}
          //Stays fixed on one axis
          autoRotate
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}/>
        {/* The object itself */}
        <Phone/>
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default PhoneCanvas
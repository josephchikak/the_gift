import { OrbitControls, PresentationControls, Text, useTexture } from '@react-three/drei'
import React from 'react'
import { Star } from './components/Star'
import { useFrame, useThree } from '@react-three/fiber'
import fragmentShader from './shaders/framgment.glsl';
import vertexShader from './shaders/vertex.glsl';


const Scene = () => {

   const backTexture = useTexture('/assets/2.png')

    useFrame((state) => {
                state.gl.setClearColor('black')
    })


    const {viewport} = useThree();
    const planeWidth = viewport.width;  // Match plane width to screen width
    const planeHeight = viewport.height; // Match plane height to screen height

    // const scaleFactor = viewport.width < 6 ? 0.8 : 1; // Shrinks plane on smaller screens

    const scaleFactor = Math.min(viewport.width / 10, viewport.height / 7); 

  return (
    <>
        <ambientLight intensity={2}/>
        <mesh position={[0,0,-1]} scale={[scaleFactor, scaleFactor, 1]}>
           <planeGeometry args={[10, 10]} />
           <meshBasicMaterial map={backTexture}/>

           {/* <shaderMaterial
              uniforms={{texture: {value: backTexture}}}
              vertexShader = {vertexShader}
              fragmentShader = {fragmentShader}
           /> */}
        </mesh>

        {/* <Text position={[0,2,1]} color='white' anchorX="center" anchorY="middle" >
            SUTÉ IWAR
        </Text> */}
         {/* <mesh>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial color={'orange'}/>
            </mesh>  */}
            <PresentationControls
              global
              snap
              config={{ mass: 2, tension: 500 }}
              polar={[-Math.PI / 4, Math.PI / 4]} // Allow rotation limits
              azimuth={[-Math.PI / 2, Math.PI / 2]} // Horizontal rotation limits
              rotation={[0, 0, 0]} // Initial rotation
              cursor={true} // Ensure cursor feedback
            
            >
                <Star/>

            <Text font='/fonts/Krimson.ttf' position={[0,1.8,1]} color='white' anchorX="center" anchorY="middle" fontSize={0.5}>
               SUTÉ IWAR
            </Text>

                <group scale={[scaleFactor, scaleFactor, 1]} >
          

            <Text font='/fonts/Krimson.ttf' position={[-0,-3.5,1]} color='white' anchorX="center" anchorY="middle" fontSize={0.3}>
                A soundtrack for navigating life's complexities
            </Text>

            {/* <Text font='/fonts/Krimson.ttf' position={[-3,-4,1]} color='white' anchorX="center" anchorY="middle" fontSize={0.3}>
              for navigating 
              </Text>

            <Text font='/fonts/Krimson.ttf' position={[-2,-5,1]} color='white' anchorX="center" anchorY="middle" fontSize={0.7}>
              life's 
            </Text>

            <Text font='/fonts/Krimson.ttf' position={[-3,-5.5,1]} color='white' anchorX="center" anchorY="middle" fontSize={0.3}>
            complexities
            </Text> */}
        </group>

           <Text font='/fonts/Krimson.ttf' position={[0,-2,1]} color='white' anchorX="center" anchorY="middle" fontSize={0.3}>
                THE GIFT
            </Text>
    

            </PresentationControls>
           
    </>
  
  )
}

export default Scene
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useTexture, useMatcapTexture, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Star() {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model/the gift.glb')
  const { actions } = useAnimations(animations, group)

  const texture = useTexture('/chrome1.jpeg')
  const matTexture = useTexture('/textures/Matcap Chrome 1024x1024.jpg')


  // useEffect(() =>{
  //   console.log(animations)
  //   actions['StarAction']?.fadeIn().play()
  // })

  useFrame(() => {
    if(group.current) {
      group.current.rotation.y += 0.01
    }
  })

 
  return (
    <group ref={group}  dispose={null}>
   
      <group name="Scene">
        <mesh
          name="Star"
          castShadow
          receiveShadow
          geometry={nodes.Star.geometry}
        //   material={texture}
          rotation={[-Math.PI / 2, 0.38, Math.PI]}

        >
            {/* <meshStandardMaterial map={texture} /> */}
            <meshMatcapMaterial matcap={matTexture}/>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/the gift.glb')
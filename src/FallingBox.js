import React from "react";
import { Canvas, extend } from '@react-three/fiber'
// import { FontLoader} from 'three/examples/jsm/FontLoader'
import {TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import {OrbitControls, Stars} from '@react-three/drei'
import {Physics, usePlane, useBox } from '@react-three/cannon'
import './styles.css'
import TestText from './TestText'

function App (){

  function Box(props){
    const [ref, api]= useBox(()=>({
      mass:.5, position: [0,10,0]}))
    return(
      <mesh onClick = {()=>{
        api.velocity.set(1,8,0)
      }} 
      ref={ref} 
      position={[0,10,0]}>
        <boxBufferGeometry attach = 'geometry'/>
        <meshLambertMaterial attach='material' color='blue'/>
    </mesh>
    )
  }

  function Plane(){
    const [ref]= usePlane(()=>({
      rotation: [-Math.PI / 2, 0, 0],
      position: [0,-10,0]
    }))
    return(
      <mesh ref={ref} position = {[0,-10,0]} rotation={[-Math.PI /2, 0, 0]}>
        
        <planeBufferGeometry attach='geometry' args={[100,100]} />
        <meshLambertMaterial attach='material' color='gold'/>
      </mesh>
    )
  }



  return(
 

    <Canvas className="canvas" >
      {/* <OrbitControls/>
      <Stars />  */}
      <TestText/>
      {/* <ambientLight intensity={.2}/>
      <spotLight position={[10,15,10]} angle={.3}/>
      <Physics>
        <Plane/>
        <Box/>
      </Physics> */}
    </Canvas>

  )
}
export default App
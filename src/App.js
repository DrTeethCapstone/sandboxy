import * as Three from 'three'
import React from "react"
import {Canvas} from "@react-three/fiber"
import {Text, Html} from '@react-three/drei'
import './styles.css'
import FormTest from './FormTest'
import Header from './Header'

function App (){
function FormTest (){
  const handleChange = (event)=>{console.log(event.target.value)}
  return(
    <form  className="form" onChange={handleChange}>
        <label className='form'>Name</label>
        <input type='text'/>
        <label>Email</label>
        <input type='text'/>
        <label>Password</label>
        <input type='text'/>
    </form>
)}

function Box(){
  return(
    <mesh scale={[1,1,1]} color='white' position={[0,10,0]}>
      <boxGeometry  />
      <meshStandardMaterial color='white'/>
      <Html  scale={[2,2,2]} distanceFactor={1} position={[0,-7.3,0.5]} transform>
        <FormTest/>
      </Html>
    </mesh>
  )
}


function ArcadeText(props) {
  return (
      <Text
          // ref={ref}
          color={'#87CAC3'}
          fontSize={0.2}
          maxWidth={12}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={'center'}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
          position={props.position}
      >
          ARCADE
      </Text>
  )
}
return(
  <div>
            <Canvas  className='canvas'>
                <ambientLight intensity={1}/>
                <Box/>
                <mesh>
          
                    <Text
                        // ref={ref}
                        color={'#87CAC3'}
                        fontSize={0.7}
                        maxWidth={20}
                        lineHeight={1}
                        letterSpacing={0.02}
                        textAlign={'left'}
                        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
                        anchorX="center"
                        anchorY="middle"
                        position={[0, 2, 0]}
                    >
                        NOT SEMANTRIS
                    </Text>
                 
                    <Text
                        // ref={ref}
                        color={'#87CAC3'}
                        fontSize={0.2}
                        maxWidth={12}
                        lineHeight={1}
                        letterSpacing={0.02}
                        textAlign={'center'}
                        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
                        anchorX="center"
                        anchorY="middle"
                        position={[0, 1.3, 0]}
                        onClick={()=>console.log('clicked')}
                    >
                        Word association games powered by machine learning and teeth
                    </Text>
                    <ArcadeText
                        position={[-1.5, -1, 0]}
                    />
                    <ArcadeText
                        position={[1.5, -1, 0]}
                    />

                    <meshStandardMaterial />
                </mesh>
              </Canvas>    
            </div>
          )
}

export default App
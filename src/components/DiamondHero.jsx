import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function Diamond() {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.y += 0.005
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
  })

  // Custom diamond geometry
  const geometry = new THREE.ConeGeometry(1.2, 2, 8, 1)

  return (
    <group>
      {/* Main diamond top */}
      <mesh ref={meshRef} geometry={geometry} position={[0, 0.3, 0]}>
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={0.5}
          anisotropy={0.3}
          chromaticAberration={0.4}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.05}
          color="#ff6b00"
          transmission={0.95}
          roughness={0}
          metalness={0.1}
          iridescence={1}
          iridescenceIOR={1.5}
          iridescenceThicknessRange={[100, 800]}
        />
      </mesh>

      {/* Diamond bottom (inverted cone) */}
      <mesh rotation={[Math.PI, 0, 0]} position={[0, -0.9, 0]}>
        <coneGeometry args={[1.2, 1.2, 8, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={0.5}
          chromaticAberration={0.4}
          color="#ff6b00"
          transmission={0.95}
          roughness={0}
          iridescence={1}
          iridescenceIOR={1.5}
          iridescenceThicknessRange={[100, 800]}
        />
      </mesh>

      {/* Orange glow point lights */}
      <pointLight color="#ff6b00" intensity={3} distance={6} position={[2, 2, 2]} />
      <pointLight color="#ff4400" intensity={2} distance={6} position={[-2, -1, -2]} />
      <pointLight color="#ffaa00" intensity={1.5} distance={4} position={[0, 3, 0]} />
    </group>
  )
}

function Particles() {
  const count = 80
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.y += 0.0008
    ref.current.rotation.x += 0.0003
  })

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial color="#ff6b00" size={0.04} transparent opacity={0.6} />
    </points>
  )
}

export default function DiamondHero() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, right: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.2} />
        <Environment preset="city" />

        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
          <Diamond />
        </Float>

        <Particles />
      </Canvas>
    </div>
  )
}
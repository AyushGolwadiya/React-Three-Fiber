import { Environment, Sphere } from '@react-three/drei'
import React, { useMemo } from 'react'
import * as THREE from 'three'

const Background = () => {
  const gradientTexture = useMemo(() => {
    const size = 512
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = size

    const context = canvas.getContext('2d')
    const gradient = context.createLinearGradient(0, 0, 0, size)
    gradient.addColorStop(0, 'blue') // top color
    gradient.addColorStop(1, 'white') // bottom color

    context.fillStyle = gradient
    context.fillRect(0, 0, 1, size)

    const texture = new THREE.CanvasTexture(canvas)
    texture.magFilter = THREE.LinearFilter
    texture.minFilter = THREE.LinearMipMapLinearFilter
    return texture
  }, [])

  return (
    <>
      <Environment preset="sunset" />
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <meshBasicMaterial map={gradientTexture} side={THREE.BackSide} />
      </Sphere>
    </>
  )
}

export default Background

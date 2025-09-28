import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  GizmoHelper,
  GizmoViewcube,
  Stage,
  Environment,
  OrthographicCamera,
  PerspectiveCamera,
} from '@react-three/drei';
import * as THREE from 'three';
import { useState } from 'react';
import { OrthographicPerspectiveToggle } from '@/components/viewer/OrthographicPerspectiveToggle';
import { useColor } from '@/contexts/ColorContext';

export function ThreeScene({ geometry }: { geometry: THREE.BufferGeometry }) {
  const { color } = useColor();
  const [isOrthographic, setIsOrthographic] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <Canvas className="block h-full w-full">
        <color attach="background" args={['#3B3B3B']} />
        {isOrthographic ? (
          <OrthographicCamera
            makeDefault
            position={[-100, 100, 100]}
            zoom={40}
            near={0.1}
            far={1000}
          />
        ) : (
          <PerspectiveCamera
            makeDefault
            position={[-100, 100, 100]}
            fov={45}
            near={0.1}
            far={1000}
            zoom={0.4}
          />
        )}
        <Stage environment={null} intensity={0.6} position={[0, 0, 0]}>
          <Environment files={`${import.meta.env.BASE_URL}/city.hdr`} />
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
          <directionalLight position={[-5, 5, 5]} intensity={0.2} />
          <directionalLight position={[-5, 5, -5]} intensity={0.2} />
          <directionalLight position={[0, 5, 0]} intensity={0.2} />
          <directionalLight position={[-5, -5, -5]} intensity={0.6} />
          <mesh
            geometry={geometry}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0]}
          >
            <meshStandardMaterial
              color={color}
              metalness={0.6}
              roughness={0.3}
              envMapIntensity={0.3}
            />
          </mesh>
        </Stage>
        {/* <Grid
          position={[0, 0, 0]}
          cellSize={30}
          cellThickness={0.5}
          sectionSize={10}
          sectionColor="gray"
          sectionThickness={0.5}
          fadeDistance={500}
          fadeStrength={1}
          followCamera={false}
          infiniteGrid={true}
        /> */}
        <OrbitControls makeDefault enableDamping={true} dampingFactor={0.05} />
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewcube />
        </GizmoHelper>
      </Canvas>

      <div className="absolute bottom-2 right-9 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <OrthographicPerspectiveToggle
            isOrthographic={isOrthographic}
            onToggle={setIsOrthographic}
          />
        </div>
      </div>
    </div>
  );
}

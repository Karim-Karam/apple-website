import React from 'react'
import { Environment, Lightformer, spotLight } from '@react-three/drei'
const StudioLights = () => {
    return (
        <group name='lights'>
            <Environment resolution={256}>
                <group>
                    <Lightformer
                        form='rect'
                        intensity={10}
                        position={[10, 5, -5]}
                        scale={10}
                    />

                    <Lightformer
                        form='rect'
                        intensity={10}
                        position={[10, 0, 1]}
                        scale={10}
                    />

                </group>
            </Environment>
            <spotLight
                position={[-2, 10, 5]}
                angel={0.3}
                decay={0}
                intensity={Math.PI * 0.2}
            />
            <spotLight
                position={[0, -25, 10]}
                angel={0.3}
                decay={0}
                intensity={Math.PI * 0.2}
            />
            <spotLight
                position={[0, 15, 5]}
                angel={0.3}
                decay={0.1}
                intensity={Math.PI * 3}
            />
        </group >
    )
}

export default StudioLights
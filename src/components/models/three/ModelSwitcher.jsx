import { useRef } from 'react'
import { PresentationControls } from '@react-three/drei'
import MacbookModel14 from '../Macbook-14'
import MacbookModel16 from '../Macbook-16'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';

const ANIMATION_DURATION = 1
const OFFSET_DISTANCE = 10

const fadeMeshes = (group, opacity) => {
    if (!group) return
    group.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true
            gsap.to(child.material, {
                opacity: opacity,
                duration: ANIMATION_DURATION,
            })
        }
    })
}

const moveGroup = (group, x) => {
    if (!group) return;
    gsap.to(group.position, {
        x,
        duration: ANIMATION_DURATION,
    })
}

const ModelSwitcher = ({ scale, isMobile }) => {
    const smallMaccbook = useRef()
    const largeMaccbook = useRef()
    const showLargeMacbook = scale === '0.08' || scale == '0.05'

    const controlsconfig = {
        snap: true,
        speed: 5,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: { mass: 1, tension: 0, friction: 26 },
    }

    useGSAP(() => {
        if (showLargeMacbook) {
            moveGroup(largeMaccbook.current, 0)
            moveGroup(smallMaccbook.current, -OFFSET_DISTANCE)
            fadeMeshes(smallMaccbook.current, 0)
            fadeMeshes(largeMaccbook.current, 1)
        } else {
            moveGroup(largeMaccbook.current, OFFSET_DISTANCE)
            moveGroup(smallMaccbook.current, 0)
            fadeMeshes(smallMaccbook.current, 1)
            fadeMeshes(largeMaccbook.current, 0)
        }

    }, [scale])
    return (
        <>
            <PresentationControls {...controlsconfig}>
                <group ref={largeMaccbook}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>

            </PresentationControls>

            <PresentationControls {...controlsconfig}>
                <group ref={smallMaccbook}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    )
}

export default ModelSwitcher
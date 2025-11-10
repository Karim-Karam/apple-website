import React from 'react'
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'


const Showcase = () => {

    const isTablet = useMediaQuery({ query: '(max-width:1024px)' });

    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });
            timeline.to('.mask img',
                {
                    transform: 'scale(1.1)',
                }
            );
            timeline.to('.content',
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power1.in',
                },
            );

        }
    }, [isTablet]);

    return (
        <section id='showcase'>
            <div className="media">
                <video src="/videos/game.mp4" playsInline muted loop autoPlay />
                <div className="mask">
                    <img src="/mask-logo.svg" alt="Apple Arcade Logo" />
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>
                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing
                                <span className="text-white">
                                    M4, the next generation of Apple silicon
                                </span>

                                .M4 powers
                            </p>

                            <p> it drive Apple intelligence on ipad pro, so you can write,create and accomplish more with aese. All in a design that's unbelievably thin ,light ,and powerful </p>
                            <p> A brand-new display engine delivers breathtaking precision,color accuracy,and brightness,And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.  </p>
                            <p className="text-primary">learn more about apple intelligence</p>
                        </div>
                    </div>
                    <div className="max-w-3xs space-y-14">
                        <div className="spaxe-y-2">
                            <p>Up to</p>
                            <p className="text-white text-4xl">4x faster</p>
                            <p>pro rendering performance than M2</p>
                        </div>

                        <div className="spaxe-y-2">
                            <p>Up to</p>
                            <p className="text-white text-4xl">1.5x faster</p>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase
import { useRef } from 'react';
import { foodItems } from '../App' 
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const Interface = () => {
    const introductionRef = useRef();
    const scrollData = useScroll();

    useFrame(()=>{
        introductionRef.current.style.opacity = 1 - scrollData.range(0,0.1)
    })
  return (
    <>
        <section className="page" ref={introductionRef}>
            <div className="introduction">
                <p className='introduction__label'>Welcome to Panda Sushi , Scroll down to discover our delicious dishes
                    <br/>
                    👇
                </p>
            </div>
        </section>
        {
            foodItems.map((foodItem , index) => (
            <section className='page' key={index}>
                <div className='food'>
                    <h2 className='food__title'>{foodItem.name}</h2>
                    <p className="food_description">{foodItem.description}</p>
                </div>
            </section>
            ))
        }
    </>
  ); 

}

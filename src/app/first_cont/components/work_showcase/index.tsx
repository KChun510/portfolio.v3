import slides from './slides'
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Dot } from 'lucide-react';

const WorkShowcase = () => {
	const [index, setIndex] = useState(0);
	const [playSlide, setSlideState] = useState(1);
	const prev = () => setIndex((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
	const next = () => setIndex((curr) => (curr === slides.length - 1 ? 0 : ++curr))

	useEffect(() => {
		if (playSlide) {
			const interval = setInterval(() => {
				next()
			}, 15000)
			return () => clearInterval(interval)
		}
	}, [playSlide])

	return (
		<div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0" onClick={(e) => setSlideState(0)}>
			<h6 className="text-3xl font-semibold ml-1">Live builds & diagrams </h6>
			<div id='work_showcase' className="aspect-w-16 aspect-h-9 rounded shadow border-1 border-white">
				{slides[index]}
			</div>
			<div className="flex mt-2 justify-center items-center gap-4 w-full">
				<button onClick={prev} className="cursor-pointer">
					<ArrowLeft className='hover:[color:#332E2E]' />
				</button>
				{slides.map((item, i) => <button className="cursor-pointer" key={`dots + ${i}`} onClick={() => setIndex(i)}> <Dot className="hover:[color:#332E2E]" color={index === i ? "#332E2E" : "white"} /> </button>)}
				<button onClick={next} className="cursor-pointer">
					<ArrowRight className='hover:[color:#332E2E]' />
				</button>
			</div>
		</div >
	)
}
export default WorkShowcase


/*
 import { useState } from "react";

const Carousel = ({ slides }: { slides: JSX.Element[] }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="h-full flex items-center justify-center">
	{slides[index]}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2">
	←
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2">
	→
      </button>
    </div>
  );
};



<Carousel
  slides={[
    <div className="text-white bg-red-500 w-full h-full flex items-center justify-center">Slide 1</div>,
    <div className="text-white bg-green-500 w-full h-full flex items-center justify-center">Slide 2</div>,
    <div className="text-white bg-blue-500 w-full h-full flex items-center justify-center">Slide 3</div>,
  ]}
/>

*/

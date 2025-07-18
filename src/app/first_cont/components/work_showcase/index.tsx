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
			}, 10000)
			return () => clearInterval(interval)
		}
	}, [playSlide])

	return (
		<div className="w-full lg:w-1/2 px-3 mb-6 md:px-4 md:mb-0" onClick={(e) => setSlideState(0)}>
			<h6 className="text-white text-3xl font-semibold">Builds in Action</h6>
			<div id='work_showcase' className="aspect-w-16 aspect-h-9 rounded shadow border-1 border-white">
				{slides[index]}
			</div>
			<div className="flex mt-2 justify-center items-center gap-4 w-full">
				<button onClick={prev} className="cursor-pointer">
					<ArrowLeft className='hover:[color:#332E2E]' color="white" />
				</button>
				{slides.map((item, i) => <button className="cursor-pointer" key={`dots + ${i}`} onClick={() => setIndex(i)}> <Dot className="hover:[color:#332E2E]" color={index === i ? "#332E2E" : "white"} /> </button>)}
				<button onClick={next} className="cursor-pointer">
					<ArrowRight className='hover:text-[#332E2E]' color="white" />
				</button>
			</div>
		</div >
	)
}
export default WorkShowcase



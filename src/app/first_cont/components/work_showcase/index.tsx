const WorkShowcase = () => {
	return (
		<div>
		</div>
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

const scrollToSection = (sectionId: string) => {
	const isMobile = window.innerWidth <= 768; // Tailwind's md breakpoint is 768px
	document.getElementById(sectionId)?.scrollIntoView({
		behavior: 'smooth',
		block: isMobile ? 'start' : 'center',
	});
};

const HeroCont = () => {
	return (
		<div className="mt-10 md:mt-0">
			<div className="mx-6 pt-55 sm:w-full lg:w-1/3 flex flex-col text-left mb-5">
				<div>
					<h1 className="text-6xl font-bold mb-5">Kyle Chun</h1>
					<h6 className="text-2xl">Oakland-Born engineer. Building systems that echo the pace of the city.</h6>
				</div>
			</div>
			<div className="mx-6 flex space-x-4">
				<button className="bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded text-sm md:text-base" onClick={() => scrollToSection('first_cont')}> Projects </button>
				<button className="bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded text-sm md:text-base" onClick={() => scrollToSection('music_cont')}> Suggest a song </button>
				<button className="bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded text-sm md:text-base" onClick={() => scrollToSection('aboutMe_cont')}> About Me </button>

			</div>
		</div>
	)
}
export default HeroCont

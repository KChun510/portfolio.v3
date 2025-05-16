const scrollToSection = (sectionId: string) => {
	document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const HeroCont = () => {
	return (
		<div className="relative pl-9">
			<div className="pt-50 w-1/3 flex flex-col text-left mb-5">
				<div>
					<h1 className="text-6xl font-bold mb-5">Kyle Chun</h1>
					<h6 className="text-2xl">Oakland-Born engineer. Building systems that echo the pace of the city.</h6>
				</div>
			</div>
			<div className="flex space-x-4">
				<button className="bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded" onClick={() => scrollToSection('first_cont')}> Projects </button>
				<button className="bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded" onClick={() => scrollToSection('second_cont')}> About Me </button>
				<button className="bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded"> Button </button>
				<button className="bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded"> Button </button>
			</div>
		</div>
	)
}
export default HeroCont

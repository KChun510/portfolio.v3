import '../../aboutMe_cont.css';
import selfPortrait from '../self_portrait.png'
import Image from 'next/image';

function Info() {
	return (
		<div className={`flex flex-row items-center`}>
			<div className='hidden md:block w-1/12'></div>
			<div className='flex-1' id='info_cont'>
				<h5 className="text-lg font-semibold">Summary :</h5>
				I’m a systems‑minded engineer who’s been building since I could reach the Lego bin.
				<br />
				<br />
				Back then, I raided an overflowing box of mismatched bricks to create battle‑ready vehicles and fortified bunkers guided only by imagination, curiosity, and the determination to finish what I started. Today, the pieces are skills, patterns, and platforms spread across the tech stack. But the operating mode is identical: start with a vision, thrive in ambiguity, and architect the solution into reality.
				<br />
				<br />
				In combination with this mindset is my background. I’m not your typical “prepped” person/student who dreamed of a prestigious school. I’m self‑built and self‑prepared through life experience. Oakland and the Bay Area are known for producing hustlers and creators and I’m proud to be a product of that environment. I carry that internal pace every single day.
				<br />
				<br />
				I’m a unique mix of street and book smarts. I don’t shy away from “intelligent” environments. I contribute confidently. And I never back down under pressure, knowing I’ve already overcome everything else life threw my way.
				<br />
				<br />
				<h6 className="text-md font-medium">Personal Interest :</h6>

				Coding
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block ml-1"
					viewBox="0 0 16 16">
					<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
				</svg>
				Music

				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block ml-1"
					viewBox="0 0 16 16">
					<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
				</svg>
				Creation
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block ml-1"
					viewBox="0 0 16 16">
					<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
				</svg>
				Coffee
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block ml-1"
					viewBox="0 0 16 16">
					<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
				</svg>
				Cars
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block ml-1"
					viewBox="0 0 16 16">
					<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
				</svg>
				Fitness
			</div>

			<div className="hidden md:block flex-1 w-[50vw] h-[50vh]">
				<Image src={selfPortrait} className="rounded-lg w-full h-full object-contain" alt="self portrat" />
			</div>
		</div>
	)
}
export default Info

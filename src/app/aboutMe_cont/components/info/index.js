import '../../aboutMe_cont.css'
import selfPortrait from '../self_portrait.png'
import Image from 'next/image';

function Info() {
	return (
		<div className='flex flex-row pt-4'>
			<div className='hidden md:block w-1/12'></div>
			<div className='flex-1' id='info_cont'>
				<h5 className="text-lg font-semibold">Summary :</h5>
				A college student who fell in love with coding. I was born and raised in Oakland, CA, and my in-person mannerisms will reflect that. Growing up, piecing together legos from an enormous miscellaneous bin took hold of my entire childhood. Coding has drawn me in the same way and has replaced my Lego obsession. Instead of picking up random blocks from a bin, I'm now picking up languages, libraries, and frameworks to build my next creation!! Constantly pushing myself to learn new computer science skills to extend my capabilities.
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

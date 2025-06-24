import { JSX } from "react"
import Image from 'next/image';
import tetris_gif from "./slide_images/newest_termtris.gif"
import mediaMindpng from "./slide_images/mediaMind.png"
import maizdotwork from "./slide_images/maiz.work.front.png"
import embedc from "./slide_images/embed_c.png"
import on_point from "./slide_images/onpointOakland.png"


const slides: JSX.Element[] = [
	<div key="mediaMind" className="relative w-full h-full">
		<a href="https://github.com/KChun510/TermTris_Tetris-In-the-CLI" target="_blank" className="relative block w-full h-full">
			<Image
				src={tetris_gif}
				alt="tetris_gif photo"
				fill
				sizes="(max-width: 800px) 100vw, 800px"

				className="object-contain"
			/>
			<div className="absolute bottom-0 left-0 bg-[#332E2E]/80 text-white p-4 z-10 w-full">
				<h2 className="text-xl font-bold">TermTris</h2>
				<p>A recreation of Tetris that runs in the Terminal/Command Prompt!</p>
			</div>
		</a>
	</div>
	,
	<div key="mediaMind" className="relative w-full h-full">
		<a href="https://github.com/KChun510/MediaMind" target="_blank" className="relative block w-full h-full">
			<Image
				src={mediaMindpng}
				alt="mediaMind photo"
				fill
				sizes="(max-width: 800px) 100vw, 800px"

				className="object-contain"
			/>
			<div className="absolute bottom-0 left-0 bg-[#332E2E]/80 text-white p-4 z-10 w-full">
				<h2 className="text-xl font-bold">MediaMind</h2>
				<p>An automated system used for content generation and posting, using AI.</p>
			</div>
		</a>
	</div>,
	<div key="maiz.work" className="relative w-full h-full">
		<a href="https://maiz.work/" target="_blank" className="relative block w-full h-full">
			<Image
				src={maizdotwork}
				alt="maiz.work photo"
				fill
				sizes="(max-width: 800px) 100vw, 800px"

				className="object-contain bg-[#150d03]"
			/>
			<div className="absolute bottom-0 left-0 bg-[#332E2E]/80 text-white p-4 z-10 w-full">
				<h2 className="text-xl font-bold">Maiz.Work</h2>
				<p>Online shop front for a local Oakland clothing brand.</p>
			</div>
		</a>
	</div>,
	<div key="embedc" className="relative w-full h-full">
		<a href="https://github.com/KChun510/Embedded_Software_c" target="_blank" className="relative block w-full h-full">
			<Image
				src={embedc}
				alt="embedc photo"
				fill
				sizes="(max-width: 800px) 100vw, 800px"

				className="object-contain bg-white"
			/>
			<div className="absolute bottom-0 left-0 bg-[#332E2E]/80 text-white p-4 z-10 w-full">
				<h2 className="text-xl font-bold">Embedded Systems</h2>
				<p>A collection of my embedded systems work while attending UC Irvine. </p>
			</div>
		</a>
	</div>,
	<div key="on_point" className="relative w-full h-full">
		<a href="https://onpointoakland.com/" target="_blank" className="relative block w-full h-full">
			<Image
				src={on_point}
				alt="onpoint photo"
				fill
				sizes="(max-width: 800px) 100vw, 800px"

				className="object-contain bg-white"
			/>
			<div className="absolute bottom-0 left-0 bg-[#332E2E]/80 text-white p-4 z-10 w-full">
				<h2 className="text-xl font-bold">OnPoint Oakland</h2>
				<p>Buisness Profile for a local Oakland document outsourcing buisness. </p>
			</div>
		</a>
	</div>,
	<iframe
		key="video"
		title='my_video'
		src="https://drive.google.com/file/d/1ylyMX7dNSRdGZ4AtAJ6ucKKws4FhTnG4/preview"
		allowFullScreen
		style={{ width: '100%', height: '100%', border: 'none' }}
	></iframe>,
]

export default slides

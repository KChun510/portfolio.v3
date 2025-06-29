import '../../aboutMe_cont.css';


function Resume() {
	return (
		<div className={`pt-6 pb-6 space-y-8`}>

			{/* Credit Karma - SWE Intern */}
			<div>
				<p className="font-bold">Credit Karma</p>
				<p className="italic">Software Engineer Intern (May 2024 - Sep 2024)</p>
				<ul className="list-disc list-inside mt-2 space-y-1">
					<li>Designed and developed an End-to-End Notification Service to improve event management and communication.</li>
				</ul>
			</div>

			{/* Credit Karma - IT Engineer */}
			<div>
				<p className="font-bold">Credit Karma</p>
				<p className="italic">IT Engineer (Aug 2023 - May 2024)</p>
				<ul className="list-disc list-inside mt-2 space-y-1">
					<li>Expanded automation initiatives across IT processes and device management.</li>
				</ul>
			</div>

			{/* Credit Karma - IT Engineer Intern */}
			<div>
				<p className="font-bold">Credit Karma</p>
				<p className="italic">IT Engineer Intern (May 2023 - Aug 2023)</p>
				<ul className="list-disc list-inside mt-2 space-y-1">
					<li>Collected data on 200+ terminated employees using a Python web crawler.</li>
					<li>Automated cleanup of inventory & device management systems for 4,500+ machines.</li>
					<li>Streamlined inventory tracking with Oomnitza API and barcode scanners.</li>
				</ul>
			</div>

			{/* OnPoint */}
			<div>
				<p className="font-bold">OnPoint Document Outsourcing</p>
				<p className="italic">IT Consultant (Oct 2020 - Sep 2021)</p>
				<ul className="list-disc list-inside mt-2 space-y-1">
					<li>Secured local network and improved system security to meet industry standards.</li>
					<li>Conducted penetration testing to identify and address cybersecurity threats.</li>
					<li>Implemented quarterly security checks to identify new vulnerabilities.</li>
				</ul>
			</div>

			{/* Technical Skills */}
			<div>
				<p className="font-bold">Technical Skills:</p>
				<p className="mt-1">Proficient in C++, Python, HTML, JavaScript, TypeScript</p>
				<p>Physical server assembly/maintenance, computer assembly, networking, and more.</p>
			</div>

			{/* Resume Link */}
			<div className="w-full text-center mt-4">
				<a
					href="https://docs.google.com/document/d/1fzqxueGqjhMUBqfE1Q12z9S2X3bAPbeKIDESDi2UlE4/edit?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button type="button" className="border border-white text-white py-1 px-4 rounded hover:bg-white hover:text-black transition">
						View Full Resume
					</button>
				</a>
			</div>

		</div>

	)
}
export default Resume

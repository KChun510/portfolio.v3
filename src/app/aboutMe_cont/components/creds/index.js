import styles from '../../aboutMe_cont.css';

function Creds() {
	return (
		<div className={`pt-6 pb-6 space-y-8`}>
			{/* UC Irvine Section */}
			<div>
				<h5 className="font-bold text-lg">School Courses — UC Irvine:</h5>
				<p className="mt-1 italic">Courses in Progress...</p>
			</div>
			{/* Laney College Section */}
			<div>
				<h5 className="font-bold text-lg">School Courses — Laney College:</h5>
				<ul className="list-disc list-inside mt-2 space-y-1">
					<li><span className="font-bold">CIS 25</span> — Programming Using C++ <span className="italic">(A+)</span></li>
					<li><span className="font-bold">CIS 27</span> — Data Structures and Algorithms <span className="italic">(A)</span></li>
					<li><span className="font-bold">CIS 61</span> — Structured/Object-Oriented Programming <span className="italic">(A)</span></li>
				</ul>
			</div>
			{/* Certifications */}
			<div>
				<h5 className="font-bold text-lg">Certifications:</h5>
				<ul className="list-disc list-inside mt-2 space-y-1">
					<li><span className="font-bold">Automation Pro — Workato</span> <span className="italic">Issued Aug 2023</span></li>
					<li><span className="font-bold">Google IT Support Professional</span> <span className="italic">Issued Feb 2021</span></li>
					<li><span className="font-bold">Excel Proficiency</span> <span className="italic">Issued Sep 2020</span></li>
				</ul>
			</div>

		</div>
	)
}
export default Creds

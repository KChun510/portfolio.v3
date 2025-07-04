'use client'
import CreateIcon from "../langIcons"
import '../../first_cont.css'

function RepoButton({ name, des, url, lang }) {
	return (
		<a key={name} href={url} target='_blank' rel='noopener noreferrer' className='px-2 repo_buttons'>
			<div key={name} className='pt-2 w-full justify-content-between '>
				<b><h5 className='mb-1 text text-white'> {name} </h5></b>
			</div>
			<p className='mb-1 text text-white'>{des ? des : "No description given."}</p>
			<div className="flex-row gap-x-4">
				{Object.keys(lang).map((key) => (
					<CreateIcon key={`${name}+${key}`} lang={key} />
				))}
			</div>
		</a>
	)
}
export default RepoButton

type SearchBarProps = {
	value: string;
	readonly?: boolean;
	inputMode?: any;
	placeholderText?: string;
	onChange1: (value: string) => void;
	onChange2?: (value: string) => void;
	onClick?: () => void;
	className?: string;
};

const handle_enter_press = (e: React.KeyboardEvent<HTMLInputElement>) => {
	if (e.key === "Enter") {
		e.preventDefault()
	}
}

const SearchBar = ({ className = '', readonly = false, inputMode = "text", value, onChange1, onChange2, onClick, placeholderText }: SearchBarProps) => {
	return (
		<form className={`${className}`}>
			<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
					</svg>
				</div>
				<input type="text" readOnly={readonly} inputMode={inputMode} id="default-search" className="h-[50px] md:h-auto text-base block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholderText ?? "Suggest a Song Here!"} value={value} onChange={(e) => {
					onChange1(e.target.value)
					if (onChange2) { onChange2(e.target.value) }
				}} onClick={onClick} onKeyDown={(e) => handle_enter_press(e)} required />
			</div>
		</form >
	)
}

export default SearchBar

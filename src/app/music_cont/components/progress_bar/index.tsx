import { useEffect, useState } from "react"

const Progress_Bar = ({ className, duration, progress_ms, isPlaying, refetchFn }: { className?: string, progress_ms: number, duration: number, isPlaying: boolean, refetchFn: () => void }) => {

	const [curr_timeStamp, setCurr_timeStamp] = useState({ min: 0, sec: 0 });
	const [progress, setProgress] = useState(0);

	const display_duration_sec = duration / 1000;
	const display_duration_min = Math.floor(display_duration_sec / 60);
	const display_duration_sec_rem = Math.ceil(display_duration_sec % 60);

	useEffect(() => {
		const progress_sec = progress_ms / 1000;
		setCurr_timeStamp({
			min: Math.floor(progress_sec / 60),
			sec: Math.ceil(progress_sec % 60),
		});
		setProgress(progress_ms / duration);
	}, [progress_ms, duration]);

	useEffect(() => {
		if (!isPlaying) return;

		let startTime: number | null = null;
		let animationFrame: number;

		const animate = (timestamp: number) => {
			if (startTime === null) startTime = timestamp - progress_ms;

			const elapsed = timestamp - startTime;
			const percent = Math.min(elapsed / duration, 1);
			setProgress(percent);

			const clampedElapsed = Math.min(elapsed, duration);
			const curr_sec = clampedElapsed / 1000;
			setCurr_timeStamp({
				min: Math.floor(curr_sec / 60),
				sec: Math.ceil(curr_sec % 60),
			});

			if (percent < 1) {
				animationFrame = requestAnimationFrame(animate);
			} else if (percent > 1 || timestamp >= duration) {
				refetchFn();
			}
		};

		animationFrame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationFrame);
	}, [duration, progress_ms, isPlaying, refetchFn]);

	return (
		<div className={`${className} flex flex-col`}>
			<div className={`bg-gray-700 h-1 overflow-hidden rounded-md`}>
				<div
					className="bg-[#8746ff] h-full"
					style={{ width: `${progress * 100}%` }}
				/>
			</div >
			<div className="flex flex-row justify-between pt-1">
				<div className="text-sm">
					{`${curr_timeStamp.min}:${curr_timeStamp.sec < 10 ? `0${curr_timeStamp.sec}` : curr_timeStamp.sec}`}
				</div>
				<div className="text-sm">
					{`${display_duration_min}:${display_duration_sec_rem < 10 ? `0${display_duration_sec_rem}` : display_duration_sec_rem}`}
				</div>
			</div>
		</div>
	)
}
export default Progress_Bar



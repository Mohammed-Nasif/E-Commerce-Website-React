export default function CounterBtn({ isCountUp, countUp, countDown, isCountReset, countReset }) {
	return (
		<button
			className={
				isCountReset
					? 'btn btn-warning w-75 fw-bold text-white mt-4'
					: isCountUp
					? 'btn btn-info w-50 fw-bold text-white fs-4'
					: 'btn btn-danger w-50 fw-bold text-white fs-4'
			}
			onClick={isCountReset ? countReset : isCountUp ? countUp : countDown}>
			{isCountReset ? 'Reset' : isCountUp ? '+' : '-'}
		</button>
	);
}

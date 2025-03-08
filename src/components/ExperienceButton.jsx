export default function ExperienceButton({ label, onClick }) {
	return (
		<button type='button' className='experience-item' onClick={onClick}>
			[{label}]
		</button>
	)
}

export default function Section({ title, children }) {
	return (
		<section className='resume-section-container'>
			<h3 className='cv-section-title'>{title}</h3>
			{children}
		</section>
	)
}

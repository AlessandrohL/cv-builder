export default function ResumeEntry({
	institution,
	position,
	location,
	date,
	details,
	positionBold = false,
}) {
	return (
		<div className='resume-entry'>
			<div className='entry-container'>
				<div className='entry-header'>
					<h5 className='entry-title'>{institution}</h5>
					<p className='entry-description'>
						{positionBold ? <b>{position}</b> : position}
					</p>
				</div>
				<div className='entry-meta'>
					<span className='entry-location'>{location}</span>
					<span className='entry-date'>{date}</span>
				</div>
			</div>
			<div className='entry-details'>{details}</div>
		</div>
	)
}

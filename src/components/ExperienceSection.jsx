/* eslint-disable no-unused-vars */
import ExperienceButton from './ExperienceButton'

export default function ExperienceSection({
	title,
	shouldShowForm,
	setShouldShowForm,
	experienceList,
	experienceLabelProperty,
	onEdit,
	formComponent: FormComponent,
	formProps = {},
}) {
	return (
		<div className='experience-section'>
			<h3>{title}</h3>
			{shouldShowForm ? (
				<FormComponent {...formProps} />
			) : (
				<div className='experience-list'>
					{experienceList.map(e => (
						<ExperienceButton
							key={e.id}
							label={e[experienceLabelProperty]}
							onClick={() => onEdit(e)}
						/>
					))}
				</div>
			)}
			<div className='experience-actions'>
				{shouldShowForm ? (
					<button type='button' onClick={() => setShouldShowForm(false)}>
						Cancelar
					</button>
				) : (
					<button type='button' onClick={() => setShouldShowForm(true)}>
						+ Agregar
					</button>
				)}
			</div>
		</div>
	)
}

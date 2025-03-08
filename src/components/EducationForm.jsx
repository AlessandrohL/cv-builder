import { useState } from 'react'
import EditField from './EditField'

export default function EducationForm({
	initialState,
	addEducation,
	updateEducation,
	deleteEducation,
}) {
	const [education, setEducation] = useState(initialState)

	const hasEducation = initialState.id !== ''
	let actionButtons = null

	if (hasEducation) {
		actionButtons = (
			<>
				<button type='button' onClick={() => updateEducation(education)}>
					Guardar
				</button>
				<button type='button'>Limpiar</button>
				<button type='button' onClick={() => deleteEducation(education.id)}>
					Eliminar
				</button>
			</>
		)
	}

	function handleChange(e) {
		setEducation({
			...education,
			[e.target.name]: e.target.value,
		})
	}

	function handleSubmit(e) {
		e.preventDefault()
		addEducation(education)
		setEducation(initialState)
	}

	return (
		<form>
			<EditField
				label='Nombre de la escuela'
				inputName='schoolName'
				inputType='text'
				value={education.schoolName}
				onChange={handleChange}
			/>
			<EditField
				label='Título de estudio'
				inputName='studyTitle'
				inputType='text'
				value={education.studyTitle}
				onChange={handleChange}
			/>
			<EditField
				label='Fecha de estudio'
				inputName='studyDate'
				inputType='date'
				value={education.studyDate}
				onChange={handleChange}
			/>
			<EditField
				label='Ubicación'
				inputName='location'
				inputType='text'
				value={education.location}
				onChange={handleChange}
			/>
			{hasEducation ? (
				actionButtons
			) : (
				<button type='submit' onClick={handleSubmit}>
					Añadir
				</button>
			)}
		</form>
	)
}

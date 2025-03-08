import { useState } from 'react'
import EditField from './EditField'

export default function WorkForm({
	initialState,
	addWork,
	updateWork,
	deleteWork,
}) {
	const [work, setWork] = useState(initialState)

	const hasWork = initialState.id !== ''
	let actionButtons = null

	if (hasWork) {
		actionButtons = (
			<>
				<button type='button' onClick={() => updateWork(work)}>
					Guardar
				</button>
				<button type='button'>Limpiar</button>
				<button type='button' onClick={() => deleteWork(work.id)}>
					Eliminar
				</button>
			</>
		)
	}

	function handleChange(e) {
		setWork({
			...work,
			[e.target.name]: e.target.value,
		})
	}

	function handleSubmit(e) {
		e.preventDefault()
		addWork(work)
		setWork(initialState)
	}

	return (
		<>
			<form>
				<EditField
					label='Nombre de la Empresa'
					inputName='companyName'
					inputType='text'
					value={work.companyName}
					onChange={handleChange}
				/>
				<EditField
					label='Cargo'
					inputName='position'
					inputType='text'
					value={work.position}
					onChange={handleChange}
				/>
				<EditField
					label='Principales responsabilidades'
					inputName='mainResponsibilities'
					inputType='text'
					value={work.mainResponsibilities}
					onChange={handleChange}
				/>
				<EditField
					label='Ubicación'
					inputName='location'
					inputType='text'
					value={work.location}
					onChange={handleChange}
				/>
				<EditField
					label='Fecha de inicio'
					inputName='startDate'
					inputType='date'
					value={work.startDate}
					onChange={handleChange}
				/>
				<EditField
					label='Finalización del trabajo'
					inputName='endDate'
					inputType='date'
					value={work.endDate}
					onChange={handleChange}
				/>
				{hasWork ? (
					actionButtons
				) : (
					<button type='submit' onClick={handleSubmit}>
						Añadir
					</button>
				)}
			</form>
		</>
	)
}

import EditField from './EditField'

export default function PersonalInformationForm({
	personalInformation,
	updatePersonalInformation,
}) {
	function handleChange(e) {
		const { name, value } = e.target

		updatePersonalInformation({
			...personalInformation,
			[name]: value,
		})
	}

	return (
		<form>
			<h3>Información personal</h3>
			<EditField
				label='Nombre'
				inputName='name'
				inputType='text'
				onChange={handleChange}
				value={personalInformation.name}
			/>
			<EditField
				label='Dirección'
				inputName='address'
				inputType='text'
				onChange={handleChange}
				value={personalInformation.address}
			/>

			<EditField
				label='Correo electrónico'
				inputName='email'
				inputType='email'
				onChange={handleChange}
				value={personalInformation.email}
			/>
			<EditField
				label='Número de teléfono'
				inputName='phone'
				inputType='tel'
				onChange={handleChange}
				value={personalInformation.phone}
			/>
		</form>
	)
}

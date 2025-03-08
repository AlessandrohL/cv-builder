export default function EditField({
	label,
	inputName,
	inputType,
	value,
	onChange,
}) {
	return (
		<label className='edit-field'>
			<span className='edit-label'>{label}</span>
			<input
				className='edit-input'
				type={inputType}
				name={inputName}
				value={value}
				onChange={onChange}
			/>
		</label>
	)
}

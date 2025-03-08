import { useState } from 'react'
import Section from './components/Section'
import EducationForm from './components/EducationForm'
import WorkForm from './components/WorkForm'
import ResumeEntry from './components/ResumeEntry'
import PersonalInformationForm from './components/PersonalInformationForm'
import ExperienceSection from './components/ExperienceSection'
import './style/App.css'

const initialData = {
	personalInformation: {
		name: '',
		email: '',
		phone: '',
		address: '',
	},
	educationalExperience: [],
	workExperience: [],
}

const educationInitialState = {
	id: '',
	schoolName: '',
	studyTitle: '',
	location: '',
	studyDate: '',
}

const workInitialState = {
	id: '',
	companyName: '',
	position: '',
	mainResponsibilities: '',
	location: '',
	startDate: '',
	endDate: '',
}

function formatWorkDate(startDate, endDate) {
	const startDateMonth = new Date(startDate).toLocaleDateString('default', {
		month: 'short',
	})
	const endDateObj = new Date(endDate)
	const endDateMonth = endDateObj.toLocaleDateString('default', {
		month: 'long',
	})
	const year = endDateObj.getFullYear()

	return `${startDateMonth} - ${endDateMonth} ${year}`
}

function formatEducationDate(endDate) {
	const endDateObj = new Date(endDate)
	const endDateMonth = endDateObj.toLocaleDateString('default', {
		month: 'short',
	})
	const year = endDateObj.getFullYear()

	return `${endDateMonth} ${year}`
}

function App() {
	const [personData, setPersonData] = useState(initialData)
	const [selectedEducation, setSelectedEducation] = useState(null)
	const [selectedWork, setSelectedWork] = useState(null)
	const [shouldShowEducationForm, setShouldShowEducationForm] = useState(false)
	const [shouldShowWorkForm, setShouldShowWorkForm] = useState(false)

	function handleUpdatePersonalInformation(personalInformation) {
		setPersonData({
			...personData,
			personalInformation,
		})
	}

	function handleAddEducation(education) {
		const newEducation = { ...education, id: crypto.randomUUID() }
		setPersonData({
			...personData,
			educationalExperience: [
				...personData.educationalExperience,
				newEducation,
			],
		})
	}

	function handleAddWork(work) {
		const newWork = { ...work, id: crypto.randomUUID() }
		setPersonData({
			...personData,
			workExperience: [...personData.workExperience, newWork],
		})
	}

	function handleEnableEditEducation(education) {
		setSelectedEducation(education)
		setShouldShowEducationForm(true)
	}

	function handleEnableEditWork(work) {
		setSelectedWork(work)
		setShouldShowWorkForm(true)
	}

	function handleUpdateEducation(updatedEducation) {
		const newEducations = personData.educationalExperience.map(e => {
			if (e.id === updatedEducation.id) {
				return updatedEducation
			}
			return e
		})
		setPersonData({
			...personData,
			educationalExperience: newEducations,
		})
		setSelectedEducation(null)
		setShouldShowEducationForm(false)
	}

	function handleUpdateWork(updatedWork) {
		const newWorks = personData.workExperience.map(w => {
			if (w.id === updatedWork.id) {
				return updatedWork
			}
			return w
		})
		setPersonData({
			...personData,
			workExperience: newWorks,
		})
		setSelectedWork(null)
		setShouldShowWorkForm(false)
	}

	function handleDeleteEducation(educationId) {
		setPersonData({
			...personData,
			educationalExperience: personData.educationalExperience.filter(
				e => e.id !== educationId
			),
		})
		setSelectedEducation(null)
		setShouldShowEducationForm(false)
	}

	function handleDeleteWork(workId) {
		setPersonData({
			...personData,
			workExperience: personData.workExperience.filter(w => w.id !== workId),
		})
		setSelectedWork(null)
		setShouldShowWorkForm(false)
	}

	return (
		<div id='cv-container'>
			<article id='cv-preview'>
				<h1 id='cv-title'>{personData.personalInformation.name}</h1>
				<Section title='Información general'>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						{personData.personalInformation.address} ●{' '}
						{personData.personalInformation.email} ●{' '}
						{personData.personalInformation.phone}
					</div>
				</Section>
				<Section title='Información educativa'>
					<div className='entries-container'>
						{personData.educationalExperience.map(e => (
							<ResumeEntry
								key={e.id}
								institution={e.schoolName}
								position={e.studyTitle}
								date={formatEducationDate(e.studyDate)}
								location={e.location}
							/>
						))}
					</div>
				</Section>
				<Section title='Experiencia laboral'>
					<div className='entries-container'>
						{personData.workExperience.map(w => (
							<ResumeEntry
								key={w.id}
								institution={w.companyName}
								position={w.position}
								positionBold={true}
								details={w.mainResponsibilities}
								location={w.location}
								date={formatWorkDate(w.startDate, w.endDate)}
							/>
						))}
					</div>
				</Section>
			</article>
			<article id='cv-editor'>
				<div>
					<PersonalInformationForm
						personalInformation={personData.personalInformation}
						updatePersonalInformation={handleUpdatePersonalInformation}
					/>
				</div>
				<ExperienceSection
					title='Experiencia educativa'
					shouldShowForm={shouldShowEducationForm}
					setShouldShowForm={setShouldShowEducationForm}
					experienceList={personData.educationalExperience}
					experienceLabelProperty='schoolName'
					onEdit={handleEnableEditEducation}
					formComponent={EducationForm}
					formProps={{
						initialState: selectedEducation || educationInitialState,
						addEducation: handleAddEducation,
						updateEducation: handleUpdateEducation,
						deleteEducation: handleDeleteEducation,
					}}
				/>
				<ExperienceSection
					title='Experiencia laboral'
					shouldShowForm={shouldShowWorkForm}
					setShouldShowForm={setShouldShowWorkForm}
					experienceList={personData.workExperience}
					experienceLabelProperty='companyName'
					onEdit={handleEnableEditWork}
					formComponent={WorkForm}
					formProps={{
						initialState: selectedWork || workInitialState,
						addWork: handleAddWork,
						updateWork: handleUpdateWork,
						deleteWork: handleDeleteWork,
					}}
				/>
			</article>
		</div>
	)
}

export default App

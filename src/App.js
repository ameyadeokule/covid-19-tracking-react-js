import { useEffect, useState } from 'react'
import numeral from 'numeral'
import { Card, CardContent } from '@material-ui/core'
import './App.css'
import InfoBox from './components/Infobox'
import Table from './components/Table'
import Graph from './components/Graph'
import { sortData, prettyPrintStat } from './utils'

function App() {
	const [countryData, setCountryData] = useState({
		PositiveCases: '',
		Recovered: '',
		TotalTested: '',
	})

	const [statesData, setStatesData] = useState([])

	useEffect(() => {
		const getCountryData = async () => {
			await fetch('https://disease.sh/v3/covid-19/countries/usa')
				.then((response) => response.json())
				.then((data) => {
					setCountryData({
						PositiveCases: data.active,
						Recovered: data.recovered,
						TotalTested: data.tests,
					})
				})
		}
		getCountryData()
	}, [])

	useEffect(() => {
		const getStateData = async () => {
			await fetch('https://disease.sh/v3/covid-19/states')
				.then((response) => response.json())
				.then((data) => {
					let sortedData = sortData(data)
					setStatesData(sortedData)
				})
		}
		getStateData()
	}, [])

	return (
		<div className='app'>
			<div className='app__left'>
				<div className='app__header'>
					<h1>US COVID-19 Tracker</h1>
				</div>
				<div className='app__stats'>
					<InfoBox
						title='Active Cases'
						isRed
						active='Total Active Cases'
						cases={prettyPrintStat(countryData.PositiveCases)}
						total={numeral(countryData.PositiveCases).format(
							'0.0a',
						)}
					/>
					<InfoBox
						title='Recovered'
						active=' Total Recovered'
						cases={prettyPrintStat(countryData.Recovered)}
						total={numeral(countryData.Recovered).format('0.0a')}
					/>
					<InfoBox
						title='Total Tests Administered'
						active='Total Tested'
						cases={prettyPrintStat(countryData.TotalTested)}
						total={numeral(countryData.TotalTested).format('0.0a')}
					/>
				</div>
				<Graph statesData={statesData} />
			</div>
			<Card className='app__right'>
				<CardContent>
					<div className='app__information'>
						<h3>Live Cases by States</h3>
						<Table states={statesData} />
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default App

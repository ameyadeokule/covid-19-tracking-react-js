import React from 'react'
import ReactApexCharts from 'react-apexcharts'
import './Graph.css'

function Graph({ statesData }) {
	const seriesData = statesData.map((state) => state.positiveCases)

	console.log(seriesData)

	const seriesCategories = statesData.map((state) => state.name)

	const series = [
		{
			name: 'Total Cases',
			data: seriesData,
		},
	]

	const options = {
		colors: ['#28C76F'],
		chart: {
			height: 400,
			zoom: {
				enabled: true,
				type: 'xy',
			},
			toolbar: {
				show: true,
			},
		},

		xaxis: {
			type: 'category',
			categories: seriesCategories,
			labels: {
				style: {
					fontSize: '10px',
				},
			},
			tickAmount: 7,
			tickPlacement: 'between',
		},
		yaxis: {
			tickAmount: 7,
		},
		markers: {
			strokeWidth: 0,
		},
		legend: {
			show: false,
		},
	}

	return (
		<ReactApexCharts
			className='map'
			options={options}
			type='scatter'
			series={series}
			height={400}
		/>
	)
}

export default Graph

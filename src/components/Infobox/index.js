import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './InfoBox.css'

function InfoBox({ title, cases, active, total, isRed, ...props }) {
	return (
		<Card
			className={`infoBox ${active && 'infoBox--selected'} ${
				isRed && 'infoBox--red'
			}`}>
			<CardContent>
				<Typography color='textSecondary' gutterBottom>
					{title}
				</Typography>
				<h2
					className={`infoBox__cases ${
						!isRed && 'infoBox__cases--green'
					}`}>
					{total}
				</h2>
			</CardContent>
		</Card>
	)
}

export default InfoBox

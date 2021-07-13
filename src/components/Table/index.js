import React from 'react'
import './Table.css'
import numeral from 'numeral'

function Table({ states }) {
	return (
		<table className='table'>
			{states.map((state) => (
				<tr>
					<td>{state.state}</td>
					<td>
						<strong>{numeral(state.cases).format('0,0')}</strong>
					</td>
				</tr>
			))}
		</table>
	)
}

export default Table

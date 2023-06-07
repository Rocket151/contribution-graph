export function ContributionTableRow(dayOfWeek) {
  return (
    <tr style={{height: '12px'}}>
      <td className="contribution-graph">{dayOfWeek}</td>
        {mondays.map(item => {
          return (
            <td className="contribution-day" style={{width: '12px'}}></td>
          )
        })}
      </tr>
  )
}
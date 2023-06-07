import { eachDayOfInterval, isMonday, getMonth, lightFormat, parseISO } from "date-fns";
import { Months } from "./const";
import "./styles.css";
import { getFirstDay, getLastDay, getMonths } from "./utils";

export default function App() {
  const currentDate = new Date();
  const lastDate = getLastDay(currentDate);
  const firstDate = getFirstDay(currentDate);
  const contributionDays = eachDayOfInterval({
  start: firstDate,
  end: lastDate
})
  
  const mondays = contributionDays.filter(date => isMonday(date)).map(item => lightFormat(item, 'yyyy-MM-dd'));
  const monthsNumbers = new Set([...mondays.map(date => getMonth(parseISO(date)))]);
  const months = getMonths(monthsNumbers);
  console.log(mondays);
  return (
    <div className="App">
      <div className="contribution-graph">
        <table>
          <thead>
            <tr>
              <td></td>
            {months.map((item, index) => {
              return(
                <td colSpan="4" key={index}>{item}</td>
              )
            })}
            </tr>
          </thead>
          <tbody>
          {dayOfWeek.map(weekDay => {
            <ContributionTableRow dayOfWeek={weekDay} />
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

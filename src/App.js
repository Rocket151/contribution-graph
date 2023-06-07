import { eachDayOfInterval, isMonday, getMonth } from "date-fns";
import { Months } from "./const";
import "./styles.css";
import { getFirstDay, getLastDay } from "./utils";

export default function App() {
  const currentDate = new Date();
  const lastDate = getLastDay(currentDate);
  const firstDate = getFirstDay(currentDate);
  const contributionDays = eachDayOfInterval({
  start: firstDate,
  end: lastDate
})
  
  const mondays = contributionDays.filter(date => isMonday(date));
  const monthsNumbers = new Set([...mondays.map(date => getMonth(date))]);
  const months = mont
  return (
    <div className="App">
      <div class="contribution-graph">
        <table>
          <thead>
            <tr>
              <td></td>
            {months.map(item => {
              return(
                <td>{item}</td>
              )
            })}
            </tr>
          </thead>
          <tbody>
            <tr>
            <td class="contribution-graph">Пн</td>
            {Months.map(item => {
              return(
                <td></td>
              )
            })}
            </tr>
            <tr>
              <td class="contribution-graph"></td>
            {Months.map(item => {
              return(
                <td></td>
              )
            })}
            </tr>
            <tr>
              <td class="contribution-graph">Ср</td>
            {Months.map(item => {
              return(
                <td></td>
              )
            })}
            </tr>
            <tr>
              <td class="contribution-graph"></td>
            {Months.map(item => {
              return(
                <td></td>
              )
            })}
            </tr>
            <tr>
              <td class="contribution-graph">Пт</td>
            {Months.map(item => {
              return(
                <td></td>
              )
            })}
            </tr>
            <tr>
              <td class="contribution-graph"></td>
            {Months.map(item => {
              return(
                <td></td>
              )
            })}
            </tr>
            
            <tr>
              <td class="contribution-graph"></td>
            {Months.map(item => {
              return(
                <td></td>
              )
            })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { Months } from "./const";
import "./styles.css";

export default function App() {
  const lastDate = '';
  const firstDate = '';
  const currentDate = new Date();
  
  
  return (
    <div className="App">
      <div class="contribution-graph">
        <table>
          <thead>
            <tr>
              <td></td>
            {Months.map(item => {
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

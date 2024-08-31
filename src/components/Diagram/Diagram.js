import DiagramBar from "./DiagramBar"
import './Diagram.css'


const Diagram = (props) => {

  // массив из значений value
  const dataSetsValues = props.dataSets.map(dataSet => dataSet.value)

  // находим наибольший amouтt чтобы относительно него строились диаграммы
  // здесь используется spread, тк нужен не массив, а числа разденные запятыми
  const maxMonthCost = Math.max(...dataSetsValues)

  return <div className="diagram">
    {props.dataSets.map((dataSet) => 
      <DiagramBar
        key={dataSet.label}
        value = {dataSet.value}
        maxValue = {maxMonthCost}
        label={dataSet.label}
      />
    )}
  </div> 
}

export default Diagram
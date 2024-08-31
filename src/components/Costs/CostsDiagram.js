import Diagram from "../Diagram/Diagram"

const CostsDiagram = (props) => {

  const diagramDataSets = [
    {label: 'Янв', value: 0},
    {label: 'Фев', value: 0},
    {label: 'Март', value: 0},
    {label: 'Апр', value: 0},
    {label: 'Май', value: 0},
    {label: 'Июнь', value: 0},
    {label: 'Июль', value: 0},
    {label: 'Авг', value: 0},
    {label: 'Сент', value: 0},
    {label: 'Окт', value: 0},
    {label: 'Нояб', value: 0},
    {label: 'Дек', value: 0},
  ]

  // массив заполняет сумму расходов за месяцы
  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth()
    diagramDataSets[costMonth].value += cost.amount
  }

  return <Diagram dataSets={diagramDataSets}/> 

}

export default CostsDiagram
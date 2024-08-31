import CostsFilter from './CostsFilter'
import './Costs.css'
import React, {useState} from 'react'
import CostList from './CostList'
import CostsDiagram from './CostsDiagram'

const Costs = (props) => {

  const [seletedYear, setSelectedYear] = useState('2021')

  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  }

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === seletedYear
  })

  return (
    <div>
      <CostsFilter year={seletedYear} onChangeYear={yearChangeHandler}/>

      <CostsDiagram costs={filteredCosts}/>

      <CostList costs={filteredCosts}/>
    </div>
  )
}

export default Costs
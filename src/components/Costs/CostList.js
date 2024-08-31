import CostItem from "./CostItem"
import './CostList.css'

const CostList = (props) => {

  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">В этом году расходов нет</h2>
  }

  return <ul className="cost-list">
    <div className='Costs'>
      {props.costs.map((cost) => 
        <CostItem 
          key={cost.id}
          date={cost.date} 
          description={cost.description} 
          amount={cost.amount}
        />)} 
    </div>
  </ul>

}

export default CostList
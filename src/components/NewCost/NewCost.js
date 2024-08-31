import React, {useState} from 'react'

import './NewCost.css'
import CostForm from './CostForm'

const NewCost = (props) => {

  const [isFormVisible, setIsFormVisible] = useState(false)

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    }

    props.onAddCost(costData)
    setIsFormVisible(false) // убираем форму когда данные отправлны
  }

  const inputCostDataHandler = () => {
    setIsFormVisible(true)
  }

  const cancelCostHandler = () => {
    setIsFormVisible(false)
  }

  return (
    <div className="new-cost">
      {!isFormVisible && <button className='new-cost__btn' onClick={inputCostDataHandler}>Добавить новый расход</button>}
      {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler}/>}
    </div>
  )
}

export default NewCost
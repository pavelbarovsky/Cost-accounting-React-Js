import React, {useState} from 'react'
import './CostForm.css'

const CostForm = (props) => {

  const [inputDescription, setInputDescription] = useState('')
  const [inputAmount, setInputAmount] = useState('')
  const [inputDate, setInputDate] = useState('')

  const descriptionChangeHandler = (event) => {
    setInputDescription(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const costData = {
      description: inputDescription,
      amount: inputAmount,
      date: new Date(inputDate)
    }

    props.onSaveCostData(costData)

    setInputAmount('')
    setInputDate('')
    setInputDescription('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type='text' onChange={descriptionChangeHandler} value={inputDescription}/>
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={inputAmount}/>
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input type='date' min='2021-01-01' step='2024-12-31' onChange={dateChangeHandler} value={inputDate}/>
        </div>
        <div className="new-cost__actions">
          <button className='new-cost__btn' type='submit'>Добавить</button>
          <button className='new-cost__btn' type='button' onClick={props.onCancel}>Отмена</button>
        </div>
      </div>
    </form>
  )
}

export default CostForm
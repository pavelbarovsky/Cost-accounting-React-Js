import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2024, 2, 12),
    description: 'Macbook air',
    amount: 799.99,
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    description: 'Iphone 14 pro',
    amount: 599.99,
  },
  {
    id: 'c3',
    date: new Date(2022, 4, 1),
    description: 'Джинсы Lee',
    amount: 39.99,
  },
]

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs} />
    </>
  )
}

export default App;

import './CostItem.css'
import CostDate from './CostDate';
import Card from '../UI/Card';

const CostItem = (props) => {

  return (
    <li>
      <Card className='cost-item'>

        <CostDate date={props.date}/>
        <div className='cost-item__desc'>
          <h2>{props.description}</h2>
          <Card className='cost-item__price'>${props.amount}</Card>
        </div>

      </Card>
    </li>
  );
}

export default CostItem
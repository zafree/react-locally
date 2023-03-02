import { Link } from 'react-router-dom';
import { IWork } from '../api/interface/IWork';

function WorkItem(props: IWork) {
  return (
    <li>
      <Link to={props.url}>
        {props.title} - {props.subtitle} - {props.tags?.join(', ')}
      </Link>
    </li>
  );
}

export default WorkItem;

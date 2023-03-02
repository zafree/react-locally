import { Link, Outlet } from 'react-router-dom';
import { getWorkList } from '../api';
import WorkItem from '../components/WorkItem';

function Work() {
  return (
    <>
      <h1>Work List</h1>
      <div>
        {getWorkList().map((data) => {
          return (
            <ul key={data.id}>
              <WorkItem {
                ...data
              }/>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default Work;

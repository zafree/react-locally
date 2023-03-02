import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getWorkByUrl } from '../../api';
import { IWork } from '../../api/interface/IWork';
import NotFound from '../NotFound';


function Hero() {
  const { wid } = useParams();
  const [work, setWork] = useState<IWork | undefined>(undefined);
  useEffect(() => {
    if(wid) {
      let _work = getWorkByUrl(wid)  
      if(_work) {
        setWork(_work)
      }
    }
  }, [wid])
  
  return (
    <>
      {work ? (
        <>
          <h1>title: {work.title}</h1>
          <p>id: {work.id}</p>
          <p>image: {work.image}</p>
          <p>tags: {work.tags?.join(', ')}</p>
        </>
      ):(
        <NotFound />
      )}
    </>
  );
}

export default Hero;

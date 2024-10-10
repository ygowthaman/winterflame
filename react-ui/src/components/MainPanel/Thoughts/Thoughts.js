import { useEffect, useState } from 'react';
import { getAllThoughts } from '../../../services/thoughts.service'
import RwCard from '../../common/RwCard/RwCard';

function Thoughts() {

  const [ramblings, setRamblings] = useState([])

  useEffect(() => {
    getAllThoughts().then((data) => {
      setRamblings(data);
    });
  }, []);

  return (
    <div>
      {
        ramblings.map((r) => {
          return <RwCard message={r} />
        })
      }
    </div>
  )
}

export default Thoughts;
import { useState, useEffect } from 'react';
import { dataBase } from '../../../service/bbdd';
import { Target } from '../../Targets/Target';

export const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchData = await dataBase();
        setData(searchData);
      } catch (error) {
        console.error('Error fetching data-:', error);
      }
    };
    fetchData();
  }, []);
  console.log('datos vista',data);
  return (
    <div className='targets'>
        {data.map(users => (
            <Target key={users.id} title={users.userName} info={users.password} userName={users.userName}/>
        ))}
    </div>
  );
}


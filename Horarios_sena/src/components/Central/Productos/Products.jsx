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
        console.error('Error fetching data:');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='targets'>
        {data.map(product => (
            <Target key={product.id} title={product.price} info={product.quantity}/>
        ))}
    </div>
  );
}


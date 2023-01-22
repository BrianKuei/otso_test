import { useState } from 'react'
import useInterval from '../hooks/useInterval';
import usePrevious from '../hooks/usePrevious';

const DATA = { price: 0, order: 0 };

function Q2() {
  const [data, setData] = useState(DATA);
  const previousData = usePrevious(data);

  useInterval(() => {
    setData({
      price: Math.floor(Math.random() * 201) - 100,
      order: Math.floor(Math.random() * 201) - 100,
    })
  }, 1000)

  const changeTextColor = (key: keyof typeof DATA) => {
    const preData = previousData?.[key] ?? 0;
    const curData = data[key];
    return curData > preData ? 'animate-text-green' : 'animate-text-red';
  }

  return (
    <div className="h-full flex flex-col justify-start items-center">
      <h1 className="text-5xl">第二題</h1>
      <div className='w-[200px] flex flex-row justify-center space-x-5 my-5 text-black'>
        <p className={changeTextColor('price')}>price: {data.price}</p>
        <p className={changeTextColor('order')}>order: {data.order}</p>
      </div>
    </div>
  )
}

export default Q2

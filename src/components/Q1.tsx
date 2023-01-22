import { ChangeEvent, useState } from 'react'

const Card = ({ index }: { index: number }) => {
  let color = 'bg-pink-100';
  if (!((index + 1) % 3)) {
    color = 'bg-red-500'
  }
  if (!((index + 1) % 5)) {
    color = 'bg-black'
  }
  return (
    <div className={`w-[140px] h-[200px] rounded-lg ${color}`}></div>
  )
}

function Q1() {
  const [count, setCount] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const pattern = /^\d+$/;
    if (pattern.test(e.target.value)) {
      setCount(e.target.value);
    } else {
      setCount('');
    }
  };

  return (
    <div className="h-full flex flex-col justify-start items-center">
      <h1 className="text-5xl">第一題</h1>
      <input className="my-5 bg-gray-100" onChange={onChange} type="number" placeholder="輸入正整數" />
      <div className="w-[300px] rounded-2xl grid grid-cols-2 gap-[10px] justify-items-center">
        {
          Array(+count ?? 0).fill(0).map((_, i) => <Card key={i} index={i} />)
        }
      </div>
    </div>
  )
}

export default Q1

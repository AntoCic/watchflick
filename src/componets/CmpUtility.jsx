import { useState } from 'react'
import { increment, decrement } from '../redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { btn } from '../GeneralCmpTailwind';
export default function CmpUtility({ children, addTask }) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)
  // const [count, setCount] = useState(0);

  const [inputText, setinputText] = useState('')
  const handleAddTask = () => {
    const textToAdd = inputText
    setinputText('');
    return addTask(textToAdd)
  }

  return (
    <div className='my-4'>
      <button className={btn.outGreen} onClick={() => dispatch(increment())}>
        {children} {count}
      </button>
      <button className={btn.outRed + "ms-2"} onClick={() => dispatch(decrement())}>Post Precedente
      </button>

      <hr className='my-3' />
      <p>ADD TASK: <input value={inputText} className='px-2 text-black' onChange={(e) => setinputText(e.target.value)} type="text" placeholder='...' /> <button className={btn.white + "ms-2"} onClick={handleAddTask} > + </button></p>
    </div>

  )
}

import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
	const [yes, setYes] = useState(false);
	const [count, setCount] = useState(0);
	const cancelList = [
		'No',
		'Are you sure?',
		'Are you sure?',
		'Really sure?',
		'Think again!',
		'Last chance!',
		'Surely not?',
		'You might regret this!',
		'Give it another thought!',
		'Are you really certain?',
		'This could be a mistake!',
		'Have a heart!',
		"Don't be so cold!",
		'Change of heart?',
		"Wouldn't you reconsider?",
		'Is that your final answer?',
		"You're breaking my heart :(",
	];

	return (
		<div className='flex flex-col items-center justify-center w-full gap-4 h-svh'>
			{yes ? (
				<>
          <div className='w-1/6 overflow-hidden'>
						<img
							src='./public/bear-kiss-bear-kisses.gif'
							className='object-cover '
						/>

					</div>
					<p className='text-3xl font-semibold'>Ok yay!!!</p>

        </>
			) : (
				<>
					<div className='w-1/6 overflow-hidden'>
						<img
							src='./public/hearts-flowers.gif'
							className='object-cover '
						/>
					</div>
					<p className='text-3xl'>Will you be my Valentine?</p>
					<div className='flex items-center justify-center gap-4 text-white'>
						<button
							style={{
								fontWeight: 400 + count * 100,
								fontSize: 16 * (count + 1),
							}}
              onClick={()=>setYes(true)}
							className='p-2 transition-all duration-75 bg-green-600 rounded-md min-w-16 hover:bg-green-700'
						>
							Yes
						</button>
						<button
							className='p-2 px-4 transition-all bg-red-600 rounded-md min-w-16 hover:bg-red-700'
							onClick={() => setCount((count) => count + 1)}
						>
							{count >= cancelList.length
								? cancelList[cancelList.length - 1]
								: cancelList[count]}
						</button>
					</div>
				</>
			)}
		</div>
	);
}

export default App;

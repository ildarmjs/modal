import { useState } from 'react'
import './App.scss'
import { Button } from './components/Button'
import { Modal } from './components/Modal'

function App() {
	const [open, setOpen] = useState(false)

	return (
		<div className='App'>
			<Button setOpen={setOpen}/>
			<Modal open={open} setOpen={setOpen}>
				<img src='https://i.gifer.com/7e2Z.gif' />
				<h3>Это модальное окно</h3>
			</Modal>
		</div>
	)
}

export default App

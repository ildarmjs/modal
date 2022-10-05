export const Button = ({setOpen}) => {
	return (
		<button onClick={() => setOpen(true)} className='open-modal-btn'>
			✨ Открыть окно
		</button>
	)
}

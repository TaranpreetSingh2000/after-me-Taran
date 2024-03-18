import { useEffect, useState } from 'react'

function Result() {
	const [token, setToken] = useState('')

	useEffect(() => {
		const storedToken = localStorage.getItem('token')
		setToken(storedToken)
	}, [])

	return <div>Token: {token}</div>
}

export default Result

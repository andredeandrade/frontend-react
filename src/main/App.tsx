import React from 'react'
import '../styles/app.scss'
import Header from '../components/template/Header'
import List from '../components/list/List.jsx'

const App: React.FC = () => {
	return (
		<div>
			<Header />
            <List />
		</div>
	)
}

export default App

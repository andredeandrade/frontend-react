import React from 'react'
import './header.scss'
import Logo from '../../assets/logo.svg'

const Header: React.FC = () => {
	return (
		<header className="header">
			<img alt='Logo Moovin' src={Logo} />
		</header>
	)
}

export default Header
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';



const NavBtn = () => {
	const [ , , , , , , , , isNavOpen, setIsNavOpen ] = useContext(GlobalContext);

	const handleNavBtn = () => {
		setIsNavOpen(!isNavOpen);
	}

	return (
		<button className="setting-btn" onClick={handleNavBtn}>
			<i className={isNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
		</button>
	)
}

export default NavBtn
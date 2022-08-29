import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDataLayerValues } from './DataLayer'

function Header() {
    const [{ user }, dispatch] = useDataLayerValues()
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon></SearchIcon>
                <input type="text" placeholder="Search for Artists,song, or album" />
            </div>
            <div className="header__right">
                <AccountCircleIcon src={user?.images[0]?.url} alt={user?.display_name}></AccountCircleIcon>
                <h4>{user?.display_name}</h4>
            </div>

        </div>
    )
}

export default Header

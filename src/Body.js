import React from 'react'
import './Body.css'
import Header from './Header.js'
import SongRow from './SongRow'
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useDataLayerValues } from './DataLayer'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValues()
    return (
        <div className="body">
            <Header spotify={spotify}></Header>

            <div className="body__info">
                {console.log(discover_weekly?.images[0].url)}
                <img className="img" src={discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekday</h2>
                    {console.log(discover_weekly?.description)}
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"></PlayCircleFilledIcon>
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
                {discover_weekly?.tracks.items.map(item =>
                    <SongRow track={item.track}></SongRow>
                    // console.log(item)
                )}
            </div>
        </div>

    )
}

export default Body

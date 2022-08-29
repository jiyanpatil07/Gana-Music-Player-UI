import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValues } from './DataLayer'
function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValues()
    return (
        <div className="sidebar">

            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" srcset="" />
            <SidebarOption Icon={HomeIcon} title="HOME" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="your Library" />
            <br />
            <h2 className="sidebar__title">PLAYLIST</h2>
            <hr />
            {/* <h1>jiyan</h1> */}
            {/* {playlists?.items?.map(playlist => {
                <SidebarOption title={playlist.name} >
                </SidebarOption>
                { console.log(playlist.name) }

            })} */}
            { playlists?.items?.map((playlist) => (
                    //  console.log(playlist.name) 
                    <SidebarOption title={playlist.name} />
            ))  }


        </div>
    )
}

export default Sidebar

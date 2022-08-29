import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core'
// import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlayIcon'
import VolumeDown from '@material-ui/icons/VolumeDown'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumlogo" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Perfect_song_logo.png" alt="" srcset="" />
                <div className="footer_songinfo">
                    <h4>yeh</h4>
                    <p>Ushers</p>
                </div>
            </div>
            <div className="footer__center">
                {/* <p>palyer conterils</p> */}
                <ShuffleIcon className="footer__green"></ShuffleIcon>
                <SkipPreviousIcon className="footer__icon"></SkipPreviousIcon>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"></PlayCircleOutlineIcon>
                <SkipNextIcon className="footer__icon"></SkipNextIcon>
                <RepeatIcon className="footer__green"></RepeatIcon>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item >
                        {/* <PlaylistPlayIcon></PlaylistPlayIcon> */}
                    </Grid>
                    <Grid item >
                        <VolumeDown></VolumeDown>
                    </Grid>

                    <Grid item xs>
                        <Slider ></Slider>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import guesswhat from './P1070208.png'

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}



function WebPlayback(props) {

    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(track);
    const [guessing, setGuess] = useState(true);
    const [token, setToken] = useState("");
    const [track_data, setTdata] = useState([])

    const getTrackData = async () => {
        try {
            const {data} = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
                headers: {
                    Authorization: `Bearer ${props.token}`
                }
            })
            setTdata(data.item)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {

            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(props.token); },
                volume: 0.2
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', ( state => {

                if (!state) {
                    return;
                }

                setTrack(state.track_window.current_track);
                setPaused(state.paused);
                getTrackData();

                player.getCurrentState().then( state => { 
                    (!state)? setActive(false) : setActive(true) 
                });

            }));

            player.connect();

        };

    }, []);

    if (!is_active) { 
        return (
            <>
                <div className="container">
                    <div className="main-wrapper">
                        <b> Instance not active. Transfer your playback using your Spotify app </b>
                    </div>
                </div>
            </>)
    } else {
        if (guessing) {
            return (
                <>
                    <div className="container">
                        <div className="main-wrapper">

                        <img src={guesswhat} className="now-playing__cover" alt="" />

                            <div className="now-playing__side">    
                                <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
                                    { is_paused ? "PLAY" : "PAUSE" }
                                </button>

                                <button className="btn-spotify" onClick={() => { setGuess(false) }} >
                                    { "Auflösen" }
                                </button>

                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="container">
                        <div className="main-wrapper">
    
                            <img src={current_track.album.images[0].url} className="now-playing__cover" alt="" />
    
                            <div className="now-playing__side">
                                <div className="now-playing__name">{current_track.name}</div>
                                <div className="now-playing__artist">{current_track.artists[0].name}</div>
                                <div className="now-playing__release">{track_data.album.release_date}</div>
    
                                <button className="btn-spotify" onClick={() => { 
                                    player.nextTrack();
                                    setGuess(true) }} >
                                { "Next" }
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            );
        }  
    }
}



export default WebPlayback

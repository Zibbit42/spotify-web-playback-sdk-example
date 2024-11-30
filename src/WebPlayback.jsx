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

const trackReleaseData = [
    {
        id: '1YQB746FvYKsFT10NTEcZ9', // dont let me be missunderstood
        date: '1977',
    },
    {
        id: '7CD8O3gZ5NB7jkfO5cv0WD', // simpsons theme
        date: '1989',
    },
    {
        id: '2if4tQXWPVJcLWaCQx5sE6', // grund zum feiern
        date: '1995',
    },
    {
        id: '4RmSuRMlr17amYP0bKlxaf', // champions league
        date: '1992',
    },
    {
        id: '3NLOg4clntQO2UiN8pvhOW', // diamonds are forever
        date: '1971',
    },
    {
        id: '4IeStM4M9uQ1X0s4LdSLuC', // close to you
        date: '1970',
    },
    {
        id: '1xgqGXZW1udHCjuwjeRDVO', // one night in bangkok
        date: '1984',
    },
    {
        id: '4cbJwuAEbaodP4InQDfAmW', // let it go
        date: '2013',
    },
    {
        id: '3UrxiLFDQwYaPLos6MT1VT', // oma so lieb
        date: '1968',
    },
    {
        id: '2f8Hc0w7BpDtzwoa6BHKec', // Griechischer Wein
        date: '1974',
    },
    {
        id: '5mjdr0KFYBiuZQynqSgqTJ', // Schrei nach liebe
        date: '1993',
    },
    {
        id: '7JM1dFLOa1kI5MqGnDufiY', // Ohne Dich (schlaf ich heut nacht nicht ein)
        date: '1985',
    },
    {
        id: '3JuOl6OzR2g4m8NcNIO9GW', // Jedes kind braucht einen Engel
        date: '1989',
    },
    {
        id: '2jWCLuhLinumCeHiCGONu3', // Brottosozialprodukt
        date: '1982',
    },
    {
        id: '1PVHbQjnur34E2zZUUPQfc', // Ab in den Süden
        date: '2003',
    },
    {
        id: '79hJaqmVdohltPBNN6BULM', // Stayin Alive
        date: '1977',
    },
    {
        id: '6AbaUu4XtHu7pGkPE94Tat', // Live an Let Die
        date: '1973',
    },
    {
        id: '7cv28LXcjAC3GsXbUvXKbX', // I Will survive
        date: '1978',
    },
    {
        id: '1QbOvACeYanja5pbnJbAmk', // country Roads
        date: '1971',
    },
    {
        id: '74JdR9aXE6I74oS1BVRsvb', // O-o-h Child
        date: '1970',
    },
    {
        id: '5MG28qhL5iZ2edLHZsbUEN', // Let the sunshine in
        date: '1968',
    },
    {
        id: '1qn59AQpFXldsaFpxCXyNW', // der Frühling
        date: '1725',
    },
    {
        id: '2kgqupahrJpYB4r1poTXEY', // axel f
        date: '1984',
    },
    {
        id: '3oQomOPRNQ5NVFUmLJHbAV', // over the rainbow
        date: '1990',
    },
    {
        id: '0og2U8tsBAR7NJysRR6uBU', // Mediterranean Sundance
        date: '1977',
    },
    {
        id: '5rmcFRG9Lp6KK92CMQWxfD', // Herbie Hancock
        date: '1962',
    },
    {
        id: '412zahdI6CyYeTuVz8ZRSQ', // In-A-Gadda-Da-Vida
        date: '1968',
    },
    {
        id: '0JlOwlHslZuwK97jySyZuc', // Knockin on Heavens door
        date: '1973',
    },
    {
        id: '4sf4Lq52b2iCoAgpge7a9g', // Ca Plane Pour moi
        date: '1977',
    },
    {
        id: '1ntATsEazvDV1jw3iiZlID', // Nessun doma
        date: '1926',
    },
    {
        id: '3m0y8qLoznUYi73SUBP8GI', // Ghostbusters
        date: '1984',
    },
    {
        id: '1rWwPGQnYP2VrdUViImQMf', // Girls, Girls, Girls
        date: '1975',
    },
    {
        id: '3oQhgsBwOGaxr5dWKAim7Y', // Vamos a la Playa
        date: '1983',
    },
    {
        id: '15MJ5NThPjj6xhPcts8MiY', // take my breath away
        date: '1986',
    },
    {
        id: '2olVm1lHicpveMAo4AUDRB', // The Power Of Love
        date: '1985',
    },
    {
        id: '0Qv7xi6uPSqH2k82tOkGSt', // Mad World
        date: '1982',
    },
    {
        id: '19igF3hs4oSVmHanvOQSYa', // Sick and Tired
        date: '2004',
    },
    {
        id: '7wuJGgpTNzbUyn26IOY6rj', // Total Eclipse of the Heart
        date: '1983',
    },
    {
        id: '06qMRF18gwbOYYbnP2du6i', // Last Christmas
        date: '1984',
    },
    {
        id: '5GBcRV3jO57oBp2mFVaeqM', // Dancing with Tears in My Eyes
        date: '1984',
    },
    {
        id: '1FV9wLQtfOhpaVzlcHtclf', // Rollo Der Wikinger
        date: '1977',
    },
    {
        id: '3q309qYANeXY2OvmoqqGPm', // He's a Pirate
        date: '2003',
    },
    {
        id: '18UrsbENCXM68POe3VJSBY', // Adeste Fideles
        date: '1740',
    },
    {
        id: '6wLr2oR8eqUG5Beleh2Crm', // You Can Call Me Al
        date: '1986',
    },
    {
        id: '4mn2kNTqiGLwaUR8JdhJ1l', // House of the Rising Sun
        date: '1964',
    },
    {
        id: '7aJZxI6TVdIvQSuWxQ4rqp', // I Can See Clearly Now
        date: '1993',
    },
    {
        id: '1Hv1VTm8zeOeybub15mA2R', // Smooth Operator
        date: '1984',
    },
    {
        id: '6Jv0OJUyTOZhkuVEYfDOBK', // Wickie - Main Title
        date: '1974',
    },
    {
        id: '3jBLKVqnOcxeXaqdGZ0p45', // Löwenzahn 
        date: '1981',
    },
    {
        id: '6PStiuDczMVzzZRrNZ3r1F', // Hey Pippi Langstrumpf
        date: '1969',
    },
    {
        id: '3PQfLpp4ctkcwwVg1VnMlH', // Elmo's Song
        date: '1989',
    },
    {
        id: '7jbWJ8dBSFElWnoGn9XYHI', // Die Biene Maja
        date: '1976',
    },
    {
        id: '0oiKudyG8pbyW5OJ9MsHbs', // Rubber Duckie
        date: '1970',
    },
    {
        id: '3LE0oKAZ8PCHIHjrsZ5IRg', // Ich wünsch' mir 'ne kleine Miezekatze
        date: '1972',
    },
    {
        id: '4UYHCUinnMi1O5dbjwrgvu', // Tatort Titelmusik
        date: '1970',
    },
    {
        id: '3Ss9QcRpRyQtuSNUi1rUwm', // Wer hat an der Uhr gedreht?
        date: '1973',
    },
    {
        id: '1ZVsjbRduUL6kYXHXzCNRc', // Tagesschau
        date: '1959',
    },
    {
        id: '4OaSjuB7d1VJAG8tCPCRT0', // Barneys theme
        date: '1992',
    },
    {
        id: '36Q5BbAlrT5TgVDbnHEEdY', // Winnetou
        date: '1980',
    },
    {
        id: '5qHYXcVvc9xsFB2uH7GpMN', // Kokomo
        date: '1988',
    },
    {
        id: '2U2ByqoO82fnayaPzO4x2d', // Lady in Black
        date: '1971',
    },
    {
        id: '3UJh8SWXEP92dH7pDU6pce', // far far away
        date: '1974',
    },
    {
        id: '3Opx1MTq68q1qsidkMNGMT', // universal soldier
        date: '1963',
    },
    {
        id: '7sh5oYwMO2E4xFHAbZZUfL', // küsse nie nach Mitternacht
        date: '1965',
    },
    {
        id: '63P677HpdthKTQpYmPzS8c', // Lady Carneval
        date: '1968',
    },
    {
        id: '6LIowBJTfjs2rxnkAGdBL4', // Ganz in Weiss
        date: '1966',
    },
    {
        id: '7zcz9EWAqud80gh029lpud', // Junge komm bald wieder
        date: '1962',
    },
    {
        id: '1x8SNZOPOU4pe278VvkAAL', // Seeman deine Heimat ist das Meer
        date: '1960',
    },
    {
        id: '1zEvQWm3uUC0URnH2rsd99', // Sugar Baby
        date: '1958',
    },
    {
        id: '5YqoQFeMjvFsdeLdp3F3JV', // Er hat ein knallrotes Gummiboot
        date: '1970',
    },
    {
        id: '1YC7tMElvLCar9w2z1Zm57', // Azzurro
        date: '1968',
    },
    {
        id: '1C0tAkrpNoV86SO7M1KsDZ', // Da sprach der alte Häuptling
        date: '1960',
    },
    {
        id: '4GJ1S89mVQSJD0I0G1EdEh', // Cindy, oh Cindy
        date: '1957',
    },
    {
        id: '2NLOe1cJU8sJvc6ys67WHO', // Wini-Wini
        date: '1963',
    },
    {
        id: '0Q7FgdMZqsxgTl10w6uCi8', // Ganz Paris Traumt Von Der Liebe
        date: '1954',
    },
    {
        id: '3GfXZwYLOZUdUYmgqIbYpk', // Babysitter-Booogie
        date: '1961',
    },
    {
        id: '2A9m0HIL6EBEboAPnbsVIh', // Hello Mary Lou
        date: '1961',
    },
    {
        id: '18DfMhEx4ddoreHrvZDF6Q', // The Power of Love
        date: '1984',
    },
    {
        id: '4TFOBUQ9Vfm1nCfG07eedq', // Tanze mit mir in den Morgen
        date: '1961',
    },
    {
        id: '68O3UXKlooWgiKjRDSm8Dx', // Theo (Der Bananenbrot-Song)
        date: '1983',
    },
    {
        id: '33bPxarV6mCbM1V2IPNx37', // Pigalle (Die große Mausefalle)
        date: '1961',
    },
    {
        id: '4jllSZTfLEJDqvwYv6Crrk', // Ein Schiff wird kommen
        date: '1960',
    },
    {
        id: '4rpNHWvvmNuLZLWKFIXkrx', // Das Alte Haus Von Rocky Docky
        date: '1981',
    },
    {
        id: '3c12xbWbu6Xv3oeoV2upg6', // Ich liebe das Leben
        date: '1975',
    },
    {
        id: '37bnu4l20IzHZ6zkGjo0cp', // Michaela
        date: '1972',
    },
    {
        id: '19nAFg6Mb6jXN3yxPC2sSk', // Superman
        date: '2000',
    },
    {
        id: '6zlJXSjlMD0usP9nnPVigY', // Baby Come Back
        date: '1967',
    },
    {
        id: '6rcU9U4zHKotWKheS1L84S', // Come On And Sing
        date: '1966',
    },
    {
        id: '0fonScmHUzC0MglSLn9saA', // Da Doo Ron Ron (When He Walked Me Home)
        date: '1963',
    },
    {
        id: '0h2NqULt32GOvyAnpf8wiE', // Wadde Hadde Dudde Da
        date: '2000',
    },
    {
        id: '073TNwee11VO9SYem0hjQH', // Die Sendung mit der Maus
        date: '1971',
    },
    {
        id: '0f3BJBje0cNZqj7S2JU0Zu', // Sesamstraße
        date: '1973',
    },
    {
        id: '2gP9SK5EBoX9oBmJpn8ZNP', // Don't Ha Ha
        date: '1965',
    },
    {
        id: '6lQZLaTrHZBIzTFOUkBpg2', // Schöne Maid
        date: '1971',
    },
    {
        id: '030dULvYNT5n8vYpIak51w', // Dein ist mein ganzes Herz
        date: '1985',
    },
    {
        id: '3laRvOk6S4Z2XXvmPUG7Jb', // Aufsteh'n ist schön
        date: '1978',
    },
    {
        id: '1VvZCnaVnrJyJeNPCz0KDT', // Eisgekühlter Bommerlunder
        date: '1983',
    },
    {
        id: '3PeUytVHSB0plBO03sT7NA', // Früh-Stück
        date: '1979',
    },
    {
        id: '6lazLV13sV8VNGJTjL4Zeu', // Black Is Black
        date: '1966',
    },
    {
        id: '4MhNUVL2T1tPinrRXJ4gGB', // Lazy Sunday
        date: '1968',
    },
    {
        id: '77aMI11X80hzo77ZSNMCTC', // Der Theodor im Fussballtor
        date: '1950',
    },
    {
        id: '1FBmwRfrWy2fl5ulzfvvGd', // Freunde fürs Leben
        date: '1960',
    },
    {
        id: '6UOtmNlmviHsdDl02KNpXY', // Hämmerchenpolka
        date: '1961',
    },
    {
        id: '3aPWXnRjmqVTrH9zgf6lJo', // Warum strahlen heut' Nacht die Sterne so hell
        date: '1957',
    },
    {
        id: '4Gs4xdlHoOTNszWdJsIU0Z', // Es gibt kein Bier auf Hawaii
        date: '1963',
    },
    {
        id: '4jT1CzYQzrud6e9jE96sax', // Geisterreiter (Riders in the sky)
        date: '1961',
    },
    {
        id: '5O4NFbDqJ8SOfbjnIhdPDt', // The Safety Dance
        date: '1982',
    },
    {
        id: '24buzsvVtqRLUecYFRyJje', // Tom Dooley
        date: '1958',
    },
    {
        id: '2v3TG35plidR486Cltpgxs', // Zwei kleine Italiener
        date: '1962',
    },
    {
        id: '7eRrL4SVkEFloD5iQ0ANqy', // Fiesta Mexicana
        date: '1972',
    },
    {
        id: '63rva3TBizr6x1Yp5uwKfD', // California Dreamin'
        date: '1965',
    },
    {
        id: '6Nabz5Gsy80XL0MJoOmgF8', // Beds Are Burning
        date: '1987',
    },
    {
        id: '0zCNuyeXYbmxl6xlvkjvKi', // Don't Go
        date: '1982',
    },
    {
        id: '4uOKFydzAejjSFqYbv1XPt', // Red Red Wine
        date: '1983',
    },
    {
        id: '6FtR2KdqLe7kKU6a9nG5sH', // Big in Japan
        date: '1984',
    },
    {
        id: '3WMbD1OyfKuwWDWMNbPQ4g', // Daddy Cool
        date: '1976',
    },
    {
        id: '6Xq7hvkCZWiwVbE5yLeGuI', // Motorbiene
        date: '1962',
    },
    {
        id: '4HD1oXcN0pU4cxuA7nEnbf', // Der letzte Cowboy
        date: '1979',
    },
    {
        id: '3mNfU0psAm7h3s6Dn6i7SD', // Walkin' Back to Happiness
        date: '1961',
    },
    {
        id: '6JfZCELFGS3SFGKK3LyX6Y', // Endloser Fluß
        date: '1962',
    },
    {
        id: '5t77UGzgSBRDDnaxJvE9R3', // Moskau
        date: '1979',
    },
    {
        id: '3dkIE8P7hvl3tHl9KSb6dA', // Non, je ne regrette rien
        date: '1960',
    },
    {
        id: '14Xi85ZDisXLl9jko8qfF0', // Ententanz
        date: '1957',
    },
    {
        id: '5N6M8yDiMV32T6Rkzh8EbW', // Boom, Boom, Boom, Boom!!
        date: '1998',
    },
    {
        id: '4l2ljvyXOCVNbD5ff7NpM7', // I Like To Move It
        date: '1993',
    },
    {
        id: '5YJtMNWKe55yr49cyJgxva', // Everytime We Touch
        date: '2005',
    },
    {
        id: '3G7tRC24Uh09Hmp1KZ7LQ2', // I'm a Believer
        date: '1966',
    },
    {
        id: '4XSilY4y6omLVcCJ35RAzX', // Die Eine
        date: '1998',
    },
    {
        id: '4DEcdqqKokU7UAE4wCGQEy', // Always Look On The Bright Side Of Life
        date: '1979',
    },
    {
        id: '2zygsl5Awjq2CuJc1L55x0', // Beinhart
        date: '1990',
    },
    {
        id: '2RsAajgo0g7bMCHxwH3Sk0', // Come As You Are
        date: '1992',
    },
    {
        id: '7lMIJ4EFWRVoAIPDpeGyM3', // Blue (Da Ba Dee)
        date: '1999',
    },
    {
        id: '07ABETRdek3ACMpRPvQuaT', // Always on My Mind
        date: '1987',
    },
    {
        id: '0DiWol3AO6WpXZgp0goxAV', // One More Time
        date: '2000',
    },
    {
        id: '5x9ElMtD3xy0verHZWOGqr', // Houdini
        date: '2023',
    },
    {
        id: '3XVBdLihbNbxUwZosxcGuJ', // If I Ain't Got You
        date: '2004',
    },
    {
        id: '2LZdFnXIXuky0S0Jhdl4Qz', // I Got You (I Feel Good)
        date: '1965',
    },
    {
        id: '3lAun9V0YdTlCSIEXPvfsY', // La Vie en rose
        date: '1947',
    },
    {
        id: '1MQrMQwfqjgOjXEUaN9AMd', // I'm Too Sexy
        date: '1991',
    },
    {
        id: '6hTBP6QLwJdxbKyLlLXrGo', // Let's Talk About Sex
        date: '1991',
    },
    {
        id: '1zzxoZVylsna2BQB65Ppcb', // X Gon' Give It To Ya
        date: '2002',
    },
    {
        id: '6OuRbvP4PgbuzBIapVzmFJ', // Sailing
        date: '1972',
    },
    {
        id: '4AlpU6K9ZvPlaNSGQxMQUp', // Back for Good
        date: '1995',
    },
    {
        id: '1PSEaprweeRkXf4rnEHfQa', // Just A Girl
        date: '1995',
    },
    {
        id: '4XyHMci7t8TbkBq2Zxj9AI', // Cotton Eye Joe
        date: '1994',
    },
    {
        id: '4S1vA0mTayFbnHrwdkzPWT', // Probier’s mal mit Gemütlichkeit
        date: '1967',
    },
    {
        id: '1ensdJgoKJdh3U5uLxFr8t', // Brain Stew
        date: '1995',
    },
    {
        id: '6FhUr64e2B7a1l592uuHwQ', // We No Speak Americano
        date: '2010',
    },
    {
        id: '0MteK167vtyb6hoJNC3Uz3', // A Girl Like You
        date: '1994',
    },
    {
        id: '70LcF31zb1H0PyJoS1Sx1r', // Creep
        date: '1992',
    },
    {
        id: '0VUInNkifJXweCevCP8BDm', // Meister Eder Und Sein Pumuckl
        date: '1962',
    },
    {
        id: '5mTMoMg1YpiVl45COSlvdv', // A-Team
        date: '1983',
    },
    {
        id: '6dK20RkIlFOV2Gm9usft2M', // Fox On The Run
        date: '1975',
    },
    {
        id: '4YRvb9B8cgvhst11qk8CKn', // Sonnentanz
        date: '2012',
    },
    {
        id: '091roQPTeXtncbG9qXvvXK', // surfin bird
        date: '1963',
    }
]

const trackInterpreter = [
    {
        id: '4WFeJTXNHIS2wURtwlAkhu', // time wrap
        name: 'Richard O`Brien',
    }
]



function WebPlayback(props) {

    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(track);
    const [guessing, setGuess] = useState(true);
    const [token, setToken] = useState("");
    const [track_data, setTdata] = useState([]);
    const [corrDate, setCorrData] = useState("");

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
    
    function getCorrDate() {
        const found = trackReleaseData.find((element) => element.id === track_data.id)
            if (found){
                return(found.date);
            } else {
                return(track_data.album.release_date);
            }
    }

    function getCorrInterpreter() {     
        const found = trackInterpreter.find((element) => element.id === track_data.id)
            if (found){
                return(found.name);
            } else {
                let artistList = [];
                for (let i = 0; i < track_data.artists.length; i ++) {
                    artistList += track_data.artists[i].name;
                    if ((i+1) < track_data.artists.length) {
                        artistList += ", ";
                    }
                }
                return(artistList);
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
                                <div className="now-playing__artist">{getCorrInterpreter()}</div>
                                <div className="now-playing__release">{getCorrDate()}</div>
                                <div className="now-playing__release">{track_data.id}</div>

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

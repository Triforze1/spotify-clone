import React from 'react';
import "../css/SongRow.css";

function SongRow({ track }) {

    //const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="songRow">
            <img className="songRow-album" src={track.album.images[0].url} alt=""></img>
            <div className="songRow-info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow

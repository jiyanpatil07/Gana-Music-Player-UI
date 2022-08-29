const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/";
const clientId = "b3e1d9ca78254dbf9de77efe760a33cc";
const scopes = [
    "user-read-playback-position",
    "user-read-email",
    "user-library-modify",
    "playlist-modify-public",
    "ugc-image-upload",
    "user-follow-modify",
    "user-modify-playback-state",
    "user-read-recently-played",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "playlist-modify-private",
    "user-follow-read",
    "user-read-playback-state",
    "user-read-currently-playing",
    "playlist-read-private",
    "playlist-read-collaborative",
];
export const getTokenFromResponce=() => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        var parts=item.split("=");
      
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial;
    },{})
}

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // discover_weekly: []
    // token: 'BQDxv2FbWUuwZAipofLSSHzBNkufMbe5oiWgNg4qXCxC42HBV4qG8WSQfshvQQw',
}
const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
}
export default reducer
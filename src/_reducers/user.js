import initialState from './initialState'
import moment from 'moment'
import constants from './../_utils/const'

const { up, start, reset, initialize, end, loading } = constants;

function user(state = initialState, action) {
    const {payload} = action ? action : null;
    const {photo} = state;
    switch (action.type) {
        case up:
            return ({
                ...state,
                score: state.score + 1
            })
        case start:
            return {
                ...state,
                playing: true
            }
        case reset:
            return {
                ...state,
                score: 0
            }
        case initialize:
            return {
                ...state,
                startedAt: moment()
            }
        case end:
            return {
                ...state,
                finishAt: moment
                    .utc(moment(moment(), "DD/MM/YYYY HH:mm:ss")
                    .diff(moment(state.startedAt, "DD/MM/YYYY HH:mm:ss")))
                    .format("mm:ss")

            }
        case 'TAKE_PICTURE':
            photo.push(payload)
            return {
                ...state,
                photo
            }
        case loading:
            return ({
                ...state,
                loading: action.payload
            })
        default:
            return state;
    }
}

export default user;
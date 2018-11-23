import constants from './../_utils/const'

const { end } = constants

export default () => dispatch =>
    dispatch({
        type: end
    })
import constants from './../_utils/const'

const { reset } = constants

export default () => dispatch =>
    dispatch({
        type: reset
    })
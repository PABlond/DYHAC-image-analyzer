import constants from './../_utils/const'

const { loading } = constants


export default  bool => dispatch => 
    dispatch({
        type: loading,
        payload: bool
    })
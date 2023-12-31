import axios from 'axios'

export const createOrderGhn = (orderId) => async (dispatch) => {
    try {
        const { data } = await axios.post(`http://localhost:4000/order/update/${orderId}`)

        dispatch({ type: 'CREATE_ORDER_GHN', payload: data })
    } catch (error) {
        dispatch({ type: 'CREATE_ORDER_GHN_FAIL', payload: error })
    }
}

export const PrintOrderGhn = (orderId) => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:4000/order/print/${orderId}`)
        window.open(data)
        dispatch({ type: 'PRINT_ORDER_GHN', payload: data })
    } catch (error) {}
}

export const FeeShip = (address) => async (dispatch) => {
    try {
        const { data } = await axios.post(`http://localhost:4000/order/feeship`, address)
        dispatch({ type: 'FEE_ORDER_GHN', payload: data })
    } catch (error) {}
}

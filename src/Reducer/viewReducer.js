const viewReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LIST_BILLS':
            return {
                ...state,
             bills:action.payload
            };
        case 'SET_BILLS':
            return {
                ...state,
                setbill:action.payload
            };
        
        case 'GET_BY_BILLID':
            return {
                ...state,
                billByID:action.payload
            };
        case 'GET_BY_CUSTID':
                return {
                    ...state,
                    billByCustID:action.payload
            };
        case 'GET_BY_STATUS':
                return {
                    ...state,
                    billByStatus:action.payload
            };
        case 'GET_BY_DATE':
                return {
                    ...state,
                    billByDate:action.payload
            };
        default:
            return state;
    }
 
}

export default viewReducer

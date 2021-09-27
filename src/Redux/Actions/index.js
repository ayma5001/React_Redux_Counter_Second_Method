

export const Incerementation = () => {
    return {
    type: "INC",
    payload: 1
}
}


export const Decrementation = () => {
    return {
        type:"DEC",
        payload : 2
    } 
}

export const Login = () => {
    return {
        type:"LOGIN"
    }
}

export const Logout = () => {
    return {
        type:"LOGOUT"
    }
}
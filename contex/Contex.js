import React, {useState} from "react";

export const contexAutentication = React.createContext({})

const ContexProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    return(
        <contexAutentication.Provider value={{user,setUser, password,setPassword}}>
            {children}
        </contexAutentication.Provider>
    )
}

export default ContexProvider;
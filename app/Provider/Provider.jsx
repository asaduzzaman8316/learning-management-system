'use client'
import { store } from "../Store/Store";
import { Provider } from "react-redux";

export const Storeprovider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
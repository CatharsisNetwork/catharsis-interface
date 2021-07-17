import React, {useContext} from "react";

type ContextProps = () => void;

const defaultValue = () => {}

export const closeModalLinkOnClick = React.createContext<ContextProps>(defaultValue);

export function useCloseModalContext() {
    return useContext(closeModalLinkOnClick);
}
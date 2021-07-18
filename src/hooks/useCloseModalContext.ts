import React, {useContext} from "react";

type ContextProps = () => void;

const defaultValue = () => {}

export const CloseModalLinkOnClick = React.createContext<ContextProps>(defaultValue);

export function useCloseModalContext() {
    return useContext(CloseModalLinkOnClick);
}
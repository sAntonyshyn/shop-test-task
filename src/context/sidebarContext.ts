import {SetStateAction, createContext, Dispatch} from "react";

const sidebarContext = createContext<{
    isCartSidebarOpen: boolean,
    setIsCartSidebarOpen: Dispatch<SetStateAction<boolean>>
}>({
    isCartSidebarOpen: false,
    setIsCartSidebarOpen: () => {
    },
})

export default sidebarContext

'use client';
import React, {FC} from 'react';
import SidebarContext from "@/context/sidebarContext";
import CartSidebar from "@/components/CartSidebar";

const SidebarProvider: FC<{ children: React.ReactNode }> = ({children}) => {
    const [isCartSidebarOpen, setIsCartSidebarOpen] = React.useState(false);
    return (
        <SidebarContext.Provider value={{isCartSidebarOpen, setIsCartSidebarOpen}}>
            {isCartSidebarOpen && <CartSidebar/>}
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;

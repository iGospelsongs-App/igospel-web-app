import { ReactNode, createContext, useState } from "react";

interface SidebarContextType {
    isOpen: boolean;
    switchSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextType>({
    isOpen: true,
    switchSidebar: () => {},
})

const SidebarContextProvider: React.FC<{ children: ReactNode }>  = ({children}) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(true)

    const switchSidebar = () => {
        setSidebarIsOpen(!sidebarIsOpen);
    }

    const value: SidebarContextType = {
        isOpen: sidebarIsOpen,
        switchSidebar
    }

    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export default SidebarContextProvider;
import { ReactNode, createContext, useState } from "react";

interface SidebarContextType {
    isOpen: boolean;
    switchSidebar: () => void;
    isScroll: boolean;
}

export const SidebarContext = createContext<SidebarContextType>({
    isOpen: true,
    switchSidebar: () => {},
    isScroll: false,
})

const SidebarContextProvider: React.FC<{ children: ReactNode }>  = ({children}) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(true)
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 10) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    const switchSidebar = () => {
        setSidebarIsOpen(!sidebarIsOpen);
    }

    const value: SidebarContextType = {
        isOpen: sidebarIsOpen,
        switchSidebar,
        isScroll: colorChange,
    }

    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export default SidebarContextProvider;
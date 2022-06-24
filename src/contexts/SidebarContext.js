import { createContext, useState } from 'react';

const sidebarContextObject = createContext()

const SidebarContext = (props) => {
    // sidebar state
    const [isSidebarOn, setIsSidebarOn] = useState(0)

    // toggle Sidebar state
    const toggleSidebar = () => {
        setIsSidebarOn(
            (prevState) => prevState === 0 ? "50%" : 0
        )
    }
    
    return (
        <sidebarContextObject.Provider value={{ isSidebarOn, toggleSidebar }}>
            {props.children}
        </sidebarContextObject.Provider>
    )
}

export { SidebarContext, sidebarContextObject }
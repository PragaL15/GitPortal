import React, { useState } from 'react';
import { Menu } from 'primereact/menu';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import TopBar from './topbar';
// import '../styles/Sidebar.css'; // Import the CSS file

const Sidebar = ({ children }) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [activeItem, setActiveItem] = useState(null); // State to track active item

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    let items = [

        { label: 'Home', icon: 'pi pi-plus', },
        { label: 'Table', icon: 'pi pi-table', },
        { label: 'Upload', icon: 'pi pi-cog', },
        { label: 'Logout', icon: 'pi pi-sign-out', }

    ];

    return (
        <>



            {isMenuVisible && <div className="fixed inset-0 opacity-50 z-40 h-full  bg-#0F3B99" onClick={toggleMenu}></div>}

            {!isMenuVisible && (
                <div className="md:hidden ">
                    <Button
                        icon="pi pi-bars"
                        className="p-button-text absolute z-50 top-2 left-2"
                        onClick={toggleMenu}
                    />
                </div>
            )}

            <div className={`fixed top-0 left-0 h-screen w-52 p-3 z-50 transition-transform transform bg-side-blue ${isMenuVisible ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`} >
                <p className='text-white text-3xl font-medium text-center pt-5 pb-5'>GitPortal</p>
                {items.map((item) => {
                    return (
                        <div
                            className={`text-white mt-3 p-2 ${activeItem === item.label ? ' bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white-blue' : ''} hover:bg-gray-50 rounded-lg hover:text-side-blue`} // Apply active class if active
                            onClick={() => setActiveItem(item.label)}
                        >
                            <a className=" flex items-center gap-4 text-xl">
                                <span className={item.icon} />
                                <span className="">{item.label}</span>
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Sidebar;
import React, {useEffect, useState} from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import tw from "twin.macro";
import GlassContainer from "../shared/GlassContainer";
import {Link} from "react-router-dom";
import {authObserver} from "../../services/firebase";
import {internalLinks, publicLinks} from "../../data/links";

const StyledHeader = tw.header`fixed top-0 w-full h-20 z-40 p-4 font-bold`
const StyledBurger = tw.button`visible md:hidden md:pointer-events-none z-50 flex flex-col justify-around w-8 h-8 focus:outline-none cursor-pointer`
const BurgerLine = tw.div` w-8 h-1 bg-gray-800 dark:bg-white rounded-full relative`

const Header = () => {
    const [open, setOpen] = useState(false)

    const [state, setState] = React.useState({isSignedIn: undefined})
    useEffect(() => {
        return authObserver(setState)
    }, []);

    return (
        <StyledHeader>
            <Sidebar id="sidebar" open={open} setOpen={setOpen} internalLinks={state.isSignedIn ? internalLinks : publicLinks}/>
            <GlassContainer
                className={"bg-light-glass bg-opacity-40  max-w-screen-lg m-auto p-10 z-50 shadow-lg rounded-full flex justify-between items-center"}>
                <Link to="/" aria-label="home" className={"relative z-50 text-3xl"}>
                    L1 Analytics
                </Link>
                <StyledBurger
                    aria-controls="sidebar"
                    open={open}
                    onClick={() => setOpen(!open)}
                >
                    <BurgerLine/>
                    <BurgerLine/>
                    <BurgerLine/>
                </StyledBurger>
                <Navbar internalLinks={state.isSignedIn ? internalLinks : publicLinks }/>
            </GlassContainer>
        </StyledHeader>
    )
}

export default Header

import React from "react"
import tw from "twin.macro";
import {Link} from "react-router-dom";

const StyledSidebar = tw.nav`visible md:hidden absolute shadow-lg left-4 right-4 pt-24 pb-4 flex flex-col bg-light-glass dark:bg-dark-glass bg-opacity-40 dark:bg-opacity-40 bg-clip-padding rounded-header`

const Sidebar = ({open, setOpen, internalLinks}) => {
    let sidebar;
    if (open) {
        sidebar =
            <StyledSidebar style={{
                'backdropFilter': 'blur(20px)',
                'WebkitBackgroundClip': 'padding',
                'WebkitBackdropFilter': 'blur(20px)'
            }}>
                {internalLinks.map((data, key) => (
                    <Link className={"text-2xl text-center p-8"} key={key} to={data.url} onClick={() => setOpen(!open)}>
                        {data.name}
                    </Link>
                ))}
            </StyledSidebar>
    } else {
        sidebar = null;
    }
    return (
        <>{sidebar}</>
    )
}

export default Sidebar


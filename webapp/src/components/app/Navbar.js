import React from "react"
import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom'

const Navbar = ({internalLinks}) => {
    const location = useLocation();
    return (
        <nav className={"hidden md:flex md:justify-end md:items-center md:w-30rem right-0"}>
            {internalLinks.map((data, key) => {
                    if (data.url === location.pathname) {
                        return (
                            <Link
                                className={`border-b-2 border-primary pb-1 right-0 px-4 text-base text-center relative`}
                                key={key} to={data.url}>
                                {data.name}
                            </Link>
                        )
                    } else {
                        return (
                            <Link
                                className={`border-b-2 border-transparent px-4 hover:border-primary pb-1 text-base text-center relative`}
                                key={key} to={data.url}>
                                {data.name}
                            </Link>
                        )
                    }
                }
            )}
        </nav>
    )
}

export default Navbar

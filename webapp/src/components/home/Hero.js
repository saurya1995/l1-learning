import React, {useEffect} from "react";
import tw from "twin.macro";
import saturn5 from "../../images/saturn5.jpg"
import SubpageLinks from "./SubpageLinks";
import {internalLinks, publicLinks} from "../../data/links";
import {authObserver} from "../../services/firebase";

const Container = tw.div`relative h-screen `;
const HeroContainer = tw.div`absolute w-full h-full bg-gray-800 bg-opacity-50 z-10 flex flex-1 flex-col items-center sm:px-8`;
const Heading = tw.h1`z-20 max-w-screen-lg text-white text-center p-12 pt-56 font-bold text-3xl sm:text-4xl lg:text-4xl xl:text-5xl  `;

const Hero = () => {
    const [state, setState] = React.useState({isSignedIn: undefined})
    useEffect(() => {
        return authObserver(setState)
    }, []);
    return <Container>
        <HeroContainer>
            <Heading>Welcome to L1 Analytics</Heading>
            <SubpageLinks internalLinks={state.isSignedIn ? internalLinks : publicLinks}/>
        </HeroContainer>
        <img className="absolute h-full w-full object-cover z-0" alt={""} src={saturn5}/>
    </Container>
}


export default Hero;
import React, {useEffect} from "react";
import tw from "twin.macro";
import {internalLegalLinks, internalLinks, publicLinks} from "../../data/links";
import {Link} from "react-router-dom";
import GlassContainer from "../shared/GlassContainer";
import {authObserver} from "../../services/firebase";

const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;
const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;
const ColumnHeading = tw.h5`font-bold`;
const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const StyledLink = tw(Link)`border-b-2 border-transparent hocus:border-white pb-1 hover:cursor-pointer`;
const LogoText = tw.h5`text-xl`;
const Description = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const Footer = () => {
    const [state, setState] = React.useState({isSignedIn: undefined})
    useEffect(() => {
        return authObserver(setState)
    }, []);
    let links = state.isSignedIn ? internalLinks : publicLinks
    return (
            <GlassContainer
                className={"relative max-w-screen-lg m-auto text-white bg-primary bg-opacity-60 dark:bg-opacity-40 px-8 lg:rounded-t-header"}>
                <FiveColumns>
                    <WideColumn>
                        <Link to={"/"}>
                            <LogoText>L1 Analytics</LogoText>
                        </Link>
                        <Description>
                            Copyright © {new Date().getFullYear()} Team L1 <br/>
                            All Rights Reserved.
                        </Description>
                    </WideColumn>
                    <Column>
                        <ColumnHeading>Quick Links</ColumnHeading>
                        <LinkList>
                            {links.map((data, index) => (
                                <LinkListItem key={index}>
                                    <StyledLink to={data.url}>{data.name}</StyledLink>
                                </LinkListItem>
                            ))}
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnHeading>Legal</ColumnHeading>
                        <LinkList>
                            {internalLegalLinks.map((data, index) => (
                                <LinkListItem key={index}>
                                    <StyledLink to={data.url}>{data.name}</StyledLink>
                                </LinkListItem>
                            ))}
                        </LinkList>
                    </Column>
                </FiveColumns>
            </GlassContainer>
      )
}


export default Footer
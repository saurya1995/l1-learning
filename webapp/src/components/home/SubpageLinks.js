import React from "react";
import {ContentContainer, SubHeading, Text} from "../shared/sharedStyles";
import {Link} from "react-router-dom";



const SubpageLinks = ({internalLinks}) =>
    <ContentContainer>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full w-full ">
            {internalLinks.map(internalLink =>
                <Link key={internalLink.name} to={internalLink.url}
                      className="bg-white hover:bg-primary hover:text-white group dark:text-black rounded-3xl p-4 shadow-xl
                      transform hover:scale-105 duration-200">
                    <SubHeading>
                        {internalLink.name}
                    </SubHeading>
                    <Text>
                        {internalLink.description}
                    </Text>
                    <Text className={"text-primary group-hover:text-white"}>
                        {"Open " + internalLink.name + " →"}
                    </Text>
                </Link>
            )}
        </ul>
    </ContentContainer>


export default SubpageLinks
import React from 'react';
import {SubHeading, SubTitle, Text} from "../shared/sharedStyles";
import { ResponsiveCirclePacking } from '@nivo/circle-packing'
import {fileActivity} from "../../data/fileActivity";


const FileActivity = ({user}) => {
    const insightData = fileActivity
        .filter(element => element.username === user.username)[0].prediction
        .sort( (a,b) => a.expected_change > b.expected_change ? -1 : 1)
        .slice(0,10)
    const data = {
        "name": "",
        "children": insightData
    }


        //Object.entries(insightData.response_time).map(element => ({val: element[1]}))

    return (
        <div className={"w-full h-full flex-col items-center justify-center p-4"}>
            <SubTitle className={"text-center"}>Developer project focus</SubTitle>
            <SubHeading className={"text-center"}>Our prediction on what part of the project the developer should work on next</SubHeading>
            <div className={"h-half"}>
                <ResponsiveCirclePacking
                    data={data}
                    margin={{right: 40, left: 40, bottom: 25}}
                    id="filename"
                    value="expected_change"
                    colors={{ scheme: 'paired' }}
                    enableLabels={true}
                    labelTextColor="white"
                />

            </div>
            <Text className={"text-center"}>Legend: Expected developer activity on project files (circle size indicates likelihood)</Text>
        </div>
    );
}

export default FileActivity


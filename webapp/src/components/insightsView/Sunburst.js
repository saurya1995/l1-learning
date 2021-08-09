import React from 'react';
import {SubHeading, SubTitle, Text} from "../shared/sharedStyles";
import {sunburst} from "../../data/sunburst";
import {ResponsivePie} from '@nivo/pie'
import {ResponsiveBar} from '@nivo/bar'

const Sunburst = ({user}) => {
    let data = Object.entries(sunburst[user.username])
    let score = data[5][1]
    data = data.map(element => {
                return {
                    id: element[0],
                    label: element[0],
                    value: element[1].num_lines_changed,
                    sentiment: element[1].sentiment_score
                }
            }
        )
    data = data.slice(0, data.length-1)
    return (
        <div className={"w-full h-full flex-col items-center justify-center p-4"}>
            <SubTitle className={"text-center"}>Developer Expertise</SubTitle>
            <SubHeading className={"text-center"}>What the developer worked on & his sentiment on that</SubHeading>
            <div className={"h-half"}>
                <ResponsivePie
                    data={data}
                    margin={{top: 20, bottom: 20}}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={10}
                    activeOuterRadiusOffset={8}
                />
            </div>
            <SubHeading className={"text-center"}>The overall score is {score}</SubHeading>
            <div className={"h-half"}>
                <ResponsiveBar
                    data={data}
                    keys={["sentiment"]}
                    indexBy="id"
                    margin={{right: 60, bottom: 40, left: 60}}
                    layout="horizontal"
                    colors={{scheme: 'category10'}}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Sentiment Score',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                />
            </div>
        </div>
    );
}

export default Sunburst


import React from 'react';
import {SubHeading, SubTitle, Text} from "../shared/sharedStyles";
import {responseTime} from "../../data/responseTime";
import {ResponsiveStream} from '@nivo/stream'


const ResponseTimeInsight = ({user}) => {
    const insightData = responseTime.filter(element => element.name === user.username)[0]
    const data = Object.entries(insightData.response_time).map(element => ({val: element[1]}))

    return (
        <div className={"w-full h-full flex-col items-center justify-center p-4"}>
            <SubTitle className={"text-center"}>Developer availability</SubTitle>
            <SubHeading className={"text-center"}>Predicted response time</SubHeading>
            <div className={"h-half"}>
                <ResponsiveStream
                    data={data}
                    keys={['val']}
                    margin={{right: 40, left: 40, bottom: 25}}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Time",
                        legendOffset: -10
                    }}
                    axisLeft={{legend: "Minutes", tickSize: 5, tickPadding: 5, tickRotation: 0, legendOffset: 10}}
                    offsetType="linear"
                    colors={{scheme: 'accent'}}
                    fillOpacity={0.8}
                />
            </div>
            <Text className={"text-center"}>Legend: Expected response time during the day (on slack)</Text>
        </div>
    );
}

export default ResponseTimeInsight


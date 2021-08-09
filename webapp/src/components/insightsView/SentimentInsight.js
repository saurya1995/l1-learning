import React from 'react';
import {sentimentAnalysis} from "../../data/sentimentAnalysis";
import {SubHeading, SubTitle, Text} from "../shared/sharedStyles";
import {ResponsiveBullet} from "@nivo/bullet";


const SentimentInsight = ({user}) => {
    const insightData = sentimentAnalysis.filter(element => element.name === user.username)[0]
    const data = [
        {
            "id": "",
            "ranges": [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1],
            "measures": [1, -1],
            "markers": [insightData.avgscore]
        },
    ]

    return (
        <div className={"w-full h-full flex-col items-center justify-center p-4"}>
            <SubTitle className={"text-center"}>Sentiment Analysis</SubTitle>
            <SubHeading className={"text-center"}>Developer Friendliness (on slack):</SubHeading>
            <div className={"h-52"}>
                <ResponsiveBullet
                    data={data}
                    margin={{right: 40, left: 40, bottom: 25}}
                    spacing={46}
                    titleAlign="start"
                    titleOffsetX={-70}
                    measureSize={0.2}
                    rangeColors={"red_yellow_green"}
                />
            </div>
            <Text className={"text-center"}>Legend: Scale from -1 (unfriendly) to +1 (friendly)</Text>
            <Text className={"text-center"}>Nicest Sentence: <br/>{insightData.maxscore.message}</Text>
            <Text className={"text-center"}>Unfriendliest Sentence: <br/>{insightData.minscore.message}</Text>
        </div>
    );
}

export default SentimentInsight


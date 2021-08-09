import React from 'react';
import {SubHeading, SubTitle} from "../shared/sharedStyles";
import {ResponsiveRadar} from "@nivo/radar";
import {topicClassification} from "../../data/topicClassification";


const SentimentInsight = ({user}) => {
    const insightData = topicClassification.users[user.username]
    const meanData = topicClassification.meanMedianScore.mean
    const medianData = topicClassification.meanMedianScore.medianScore
    const data = [
        {
            "category": "Backend",
            "score": insightData.backend_avg_sentiment_score,
            "mean": meanData.backend_score,
            "median": medianData.backend_score
        },
        {
            "category": "Cloud",
            "score": insightData.cloud_avg_sentiment_score,
            "mean": meanData.cloud_score,
            "median": medianData.cloud_score
        },
        {
            "category": "Analytics",
            "score": insightData.data_analysis_avg_sentiment_score,
            "mean": meanData.data_analysis_score,
            "median": medianData.data_analysis_score
        },
        {
            "category": "Frontend",
            "score": insightData.frontend_avg_sentiment_score,
            "mean": meanData.frontend_score,
            "median": medianData.frontend_score
        },
        {
            "category": "OS",
            "score": insightData.os_avg_sentiment_score,
            "mean": meanData.os_score,
            "median": medianData.os_score
        }
    ]

    return (
        <div className={"w-full h-full flex-col items-center justify-center p-4"}>
            <SubTitle className={"text-center"}>Developer Focus</SubTitle>
            <SubHeading className={"text-center"}> </SubHeading>
            <div className={"h-half"}>
                <ResponsiveRadar
                    data={data}
                    keys={["score", "mean", "median"]}
                    indexBy="category"
                    maxValue="auto"
                    margin={{top: 70, right: 40, bottom: 20, left: 40}}
                    curve="cardinalClosed"
                    gridLabelOffset={36}
                    enableDots={true}
                    dotSize={10}
                    colors={{scheme: 'category10'}}
                    animate={true}
                    isInteractive={true}
                />
            </div>
        </div>
    );
}

export default SentimentInsight


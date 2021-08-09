import React from 'react';
import {SubTitle, Text} from "../shared/sharedStyles";
import Table from "../shared/Table";
import {timeEstimation} from "../../data/timeEstimation";


const TimeEstimationInsight = ({user}) => {
    const data = timeEstimation
        .filter(element => element.username === user.username)
        .map(element => ({id: element.issue_key, ...element}))
        .sort((a, b) => parseFloat(a.estimatedays) < parseFloat(b.estimatedays) ? 1 : -1)
    const tableSettings = {
        columns: [
            {field: "issue_key", headerName: "ID", flex: 4},
            {field: "estimatedays", headerName: "Estimated time", flex: 6},
            {field: "summary", headerName: "Summary", flex: 20},
        ]
    }

    return (
        <div className={"w-full h-full flex-col items-center justify-center p-4"}>
            <SubTitle className={"text-center"}>Predicted issue resolve time</SubTitle>
            <Table rows={data} columns={tableSettings.columns}/>
            <Text className={"text-center"}>Legend: Estimated time for issue to be resolved (in days)</Text>
        </div>
    );
}

export default TimeEstimationInsight


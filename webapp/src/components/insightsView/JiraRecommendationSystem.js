import React from 'react';
import {SubHeading, SubTitle} from "../shared/sharedStyles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import {recommendationSystem} from "../../data/recommendationSystem";
import Table from "../shared/Table";


const JiraRecommendationSystem = ({user, ticket, setTicket}) => {
    const insightData = recommendationSystem.filter(element => element[0].assignee === user.username)
    let data
    if (ticket !== undefined && ticket !== null) {
        data = recommendationSystem
            .filter(element => element[0].issue_key === ticket[0].issue_key)[0]
            .map(element => ({id: element.issue_key, ...element}))
            .filter(element => element.issue_key !== ticket[0].issue_key)
            .sort((a, b) => parseFloat(a.similarity_score) < parseFloat(b.similarity_score) ? 1 : -1)
    }
    const tableSettings = {
        columns: [
            {field: "similarity_score", headerName: "Similarity", flex: 5},
            {field: "issue_key", headerName: "ID", flex: 5},
            {field: "assignee", headerName: "Assignee", flex: 5},
            {field: "reporter", headerName: "Reporter", flex: 5},
            {field: "summary", headerName: "Summary", flex: 20},
        ]
    }

    return (
        <div className={"w-full h-full flex-col items-center justify-center p-4"}>
            <SubTitle className={"text-center"}>Find similar jira tickets</SubTitle>
            <SubHeading className={"text-center"}>This should help you find synergies in your teams</SubHeading>
            <Autocomplete
                options={insightData}
                getOptionLabel={(option) => option[0].summary}
                className={"w-full p-6"}
                renderInput={(params) => <TextField {...params} variant="outlined" label="Select Jira Ticket"/>}
                onChange={(event, ticket) => setTicket(ticket)}
            />
            {ticket !== undefined && ticket !== null &&
            <Table header={"Similar jira tickets to " + ticket[0].issue_key} rows={data}
                   columns={tableSettings.columns}/>
            }
        </div>
    );
}

export default JiraRecommendationSystem


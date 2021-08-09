import React from 'react';
import {SubHeading, SubTitle} from "../shared/sharedStyles";
import {tagPrediction} from "../../data/tagPrediction";
import ClearAllIcon from '@material-ui/icons/ClearAll';
import {Chip} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const TagPrediction = ({user, setIssue, issue}) => {
    const data = tagPrediction.filter(element => element.assignee === user.username)
    console.log(issue)
    return (
        <div className={"w-full h-full flex-col items-center justify-center p-4"}>
            <SubTitle className={"text-center"}>Tag Suggestions</SubTitle>
            <SubHeading className={"text-center"}>Tickets the developer worked on with a classification by area</SubHeading>
            <Autocomplete
                options={data}
                getOptionLabel={(option) => option.summary}
                className={"w-full p-6"}
                renderInput={(params) => <TextField {...params} variant="outlined" label="Select Jira Ticket"/>}
                onChange={(event, issue) => setIssue(issue)}
            />
            {issue !== null && issue !== undefined &&
            <div className={"p-6 pt-0"}>
                {issue.tags.map(tag => <Chip className={"m-1"} label={tag} color="primary" icon={<ClearAllIcon/>}/>)}
            </div>
            }
        </div>
    );
}

export default TagPrediction


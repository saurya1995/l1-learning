import React from 'react';
import {SubTitle} from "../shared/sharedStyles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import {developerRecommendation} from "../../data/developerRecommendation";
import Table from "../shared/Table";
import {ResponsiveFunnel} from "@nivo/funnel";


const DeveloperRecommendationSystem = ({summary, setSummary}) => {
    const insightData = developerRecommendation

    let data
    if (summary !== undefined && summary !== null) {
        data = developerRecommendation
            .filter(element => element[0].summary === summary[0].summary)[0]
            .map(element => ({id: element.username, value: element.score, label: element.username, ...element}))
            .sort((a, b) => parseFloat(a.score) < parseFloat(b.score) ? 1 : -1)
    }
    const tableSettings = {
        columns: [
            {field: "value", headerName: "Developer Fit", flex: 5},
            {field: "label", headerName: "Developer", flex: 5},
        ]
    }

    return (
        <div className={"w-full h-full flex-col items-center justify-center p-4"}>
            <SubTitle className={"text-center"}>Find the best developer for a task</SubTitle>
            <Autocomplete
                options={insightData}
                getOptionLabel={(option) => option[0].summary}
                className={"w-full p-6"}
                renderInput={(params) => <TextField {...params} variant="outlined" label="Select summary Description"/>}
                onChange={(event, summary) => setSummary(summary)}
            />
            {summary !== undefined && summary !== null &&
            <div className={"h-half"}>
                <ResponsiveFunnel
                    data={data}
                    margin={{top: 20, right: 20, bottom: 20, left: 20}}
                    shapeBlending={0.3}
                    valueFormat=" >-.4s"
                    colors={{scheme: 'category10'}}

                    labelColor={{from: 'color', modifiers: [['darker', 3]]}}
                    currentPartSizeExtension={10}
                />
            </div>
            }
            {summary !== undefined && summary !== null &&
            <Table header={""} rows={data}
                   columns={tableSettings.columns}/>
            }
        </div>
    );
}

export default DeveloperRecommendationSystem


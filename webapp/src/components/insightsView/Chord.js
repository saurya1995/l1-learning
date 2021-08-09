import React from 'react';
import {SubHeading, SubTitle, Text} from "../shared/sharedStyles";
import { ResponsiveChord } from '@nivo/chord'
import {chord} from "../../data/chord";


const Chord = ({user}) => {
    const keys = chord.map(element => element.username)
    let matrix = []
    let data = chord
        .map(element => element.prediction)
    for (let prediction of data) {
        let array = []
        for (let similarity of prediction) {
            array.push(Number((similarity.expected_similarity).toFixed(2)))
        }
        matrix.push(array)
    }
    let scores = chord.filter(elem => elem.username === user.username)[0]
    console.log(scores)
    return (
        <div className={"w-full h-full flex-col items-center justify-center p-4"}>
            <SubTitle className={"text-center"}>Developer Synergies</SubTitle>
            <SubHeading className={"text-center"}>Interaction & Overlap between developers</SubHeading>
            <div className={"h-half"}>
                <ResponsiveChord
                    matrix={matrix}
                    keys={keys}
                    padAngle={0.02}
                    innerRadiusRatio={0.96}
                    innerRadiusOffset={0.02}
                    enableLabel={true}
                    label={e=> e.id}
                    animate={true}
                />
            </div>
            <Text className={"text-center"}>{scores.only_qualified_for_percent}% of the tasks can only be solved by this developer</Text>
            <Text className={"text-center"}>The developer is qualified to solve {scores.is_qualified_for_percent}% of all issues</Text>
            {/*<Text className={"text-center"}>{scores.avg_other_qualified}% of the issues this developer works on can be solved by others</Text>*/}
        </div>
    );
}

export default Chord


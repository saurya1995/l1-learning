import React from "react";
import GlassContainer from "../shared/GlassContainer";
import {Button, FormControl, FormControlLabel, FormGroup, Switch} from "@material-ui/core";
import {ContentContainer, SubHeading} from "../shared/sharedStyles";

const PrivacyControls = ({state, setState, updateUser}) => {
    const handleChange = (event) => {
            setState({
                    ...state,
                    preferences: {
                        ...state.preferences,
                        [event.target.name]: event.target.checked
                    }
                }
            );
        }
    ;
    return <ContentContainer>
        <GlassContainer
            className="relative overflow-hidden rounded-3xl text-white h-full w-full bg-dark-glass h-full w-full bg-opacity-40 py-10">
            <FormControl className={"justify-center items-center w-full"} component="fieldset">
                <SubHeading className={"text-center pb-4"}>
                    Restrict access to your data
                </SubHeading>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch color="primary" checked={state.preferences.slack} onChange={handleChange}
                                         name="slack"/>}
                        label="Allow access to Slack data"
                    />
                    <FormControlLabel
                        control={<Switch color="primary" checked={state.preferences.jira} onChange={handleChange}
                                         name="jira"/>}
                        label="Allow access to Jira data"
                    />
                    <FormControlLabel
                        control={<Switch color="primary" checked={state.preferences.git} onChange={handleChange}
                                         name="git"/>}
                        label="Allow access to Git data"
                    />
                </FormGroup>
            </FormControl>
            <Button onClick={updateUser} variant={"contained"} color={"primary"}
                    className={"justify-center items-center w-full"}>Save Changes</Button>
        </GlassContainer>
    </ContentContainer>

}


export default PrivacyControls;
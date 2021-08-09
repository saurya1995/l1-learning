import React, {useEffect} from "react"
import {InsightContainer, NavbarPadding} from "../components/shared/sharedStyles";
import UserSearch from "../components/insightsView/UserSearch";
import {addLogEntry, getCurrentUser, loadUsers, requestOverseerAccess} from "../services/firebase";
import SentimentInsight from "../components/insightsView/SentimentInsight";
import AccessDenied from "../components/insightsView/AccessDenied";
import ResponseTimeInsight from "../components/insightsView/ResponseTimeInsight";
import JiraRecommendationSystem from "../components/insightsView/JiraRecommendationSystem";
import {sentimentAnalysis} from "../data/sentimentAnalysis";
import FileActivity from "../components/insightsView/FileActivity";
import TimeEstimationInsight from "../components/insightsView/TimeEstimationInsight";
import DeveloperRecommendationSystem from "../components/insightsView/DeveloperRecommendationSystem";
import SentimentWeb from "../components/insightsView/SentimentWeb";
import Chord from "../components/insightsView/Chord";
import Sunburst from "../components/insightsView/Sunburst";
import TagPrediction from "../components/insightsView/TagPrediction";


const Insights = () => {
    const [users, setUsers] = React.useState(undefined)
    const [userIndex, setUserIndex] = React.useState(undefined)
    const [ticket, setTicket] = React.useState(undefined)
    const [issue, setIssue] = React.useState(undefined)
    const [summary, setSummary] = React.useState(undefined)
    useEffect(() => {
        loadUsers(setUsers)
    }, [])
    const userSelected = async (selectedUser) => {
        selectedUser !== null && users.indexOf(users.find(elem => elem.uid === selectedUser.uid)) !== null && sentimentAnalysis.filter(element => element.name === users[users.indexOf(users.find(elem => elem.uid === selectedUser.uid))].username)[0] !== undefined &&
        setUserIndex(users.indexOf(users.find(elem => elem.uid === selectedUser.uid)))
        setTicket(undefined)
        setSummary(undefined)
        // Clotilde logging
        const currentUser = await getCurrentUser()
        requestOverseerAccess("Complete dataset", "Visualization in web app", "git", currentUser.email, selectedUser.username)
        requestOverseerAccess("Complete dataset", "Visualization in web app", "slack", currentUser.email, selectedUser.username)
        requestOverseerAccess("Complete dataset", "Visualization in web app", "jira", currentUser.email, selectedUser.username)

        // Firebase logging
        if (currentUser.uid !== selectedUser.uid) {
            addLogEntry(selectedUser.uid, "Slack", "User Level", selectedUser.preferences.slack ? "Access Granted" : "Access Denied")
            addLogEntry(selectedUser.uid, "Jira", "User Level", selectedUser.preferences.jira ? "Access Granted" : "Access Denied")
        }
    }


    return (<>
        <NavbarPadding/>
        <NavbarPadding/>
        <InsightContainer>
            {users !== undefined &&
            <UserSearch data={users} userSelected={userSelected}/>}
        </InsightContainer>
        {userIndex !== undefined && userIndex !== null &&
        <InsightContainer>
            {users[userIndex].preferences.slack ? <SentimentInsight user={users[userIndex]}/> : <AccessDenied/>}
        </InsightContainer>
        }
        {userIndex !== undefined && userIndex !== null &&
        <InsightContainer>
            {users[userIndex].preferences.slack ? <ResponseTimeInsight user={users[userIndex]}/> : <AccessDenied/>}
        </InsightContainer>
        }
        {userIndex !== undefined && userIndex !== null &&
        <InsightContainer>
            {users[userIndex].preferences.jira ? <Chord user={users[userIndex]}/> : <AccessDenied/>}
        </InsightContainer>
        }
        {userIndex !== undefined && userIndex !== null &&
        <InsightContainer>
            {users[userIndex].preferences.slack ? <SentimentWeb user={users[userIndex]}/> : <AccessDenied/>}
        </InsightContainer>
        }
        {userIndex !== undefined && userIndex !== null &&
        <InsightContainer>
            {users[userIndex].preferences.slack ? <Sunburst user={users[userIndex]}/> : <AccessDenied/>}
        </InsightContainer>
        }
        {userIndex !== undefined && userIndex !== null &&
        <InsightContainer>
            {users[userIndex].preferences.git ? <FileActivity user={users[userIndex]}/> : <AccessDenied/>}
        </InsightContainer>
        }
        {userIndex !== undefined && userIndex !== null &&
        <InsightContainer>
            {users[userIndex].preferences.jira ?
                <JiraRecommendationSystem ticket={ticket} setTicket={setTicket} user={users[userIndex]}/> :
                <AccessDenied/>}
        </InsightContainer>
        }
        {userIndex !== undefined && userIndex !== null &&
        <InsightContainer>
            {users[userIndex].preferences.jira ?
                <DeveloperRecommendationSystem summary={summary} setSummary={setSummary}/> : <AccessDenied/>}
        </InsightContainer>
        }
        {userIndex !== undefined && userIndex !== null &&
        <InsightContainer>
            {users[userIndex].preferences.jira ?
                <TimeEstimationInsight user={users[userIndex]}/> : <AccessDenied/>}
        </InsightContainer>
        }
        {userIndex !== undefined && userIndex !== null &&
        <InsightContainer>
            {users[userIndex].preferences.jira ? <TagPrediction issue={issue} setIssue={setIssue} user={users[userIndex]}/> : <AccessDenied/>}
        </InsightContainer>
        }
        <NavbarPadding/>
        <NavbarPadding/>
        <NavbarPadding/>
    </>)
}


export default Insights


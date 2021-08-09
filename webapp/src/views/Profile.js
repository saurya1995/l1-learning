import React, {useEffect} from "react"
import {firebaseApp} from "../services/firebase";
import {useHistory} from "react-router-dom";
import ProfileContainer from "../components/profile/ProfileContainer";


const Profile = () => {
    let history = useHistory();
    const [state, setState] = React.useState({isSignedIn: undefined})

    useEffect(() => {
        return firebaseApp.auth()
            .onAuthStateChanged(
                user => setState({isSignedIn: !!user}))

    }, []);

    return <div>
        {state && state.isSignedIn === false &&
        history.push("/authentication")
        }
        {state && state.isSignedIn === true &&
        <ProfileContainer/>
        }
    </div>
}


export default Profile


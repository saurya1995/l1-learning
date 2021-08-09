import React, {useEffect} from 'react';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {Heading, NavbarPadding} from "../components/shared/sharedStyles";
import {createUser, firebaseApp} from "../services/firebase"
import {useHistory} from "react-router-dom";


const Authentication = () => {
    let history = useHistory();
    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => createUser() && history.push("/")
        },
    };
    const [state, setState] = React.useState({isSignedIn: undefined})

    useEffect(() => {
        return firebaseApp.auth()
            .onAuthStateChanged(
                user => setState({isSignedIn: !!user}))
    }, []);

    return (
        <>
            <section className="relative min-h-screen w-full h-full">
                <NavbarPadding/>
                <NavbarPadding/>
                <div
                    className="absolute top-0 w-full h-full bg-gray-900"
                    style={{
                        backgroundImage:
                            "url(" + require("./register_bg_2.png").default + ")",
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat"
                    }}
                ></div>
                <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    <div className="text-center mb-3">
                                        <Heading>Welcome back!</Heading>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-gray-400" />
                                </div>
                                <div className="pb-10 ">
                                    {state.isSignedIn !== undefined && !state.isSignedIn &&
                                    <StyledFirebaseAuth uiConfig={uiConfig}
                                                        firebaseAuth={firebaseApp.auth()}/>
                                    }
                                    {state.isSignedIn &&
                                    history.push("/")
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Authentication
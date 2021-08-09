import React, {useEffect} from "react";
import {deleteUser, firebaseApp, loadAccessLog, loadUser, updateUser} from "../../services/firebase";
import {Button, Snackbar, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {Alert} from "@material-ui/lab";

const ProfileContainer = () => {
    let history = useHistory();
    const [open, setOpen] = React.useState(false)
    const [user, setUser] = React.useState(undefined)
    const [accessLog, setAccessLog] = React.useState(undefined)
    const handleSignOut = () => {
        firebaseApp.auth().signOut().then(() =>
            history.push("/authentication")
        )
    }
    useEffect(() => {
        loadUser(setUser).then(() => null)
        loadAccessLog(setAccessLog).then(() => null)
    }, [])
    const handleChange = (event) => {
        setUser({
            ...user,
            username: event.target.value
        })

    }

    return (<>
        <section className="relative block" style={{height: "500px"}}>
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
                }}
            >
            </div>
            <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{height: "70px"}}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-primary-background fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
        </section>
        <section className="relative py-16">
            <div className="container mx-auto px-4">
                <div
                    className="relative flex flex-col break-words bg-white w-full  mb-6 shadow-xl rounded-lg -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <img
                                        alt="..."
                                        src={firebaseApp.auth().currentUser.photoURL}
                                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                                        style={{maxWidth: "150px", minWidth: "150px"}}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div className="py-6 px-3 mt-32 sm:mt-0">
                                    <Button color="secondary" variant="contained"
                                            onClick={() => handleSignOut()}>
                                        Sign-out
                                    </Button>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          3
                        </span>
                                        <span className="text-sm text-gray-500">Datasources</span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            {accessLog !== undefined && accessLog !== null && accessLog.length}
                        </span>
                                        <span className="text-sm text-gray-500">Data requests</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                {firebaseApp.auth().currentUser.displayName}
                            </h3>
                            <br/>
                            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                {firebaseApp.auth().currentUser.email}
                                <br/>
                                {firebaseApp.auth().currentUser.emailVerified ? " Verified✅" : ""}
                            </div>
                            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                {firebaseApp.auth().currentUser.phoneNumber}
                            </div>
                            <br/>
                            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">

                                {user !== undefined &&
                                <TextField onChange={(event) => handleChange(event)} defaultValue={user.username}
                                           label="Username" variant="outlined"/>}

                            </div>
                            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                <Button color="primary" variant="contained"
                                        onClick={() => updateUser(user, setOpen)}>
                                    Update Username
                                </Button>
                            </div>
                            <br/>
                            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                <Button color="primary" variant="contained"
                                        onClick={() => firebaseApp.auth().sendPasswordResetEmail(firebaseApp.auth().currentUser.email) && setOpen(true)}>
                                    Reset Password
                                </Button>
                            </div>
                            <br/>
                            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                <Button color="secondary" variant="contained"
                                        onClick={() => firebaseApp.auth().currentUser.delete() && deleteUser()}>
                                    ⚠️ Delete Account ⚠️
                                </Button>
                            </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-gray-300 text-center">

                        </div>
                    </div>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity="success">
                    Request received
                </Alert>
            </Snackbar>
        </section>
    </>)
}


export default ProfileContainer
import React, {useEffect} from "react"
import {NavbarPadding, VerticalContainer} from "../components/shared/sharedStyles";
import Table from "../components/shared/Table";
import earth from "../images/earth.jpg";
import PrivacyControls from "../components/privacyDashboard/PrivacyControls";
import {loadAccessLog, loadUser, updateUser} from "../services/firebase";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";


const PrivacyDashboard = () => {
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = React.useState(undefined)
    const [accessLog, setAccessLog] = React.useState(undefined)
    const tableSettings = {
        tableHeader: "Access Log",
        columns: [
            {field: "requestor", headerName: "Data", flex: 10},
            {field: "service", headerName: "Service", flex: 4},
            {field: "scope", headerName: "Access Scope", flex: 6},
            {field: "status", headerName: "Access Status", flex: 6},
            {field: "time", headerName: "Access Date", flex: 6},
        ]
    }
    useEffect(() => {
        loadUser(setUser)
        loadAccessLog(setAccessLog)
    }, [])


    return (
        <div>
            <img className="fixed h-full w-full object-cover z-0" alt={""} src={earth}/>
            <NavbarPadding/>
            <VerticalContainer>
                {user !== undefined && accessLog !== undefined &&
                <Table header={tableSettings.tableHeader} rows={accessLog} columns={tableSettings.columns}/>}
            </VerticalContainer>
            {user !== undefined && <PrivacyControls state={user} setState={setUser} updateUser={() => updateUser(user, setOpen)}/>}
            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity="success">
                    Your changes were saved successfully
                </Alert>
            </Snackbar>
        </div>
    )
}

export default PrivacyDashboard


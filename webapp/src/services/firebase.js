import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import axios from "axios";

const axiosConfig = "https://overseer.sse.in.tum.de";

const firebaseConfig = {
    apiKey: "AIzaSyCzN5L1CxuEwdtgT279iUN-7q7Cg9cjE_0",
    authDomain: "l1-analytics.firebaseapp.com",
    projectId: "l1-analytics",
    storageBucket: "l1-analytics.appspot.com",
    messagingSenderId: "408080045830",
    appId: "1:408080045830:web:e994f4995ba0739a267087"
};

export const axiosInstance = axios.create({
    baseURL: axiosConfig,
    timeout: 10000,
});

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebaseApp.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
}

export const createUser = async () => {
    const currentUser = await getCurrentUser()
    let defaultUser = {
        name: currentUser.displayName,
        preferences: {
            git: true,
            jira: true,
            slack: true
        },
        username: currentUser.email,
        uid: currentUser.uid
    }
    firebaseApp.firestore().collection("users")
        .doc(currentUser.uid)
        .onSnapshot((doc) => {
            firebaseApp.firestore().collection("users")
                .doc(currentUser.uid)
                .set(doc.data() === undefined ? defaultUser : doc.data())
                .then(() => console.log("success"))
                .catch(() => console.log("error"))
        })

}

export const updateUser = async (user, setOpen) => {
    const currentUser = await getCurrentUser()
    firebaseApp.firestore().collection("users")
        .doc(currentUser.uid)
        .set(user)
        .then(() => setOpen(true))
        .catch(() => console.log("Error"))
}

export const loadUser = async (setUser) => {
    const currentUser = await getCurrentUser()
    firebaseApp.firestore().collection("users").doc(currentUser.uid)
        .onSnapshot((doc) => {
            setUser(doc.data())
        })
}
export const deleteUser = async () => {
    const currentUser = await getCurrentUser()
    firebaseApp.firestore().collection("users").doc(currentUser.uid)
        .delete()
        .then(() => console.log("user deleted"))
}

export const authObserver = (setState) => {
    return firebaseApp
        .auth()
        .onAuthStateChanged(
            user => setState({isSignedIn: !!user})
        );
}

export const loadAccessLog = async (setAccessLog) => {
    const currentUser = await getCurrentUser()
    firebaseApp.firestore().collection("privacyLog")
        .where("dataowner", "==", currentUser.uid)
        .onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setAccessLog(items)
        })
}

export const requestOverseerAccess = async (data_types, justification, tool, user, owner) => {
    await axiosInstance({
            method: 'post',
            url: '/request-access/direct/',
            auth: {
                username: "techie",
                password: "some_body_00"
            },
            data: {
                "data_types": [
                    data_types
                ],
                "justification": justification,
                "tool": tool,
                "user": user,
                "owner": owner
            }
        }
    )

        .catch(e => console.log(e))
}

export const addLogEntry = async (dataowner, service, scope, status) => {
    const currentUser = await getCurrentUser()
    Date.prototype.yyyymmdd = function () {
        var mm = this.getMonth() + 1; // getMonth() is zero-based
        var dd = this.getDate();

        return [this.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('');
    };
    var date = new Date();
    firebaseApp.firestore().collection("privacyLog")
        .add({
            id: date.toString(),
            dataowner: dataowner,
            requestor: currentUser.displayName,
            service: service,
            scope: scope,
            status: status,
            time: date.yyyymmdd()
        })
        .then(() => console.log("Success"))
        .catch(() => console.log("Error"))
}

export const loadUsers = async (setUsers) => {
    firebaseApp.firestore().collection("users")
        .onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setUsers(items)
        })
}
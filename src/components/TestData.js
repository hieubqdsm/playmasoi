import React from "react";
import {FirebaseDatabaseNode, FirebaseDatabaseProvider} from "@react-firebase/database";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAYEHWiMi_YYnjvc9iaw9o_27kVoYTtCzY",
    authDomain: "playmasoi.firebaseapp.com",
    projectId: "playmasoi",
    storageBucket: "playmasoi.appspot.com",
    messagingSenderId: "852055873650",
    appId: "1:852055873650:web:76c4e976045885f8f88aeb",
    measurementId: "G-33SXZCLQ89"
};
const state = {
    limit: 2
};
const TestData = () => {

    return (
        <div>
            <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
                <div>
                    <FirebaseDatabaseNode
                        path="test_solo"
                        limitToFirst={state.limit}
                        // orderByKey
                        // orderByValue={"created_on"}
                    >
                        {d => {
                            console.log(d.value);
                            let temp_data = 0;
                            if(d.value){
                                temp_data = d.value["test_data"];
                                //console.log(d.value["test_data"]);
                            }
                            return "DATA";
                        }}
                    </FirebaseDatabaseNode>
                </div>
            </FirebaseDatabaseProvider>
        </div>
    );
}
export default TestData;
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

const firebaseConfig = {
apiKey: "AIzaSyDIvJlBHEb4HabZjIBBenSkLsPDa_h8geA",
authDomain: "real-coin-information1.firebaseapp.com",
databaseURL: "https://real-coin-information1-default-rtdb.firebaseio.com",
projectId: "real-coin-information1",
storageBucket: "real-coin-information1.appspot.com",
messagingSenderId: "1086454324175",
appId: "1:1086454324175:web:5332664a445e42a5f810ba",
measurementId: "G-PK30V0GRRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { getDatabase,set,ref,remove,update,child,onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
const db =getDatabase();



let Link_Id=[];
onValue(ref(db,`${localStorage.getItem('Link_Id')}`),(snapshot)=>{
    Link_Id.push(snapshot.val())
})








//Link_Count
if(localStorage.getItem('Link_Count')===null){
    localStorage.setItem('Link_Count',0)
}


setInterval(()=>{
    if(Link_Id.length != 0 ){
        remove(ref(getDatabase(),`${localStorage.getItem('Link_Id')}`),{}).then(()=>{

            localStorage.setItem(`Link_form${localStorage.getItem('Link_Count')}`,`${Link_Id[0].Name}`)

            localStorage.setItem('Link_Count',Number(localStorage.getItem('Link_Count'))+1)

        })
    }
},500)






//window.location.search
if(localStorage.getItem('WLS_UserId')===null){
    let WLS_UserId=window.location.search.slice(1,window.location.search.length-1);
    localStorage.setItem('WLS_UserId',WLS_UserId)
}


setInterval(()=>{
    if(localStorage.getItem('WLS_UserId') != null && localStorage.getItem('WLS_UserId') !='none'){

        set(ref(getDatabase(),`${localStorage.getItem('WLS_UserId')}`),{
            Name:localStorage.getItem('UserName')

        }).then(()=>{
            localStorage.setItem('WLS_UserId','none')
        })
    }
},500)











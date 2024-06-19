import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  //본인설정
  apiKey: "AIzaSyCCQREamAR68G_ADET1o63fHJZAotTv5kU",
  authDomain: "myproject-cd878.firebaseapp.com",
  projectId: "myproject-cd878",
  storageBucket: "myproject-cd878.appspot.com",
  messagingSenderId: "478533546766",
  appId: "1:478533546766:web:668d3f976a9adb146b9d5f",
  measurementId: "G-5SE75KN42R",
};

//firebase init
firebase.initializeApp(firebaseConfig);

//init service
const firedb = firebase.firestore();
//데이터 베이스에 fire 베이스를  firestor 를 가져와서 사용할 수 있게 가져 왔다
export { firedb };

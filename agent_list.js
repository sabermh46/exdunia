import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, addDoc, collection, doc, getDocs } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js'

var all_list = document.querySelector('.container.all_list')


const firebaseConfig = {
    apiKey: "AIzaSyC0BigqDXq_tmwAWqtGi0FrccEmGpPa6X4",
    authDomain: "exdunia-dd776.firebaseapp.com",
    projectId: "exdunia-dd776",
    storageBucket: "exdunia-dd776.appspot.com",
    messagingSenderId: "558839466920",
    appId: "1:558839466920:web:c72cbc5af509e793abab9d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  const docRef = collection(db, "agents");
  const docSnap = await getDocs(docRef);

  var count = 0;
  
  docSnap.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());

    var datas = doc.data()

    count++
    var card = document.createElement('agent-card')
    card.setAttribute('link', datas.wa_num)
    card.setAttribute('text', datas.text)
    card.setAttribute('type', datas.agent_type)

    all_list.append(card)
  });

  document.getElementById('totalAgent').textContent = count


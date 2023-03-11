document.getElementById('pre_name').value = 'Agent No'

        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
        import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js'

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


        

        var submit = document.getElementById('submit').addEventListener('click', ()=>{
            if(pre_name.value == '' || age_id.value == '' || wa_num.value == ''){
                alert('Cancelled')
            } else {
                lol()
            }
        })


        

        async function lol(){

            var pre_name = document.getElementById('pre_name');
            var age_id = document.getElementById('age_id');
            var wa_num = document.getElementById('wa_num');
            var agent_type = document.querySelector("input[name='agent_type']:checked")

            var text = `${pre_name.value} ${age_id.value}`

            var reff = collection(db, "agents")
            const docRef = await addDoc(reff, {
                text: text,
                wa_num: wa_num.value,
                agent_type: agent_type.value
            }).then(()=>{

                showSnack('Data Added Successfully')
                age_id.value = ''
                wa_num.value = ''
                agent_type = ''

            }).catch(()=>{
                showSnack('Something Went Wrong')
            })

        }
        

        function showSnack(mess){
            var body = document.body;
            var elem = document.createElement('sna-ck');
            elem.setAttribute('title', mess)
            body.appendChild(elem)
        }


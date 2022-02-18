import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import config from './../../android/app/google-services.json'

const {projectInfo, client} = config
const{ project_id: projectId}= projectInfo, {client_info: appId}
const firebaseConfig = {
  projectId, appId
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
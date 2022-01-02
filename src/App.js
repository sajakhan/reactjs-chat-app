import './App.css'; 
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import LogOut from './components/LogOut';
// import LoginFormAuth from './components/LoginFormAuth';
// import Firebase from './components/Firebase'


const projectID = '75cd3225-81f4-4dc6-8eaa-9d3f5249e53a';
const remove = ()=>{
  localStorage.clear()
}
function App() {
  // if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div>
      <LoginForm/>
      <LogOut remove={remove}/>
    <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppState) => {}}

    
    />
    </div>
  );
}

export default App;

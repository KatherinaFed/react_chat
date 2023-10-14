import React from 'react';
import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom/ChatRoom';
import SignIn from './components/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';
import { auth } from './firebase.config';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

export default App;

import React from 'react';
import { auth } from '../../config/firebase';
import { DocumentData } from 'firebase/firestore';

interface ChatMessageProps {
  message: DocumentData,
}

function ChatMessage(props: ChatMessageProps) {
  const { text, uid, photoURL } = props.message;
  // console.log('user: ',auth.currentUser?.uid)
  console.log('uid: ',uid)

  const messageClass = uid === auth.currentUser?.uid ? 'sent' : 'received';

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'mock_avatar.png'} />
        <p>{text}</p>
      </div>
    </>
  );
}

export default ChatMessage;

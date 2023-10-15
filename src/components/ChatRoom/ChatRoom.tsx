import React, { useEffect, useRef, useState } from 'react';
import { auth, firebase, firestore } from '../../config/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from '../ChatMessage/ChatMessage';
import { DocumentData, limit, orderBy, query } from 'firebase/firestore';
import { Message } from '../../shared/types';
import { convertDocToMessage } from '../../utils';

const ChatRoom = () => {
  const [formValue, setFormValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const scroll: React.RefObject<HTMLElement> = useRef(null);

  useEffect(() => {
    const unsubscribe = subscribeMessages();

    return () => {
      unsubscribe();
    };
  }, []);

  const subscribeMessages = () => {
    return firestore
      .collection('message')
      .orderBy('createdAt')
      .limit(25)
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => convertDocToMessage(doc));
        setMessages(messages);
        scroll.current?.scrollIntoView({ behavior: 'smooth' });
      });
  };

  // const messageRef = firestore.collection('message');

  // const queryRef = query(messageRef, orderBy("createdAt"), limit(25));

  // const [message] = useCollectionData(queryRef);
  // console.log(message);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    const uid = auth.currentUser?.uid;
    const photoURL = auth.currentUser?.photoURL;

    await firestore.collection('message').add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('');

    scroll.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg: DocumentData) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}

        <span ref={scroll}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
};

export default ChatRoom;

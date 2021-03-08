import db from '../db/firestore';

const firebaseDB = async (collection) => {
  const api = await db.collection(collection).get();

  return api;
};

export const fetchChats = async () => {
  const api = await firebaseDB('chats');
  const data = api.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return data;
};

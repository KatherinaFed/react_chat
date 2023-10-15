import { Message } from "../shared/types"

export const convertDocToMessage = (doc: any): Message => {
  const message: Message = {
    uid: doc.id,
    text: doc.data().text,
    createdAt: doc.data().createdAt,
    photoURL: doc.data().photoURL,
  }
  return message
}
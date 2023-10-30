import { auth } from "../config/firebase"
import { Message } from "../shared/types"

export const convertDocToMessage = (doc: any): Message => {
  console.log(doc.id)

  const message: Message = {
    uid: doc.id,
    text: doc.data().text,
    createdAt: doc.data().createdAt,
    photoURL: doc.data().photoURL,
  }
  return message
}
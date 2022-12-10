export async function loadData() {
    const res = await fetch('http://localhost:3000/api/GuestBook', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })

    const data = await res.json()

    return data
}

let chat = [];
const delay = () => new Promise((res) => setTimeout(() => res(), 800));

export async function getChat() {
  await delay();
  return chat;
}

export async function addChat(message) {
 chat.unshift(message)
 await delay();
  return chat;
}
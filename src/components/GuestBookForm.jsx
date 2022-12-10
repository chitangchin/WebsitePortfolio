import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import useSWR from "swr";
import { useSession } from 'next-auth/react';
import { getChat, addChat } from "../pages/api/chat";

export default function App() {
  const { data: session } = useSession();
  const [text, setText] = useState("");
  const { data, mutate } = useSWR("/api/chat", getChat);

  async function addEntry(text, user) {
    const res = await fetch('/api/GuestBook', {
      body: JSON.stringify({
        body: text,
        session: user
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
  }
  return (
    <div>
      <Toaster toastOptions={{ position: "bottom-center" }} />
      <form className="relative my-4" onSubmit={(ev) => ev.preventDefault()}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
          className="pl-4 pr-32 py-2 mt-1 ring-2 ring-black  block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          type="submit"
          className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-700 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
          onClick={async () => {
            setText("");
            addEntry(text, session)
            const newChat = {
              id: Date.now(),
              text
            };
            try {
              await mutate(addChat(newChat), {

                rollbackOnError: true,
                revalidate: false
              });

              toast.success("Successfully added the new item.");
            } catch (e) {
              toast.error("Failed to add the new item.");
            }
          }}
        >
          Add
        </button>
      </form>
      <ul>
        {data
          ? data.map((message) => {
            return <li key={message.id} className="flex flex-col mt-10">
              {message.text} 
              <br/> 
              {session.user.name}
            </li>;
          })
          : null}
      </ul>
    </div>
  );
}

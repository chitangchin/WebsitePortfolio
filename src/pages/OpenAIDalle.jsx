import { useState } from 'react';
import Image from "next/image"

export default function OpenAIDalle() {
    const [prompt, setPrompt] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [loading, setLoading] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(1);
        const response = await fetch('/api/Dalle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt
            })
        });
        const imageResponse = await response.json();
        // setImageURL(imageResponse.imageURL)
        setImageURL(imageResponse.imageURL);
        setLoading(0);
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (imageURL !== '' && loading === 0) {
        return (
            <div>
                <form className="ring-2 ring-black dark:ring-white rounded-xl">
                    <button className="text-3xl place-self-center rounded-xl p-2 bg-black dark:bg-white dark:text-black text-white" onClick={handleSubmit}>Submit</button>
                    <input type="text" id="prompt" name="prompt" className="mx-5 text-3xl bg-transparent" onChange={(e) => setPrompt(e.target.value)} placeholder="Add a prompt here ..."></input>
                </form>

                <div className="mt-5">
                    <Image
                        alt="dalle image"
                        src={imageURL}
                        width={2250}
                        height={1390}
                    />
                </div>
            </div>
        )
    }

    return (
        <div>
            <form className="ring-2 ring-black dark:ring-white rounded-xl">
                <button className="text-3xl place-self-center rounded-xl p-2 bg-white dark:bg-black dark:text-white text-black dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white " onClick={handleSubmit}>Submit</button>
                <input type="text" id="prompt" name="prompt" className="mx-5 text-3xl bg-transparent" onChange={(e) => setPrompt(e.target.value)} placeholder="Add your prompt here ..."></input>
            </form>
            <p className="my-10 ring-2 dark:ring-white ring-black rounded text-xl">
                Here are some words I found triggers the automatic filter system and doesnt render an image:
<br></br>
<br></br>
                Riot
                <br></br>
                Warrior
                <br></br>
                Battle
                <br></br>
                Fighting
                <br></br>
                Any real names
                <br></br>
                Anything that sounds like violence
                <br></br>
                Anything that can be mistaken as terrorism
                <br></br>
                <br></br>
                 Please use with this in mind
            </p>

        </div>
    )
}

function Loading() {
    return <div>Loading...</div>
}
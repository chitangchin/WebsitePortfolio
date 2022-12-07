// import { Configuration, OpenAIApi } from "openai";

// const config = new Configuration({  
//     apiKey: "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",
// });

// const openai = new OpenAIApi(config);

// const prompt = "write what you want to generate here";

// export default async function handler(req, res) {
//     // const response = await openai.createImage({
//     //     prompt,
//     //     n: 1,
//     //     size: "1024x1024",
//     // });
    
//     // const image = response.data.data[0].url;
//     // console.log(image)

//     res.status(200).json({image:{url:"asdadafadad"}})
// }

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: "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",
});

export default async function handler(req, res) {
   if (!req.body.prompt) return res.status(400).json({message: 'Pass in prompt field for image generation'});
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
        prompt: req.body.prompt,
        n: 1,
        size: "1024x1024",
    });

    if (!response.data) throw new Error('Unable to get image');
    console.log('received url ' + response.data.data[0].url);

    res.status(200).json({ imageURL: response.data.data[0].url })
}
# Chatify
## What is Chatify ?
 Chatify is an advanced AI-powered tool that enables you to interact seamlessly with any website or document (including PDFs) using natural language. Whether you're looking to extract specific data, automate tasks, or gain insights, Chatify makes it possible with ease. Best of all, it's free and accessible to everyone.

## Video Link (Vimeo) 
https://vimeo.com/1025332074?share=copy

## Inspiration
I first thought of creating a tool using the api for students and teachers that can generate multiple choice questions for the students to practice with from a given pdf or csv file. I also created a prototype of it at https://summarizepdf.vercel.app/ but while creating the backend I ran into various problems of adding plugins and various other things and It came into my mind how much data this students or teachers are going to share with multiple models which are not secure. This is the repository link of the prototype https://github.com/Gitstar-OC/one made for students and teachers before 4 days.

But then I got the idea of why not to create a whole user centered application to protect their data and privacy while also using the technologies, so I created Chatify.

## What it does
Chatify is like a combination of various features from multiple ai websites like perplexity, openai and if you want to change or use multiple plugins you can also use meta, claude and many other things. Chatify help's you create and chat with Provided-API model locally while removing all of the third party services that you will be using along the way to do it.

It removes perplexity as a middle man to search website's directly through open ai (which if used may store data for it's own responses and training) It has the feature of uploading and letting gpt-4o read pdf which is not possible with just an api key if someone wanted to use. It was also my first problem if I can summarize pdf or not using the api and what I might be adding to it. It has an option to create various memories in it which is still developing and It will be fixed today as I talked with Yash about the additional features.


### Features
- User friendly interface 
- Realtime updates
- Dynamic routing
- Supports almost all ai
- Chat with websites
- Chat with PDFs
- Chat with CSVs
- Chat with notes

### Tech Stack

This project is by the following tech stack:

- Nextjs 14  -> because nextjs 15 was throwing legacy-peer-deps error for various libraries and packages like shadcn ui and acternity ui. **So I took my old nextjs 14 project which has some configuration in it already and modified it**.
- Typescript
- Tailwind CSS
- Supabase
- Upstash 
- Acternity UI
- Shadcn UI

## How I built it
I created the Chatify frontend taking some inspiration from my own previous prototype within a day while I also used numbers of components from shadcn ui and acternity ui along with other libraries. For the database and backend I have used supabase and upstash to send querries, store data locally. Various things have been used and the backend took me the most time while I am still adding more tables in the database.

## Challenges we ran into
This is the hardest feat till now for me that I have achieved getting various errors from supabase, sendign those querries to upstash, upstash will update it and send the querry to supabase while also to the frontend and to store the chats, creating a memory or space to create and store data. Make sure that the bucket only takes pdf and csv files. Adding google authentication for this so that you can do the tasks fast and the database can be secure with a better authentication. Fixing various server issues which took me 9 to 10 hours to do this things and all of the other problem I ran into while the api was changed sometimes and to debug it. **Thanks for the mails with changed api keys or I would not have solved it**. 

## Accomplishments that we're proud of
This is the best thing I have created within this short amount of time and this will my 4th unique project for this hackathon. I am going to make it open source along with an MIT License so that everyone can do whatever they want with this, this is I think a big achievement. Getting to a bigger problem from a smaller problem by thinking about the requirements.

## What we learned
Various things like how to use supabase, upstash, particular concepts in this particular technologies, used google authentication for the first time in this project. 

## What's next for Chatify
More development in this particular project and to make it the leading ai tool for everyone which will be safer, open source and free for everyone along with privacy on them. Everyone will be able to host it on their own servers and modify it so that no one can access their data. Will also add a layer of cloud so that the model cannot create a persona about the user. 


## API keys to test it has been given to sent to the manager (Yash). If you don't have it then please mail me on 
- chandankarom07@gmail.com


## Environment Variables

To run this project, you will need to rename .env.example file to .env.local and add the keys provided. 

#### SUPABASE ENVS
`NEXT_PUBLIC_SUPABASE_URL= "Provided-API-KEYS"`
`NEXT_PUBLIC_SUPABASE_ANON_KEY= "Provided-API-KEYS"`
            
#### UPSTASH ENVS
`UPSTASH_REDIS_REST_URL= "Provided-API-KEYS"`
`UPSTASH_REDIS_REST_TOKEN= "Provided-API-KEYS"`
`QSTASH_TOKEN=  "Provided-API-KEYS"`
`UPSTASH_VECTOR_REST_URL= "Provided-API-KEYS"`
`UPSTASH_VECTOR_REST_TOKEN= "Provided-API-KEYS"`
`OPENAI_API_KEY= "Provided-API-KEYS"`


## Installation

Clone the github repo
```bash 
git clone https://github.com/gitstar-oc/chatify
cd chatify
```
Install dependencies with bun.

```bash
  bun add / npm install
  bun run dev / npm run dev
```

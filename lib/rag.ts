import { RAGChat, openai, upstash } from "@upstash/rag-chat";
import { redisDB } from "./redis";

const ragChat = new RAGChat({
  model: openai("gpt-4o"), // upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
  redis: redisDB,
  promptFn: ({ context, question, chatHistory }) =>
    `You are Chatify, an AI assistant created by Om Chandankar.
     Use the provided context and chat history to answer the question.
     If the answer or context isn't available, politely inform the user to disable RAG or just choose a space.
     ------
     Chat history:
     ${chatHistory}
     ------
     Context:
     ${context}
     ------
     Question: ${question}
     Answer:`,
});

async function AddPDFContext(namespace: string, src: string) {
  const res = await fetch(src);
  const buffer = await res.blob();
  await ragChat.context.add({
    type: "pdf",
    fileSource: buffer,
    pdfConfig: { splitPages: true },
    options: { namespace: namespace },
  });
  return true;
}

async function AddTXTContext(namespace: string, data: string) {
  await ragChat.context.add({
    type: "text",
    data: data,
    options: { namespace: namespace },
  });
  return true;
}

async function AddCSVContext(namespace: string, src: string) {
  await ragChat.context.add({
    type: "csv",
    fileSource: src,
    options: { namespace: namespace },
  });
  return true;
}

async function AddWEBContext(namespace: string, src: string) {
  await ragChat.context.add({
    type: "html",
    source: src,
    config: { chunkOverlap: 50, chunkSize: 200 },
    options: { namespace: namespace },
  });
  return true;
}

async function RemoveContext(namespace: string, src: string) {
  await ragChat.context.delete({ id: "1", namespace: namespace });
  return true;
}

async function GetChatHistory(chatId: string) {
  const MsgsHistory = await ragChat.history.getMessages({
    sessionId: chatId,
    amount: 100,
  });
  return MsgsHistory;
}

export {
  ragChat,
  GetChatHistory,
  AddCSVContext,
  AddPDFContext,
  AddTXTContext,
  AddWEBContext,
};

// Input in the search box and we get result
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    //destructure the request object to get the body
    const {messages , sessionId} = await request.json();

    //Take only the last message

    const lastMessage = messages[messages.length - 1].content;

    //response object
    const response = await ragChat.chat(lastMessage, { streaming: true, sessionId });

  return aiUseChatAdapter(response);
}
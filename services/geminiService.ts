import { GoogleGenAI } from "@google/genai";
import { Tent } from "../types";

// Initialize Gemini Client
// Note: process.env.API_KEY is guaranteed to be available in this environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "NomadGuide", an expert AI camping assistant for "NomadNest", a premium tent rental service.
Your goal is to help users choose the perfect tent for their trip.

Here is our current inventory of tents:
1. "Solo Hiker Lite" (1 Person, Ultra-lightweight 1.2kg, 3-Season). Great for solo backpacking.
2. "Duo Trekker" (2 Person, 2.5kg, 3-Season). Perfect for couples or close friends.
3. "Family Basecamp" (4 Person, Spacious, Standing height, 4-Season). Ideal for families or car camping.
4. "Glamp King Bell" (6 Person, Canvas, Luxury, Heavy duty). For luxury glamping experiences.

When a user asks for advice:
- Ask them about their destination (weather, terrain) and group size if not provided.
- Recommend one of our specific tents based on their needs.
- Provide general camping tips (e.g., setting up in wind, keeping warm).
- Keep responses concise, friendly, and adventurous.
- Use emojis occasionally 🌲🔥⛺.
`;

export const sendMessageToGemini = async (
  history: { role: string; text: string }[],
  message: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash-latest'; // Using Flash for speed/chat
    
    // Construct the conversation history for the model
    // We only send the last few turns to keep context but avoid token limits if it gets long
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message: message });
    return result.text || "抱歉，我現在有點迷路了（無法連接到 AI）。請稍後再試！";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，我們的 AI 嚮導現在正在休息。請稍後再試！";
  }
};
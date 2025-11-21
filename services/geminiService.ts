import { GoogleGenAI } from "@google/genai";
import { WorkoutRequest } from '../types';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWorkoutPlan = async (request: WorkoutRequest): Promise<string> => {
  try {
    const prompt = `
      Act as a world-class personal trainer at "Daccan Fitness Center".
      Create a detailed workout plan based on the following user profile:
      
      - Goal: ${request.goal}
      - Fitness Level: ${request.level}
      - Days Available per Week: ${request.daysPerWeek}
      - Duration per Session: ${request.duration} minutes
      - Equipment Available: ${request.equipment}

      Structure the response using Markdown formatting. 
      Include:
      1. A motivating intro welcoming them to Daccan Fitness.
      2. A weekly schedule split.
      3. Specific exercises with sets and reps.
      4. Diet tips briefly at the end.
      
      Keep the tone energetic, professional, and encouraging.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are an elite fitness coach for Daccan Fitness Center. Your tone is motivating, intense, and professional.",
      }
    });

    return response.text || "Sorry, I couldn't generate a plan right now. Please try again.";
  } catch (error) {
    console.error("Error generating workout:", error);
    return "An error occurred while connecting to the Daccan Fitness AI. Please check your connection and try again.";
  }
};
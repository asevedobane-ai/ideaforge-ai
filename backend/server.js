import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

app.get("/", (req, res) => {
    res.send("IdeaForge AI Backend is online 🚀");
});

app.post("/generate", async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({
                error: "No prompt provided"
            });
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });

        const result = await model.generateContent(
            prompt
        );

        const answer = result.response.text();

        res.json({
            answer: answer
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Gemini AI failed"
        });
    }
});


app.listen(3000, () => {
    console.log(
        "IdeaForge AI backend running on port 3000"
    );
});

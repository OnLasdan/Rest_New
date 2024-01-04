const fetch = require('node-fetch')

async function deepenglish(you_qus) {
const messages = [
        { role: "assistant", content: "Kamu adalah asisten AI yang siap membantu segala hal." },
        { role: "user", content: you_qus }
    ];

    try {
        const response = await fetch("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
            method: "POST",
            headers: { Accept: "text/event-stream", "Content-Type": "application/json" },
            body: JSON.stringify({ messages })
        });

        return await response.json();
    } catch (error) {
        console.error("An error occurred during data fetching:", error);
        throw error;
    }
}

module.exports = deepenglish
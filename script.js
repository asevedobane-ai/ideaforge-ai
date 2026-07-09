async function generate(type) {

    let prompt = "";

    if (type === "game") {
        prompt = "Create a unique video game idea with a name, gameplay, and features.";
    }

    if (type === "business") {
        prompt = "Create a unique business idea with a name and description.";
    }

    if (type === "writing") {
        prompt = "Create an original story idea with a title and plot.";
    }

    document.getElementById("result").innerHTML =
    "<h2>🤖 Thinking...</h2>";

    try {

        const response = await fetch("YOUR_RENDER_URL/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: prompt
            })
        });

        const data = await response.json();

        document.getElementById("result").innerHTML =
        "<h2>✨ AI Result</h2><p>" + data.answer + "</p>";

    } catch (error) {

        document.getElementById("result").innerHTML =
        "❌ AI connection failed";

    }
}

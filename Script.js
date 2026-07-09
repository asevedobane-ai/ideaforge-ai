// IdeaForge AI Script

function start() {
    alert("Welcome to IdeaForge AI! 🚀");
}

function generate(type) {

    let result = "";

    if (type === "game") {
        let ideas = [
            "A survival game where players explore a mysterious abandoned city.",
            "A multiplayer horror game where players escape a changing maze.",
            "A futuristic battle game with customizable robots."
        ];

        result = ideas[Math.floor(Math.random() * ideas.length)];
    }

    if (type === "business") {
        let names = [
            "NovaLabs",
            "PixelForge",
            "BrightHive",
            "FutureFlow",
            "VisionWorks"
        ];

        result = "Business name idea: " + names[Math.floor(Math.random() * names.length)];
    }

    if (type === "writing") {
        let stories = [
            "A hero discovers a hidden world beneath their hometown.",
            "A scientist creates an invention that changes the future.",
            "A mysterious message arrives from an unknown place."
        ];

        result = stories[Math.floor(Math.random() * stories.length)];
    }

    document.getElementById("result").innerHTML =
        "<h3>✨ AI Result</h3><p>" + result + "</p>";
}

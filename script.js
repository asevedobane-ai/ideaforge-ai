function start(){
    alert("Welcome to IdeaForge AI 🚀");
}


function generate(type){

    let result = "";


    if(type === "game"){
        let games = [
            "A survival game on a planet that changes every night.",
            "A multiplayer mystery game inside an abandoned city.",
            "A racing game where players build custom vehicles."
        ];

        result = games[Math.floor(Math.random()*games.length)];
    }


    if(type === "business"){
        let names = [
            "NovaLabs",
            "PixelForge",
            "FutureFlow",
            "BrightCore"
        ];

        result = names[Math.floor(Math.random()*names.length)];
    }


    if(type === "writing"){
        let stories = [
            "A hero discovers a hidden world under their city.",
            "A robot learns what it means to be human.",
            "A forgotten invention changes the future."
        ];

        result = stories[Math.floor(Math.random()*stories.length)];
    }


    document.getElementById("result").innerHTML =
    "<h2>✨ AI Result</h2><p>" + result + "</p>";

}

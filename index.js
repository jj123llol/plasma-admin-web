// <p style="margin: 5px;margin-bottom: 2px;padding-top: 10px;">tp (plr1) (plr2)</p>

var Life_In_Paradise_Commands = [
    "tp (plr1) (plr2)",
    "dupestroller (num)",
    "banlandsall -- old and should probably not be used..",
    "tpcar (plr) -- Most Likely dosent work on Executors with Bad Fire Touch",
    "revealusers / unrevealusers",
    "ghost / unghost",
    "kill2 (plr)",
    "jail (plr)"
]

for (let i = 0; i < Life_In_Paradise_Commands.length; i++) {
    var command = Life_In_Paradise_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "2px";
    el.style.paddingtop ="10px";
    document.getElementById("Life In Paradise").appendChild(el);
}

function addFunctionality(button,link, isSelf){
    if (isSelf){
        document.getElementById(button).onclick = function() {
            window.open(link,"_self");
        }
    }else{
        document.getElementById(button).onclick = function() {
            window.open(link);
        }
    }
}

addFunctionality("cmds", "/plasma-admin-web/commands", true) // Open The Command Thing OFC

addFunctionality("ds", "https://discord.gg/XPgzdFZtYw", false) // Open Discord

document.getElementById("Loadstring").onclick = function() {
    navigator.clipboard.writeText(document.getElementById("Loadstring").textContent);
}

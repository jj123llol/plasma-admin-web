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

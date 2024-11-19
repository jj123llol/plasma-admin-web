function addFunctionality(button,link, isSelf){
    if (isSelf){
        document.getElementById(button).onclick = function() {
            window.open(link,"_self");
        }
    }else{
        document.getElementById(button).onclick = function() {
            window.open(link,"_self");
        }
    }
}

addFunctionality("cmds", "/plasma-admin-web/commands", true) // Open The Command Thing OFC

addFunctionality("ds", "https://discord.gg/XPgzdFZtYw", false) // Open Discord

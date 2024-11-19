function addFunctionality(button,link){
    document.getElementById(button).onclick = function() {
        window.open(link);
    }
}

addFunctionality("cmds", "/plasma-admin-web/commands")

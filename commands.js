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

addFunctionality("MainPage", "/plasma-admin-web/", true) // Open The Command Thing OFC

// Add Commands
var Life_In_Paradise_Commands = [
    "tp (plr1) (plr2)",
    "dupestroller (num)",
    "banlandsall -- old and should probably not be used..",
    "tpcar (plr)",
    "revealusers / unrevealusers",
    "ghost / unghost",
    "kill2 (plr)",
    "jail (plr)",
    "white (plr)",
    "black (plr)",
    "bald (plr)",
    "noclothes (plr)",
    "slowkill (plr)",
    "noclothes (plr)",
    "fling (plr)",
    "banlands (plr)",
    "void (plr)",
    "bang (plr) / unbang",
    "antivoid / unantivoid",
    "kill (plr)",
    "loopkill (plr) / unloopkill",
    "kidnap (plr)",
    "slowkill2 (plr)",
    "rocket (plr)",
    "bring (plr)",
    "tweenbring (plr)",
    "fasttweenbring (plr)",
    "forceheart (plr) / unforceheart",
    "givestick (plr)",
    "dupewand (num)",
    "heartname",
    "car",
    "funnysign",
    "soft",
    "hard",
    "funnysignv2",
    "furrynamechanger / unfurrynamechanger",
    "afk / unafk",
    "removeclothes",
    "seat",
    "autounsit / unautounsit",
    "spamcolor / unspamcolor",
    "skintone (white/black)",
    "fairywand",
    "heart",
    "turkeyfling (plr)",
    "turkeyvoid (plr)",
    "strollerdick",
    "void2 (plr)",
    "removeseats",
    "bring2 (plr)",
    "banlands2 (plr)",
    "jail2 (plr)",
    "control (plr)",
    "attach (plr)"
]

var Adopt_And_Raise_baby_Commands = [
    "givemoney (num)",
    "setmoney (num)",
    "banlands (plr)",
    "fling (plr)",
    "tp (plr1) (plr2)",
    "bald (plr)",
    "black (plr)",
    "white (plr)",
    "rainbowstrol / unrainbowstrol",
    "bring (plr)",
    "rocket (plr)",
    "void (plr)"
]

var Rays_Mod_Commands = [
    "lockserver / unlockserver",
    "size (num)",
    "bighead",
    "paper",
    "headless",
    "fat",
    "tall",
    "banlands (plr)",
    "hp (num)",
    "loopkill (plr) / unloopkill (plr)",
    "rocket (plr)",
    "void (plr)",
    "loopbring (plr) / unloopbring (plr)",
    "fling (plr)",
    "ban (plr)",
    "freeze (plr) / unfreeze (plr)",
    "kill (plr)",
    "bring (plr)",
    "claim (plr)",
    "kick (plr)",
    "pumpking"
]

var AnrtherAdopt_Commands = [
    "tp (plr1) (plr2)",
    "dupestroller (num)",
    "ghost / unghost",
    "white (plr)",
    "black (plr)",
    "bald (plr)",
    "noclothes (plr)",
    "fling (plr)",
    "banlands (plr)",
    "void (plr)",
    "antivoid / unantivoid",
    "rocket (plr)",
    "bring (plr)",
    "tweenbring (plr)",
    "fasttweenbring (plr)",
    "afk / unafk",
    "removeclothes -- You know the drill.. need a good FTI",
    "seat",
    "autounsit / unautounsit"
]

var Adopt_A_Kid_Commands = [
    "givemoney (num)",
    "setmoney (num)",
    "banlands (plr)",
    "fling (plr)",
    "tp (plr1) (plr2)",
    "bald (plr)",
    "black (plr)",
    "white (plr)",
    "bring (plr)",
    "rocket (plr)",
    "void (plr)"
]

var Work_At_A_Pizza_Place_Commands = [
    "island (plr)",
    "kill (plr)",
    "bring (plr)",
    "skydive (plr)",
    "becomemanager",
    "kick (plr)",
    "resetvotes",
    "banlands (plr)"
]

var ZBM_Commands = [
    "pickupmoney",
    "getsamples",
    "sellsamples",
    "killboss",
    "kill (plr)",
    "loopkill (plr) / unloopkill (plr)",
    "killeverything",
    "killzombies"
]

var Live_Rich_Commands = [
    "kill (plr)",
    "nobaseplate",
    "kick (plr)",
    "shutdown",
    "btools",
    "drophats (num)",
    "clone (plr)",
    "korblox (plr)",
    "cripple (plr)",
    "nohum (plr)",
    "nolegs (plr)",
    "noarms (plr)",
    "nolimbs (plr)",
    "bald (plr)",
    "noclothes (plr)",
    "gear (id)"
]

var Shark_Bite_Commands = [
    "sharkcharms",
    "boatgui",
    "killall -- for when your shark",
    "decreaselag",
    "day",
    "night",
    "autofarm / autofarmoff",
    "esp",
    "nofog",
    "lobby",
    "sharktunnel",
    "island1",
    "island2",
    "bigisland",
    "cargo",
    "safeafk",
    "uselessoxygen",
    "nomines",
    "refreshsharkchance",
    "refreshhealth",
    "godmode",
    "fakeadmin"
]

var Break_in_2_Commands = [
    "btools",
    "kill (plr)",
    "bald (plr)",
    "kick (plr)",
    "noclothes (plr)",
    "remhumanoid (plr)",
    "nohrp (plr)",
    "getmedkit (num)",
    "getpizza (num)",
    "getapple (num)",
    "getcookie (num)",
    "getchips (num)",
    "getexpiredcola (num)",
    "getcola (num)",
    "getrainbowpizza (num)",
    "getrainbowbox (num)",
    "maxstats",
    "savedog",
    "getmouse",
    "getgoldpizza (num)",
    "getnpcs"
]

var KAT_Commands = [
    "goto (plr)",
    "disarm (plr)",
    "playsong (id)",
    "GunMods -- Executor Must Support GetGc"
]

var brookhaven_Commands = [
    "void (plr)",
    "deathvoid (plr)",
    "bring (plr)",
    "deathbring (plr)",
    "banlands (plr)",
    "deathbanlands (plr)",
    "skydive (plr)",
    "deathskydive (plr)",
    "rocket (plr)",
    "fling (plr)",
    "jail (plr)",
    "deathjail (plr)",
    "tp (plr) (plr2)",
    "deathtp (plr) (plr2)"
]

var PrisonLife_Commands = [
    "superpunch",
    "taserbypass",
    "arrestall",
    "escape",
    "nocards",
    "killaura",
    "prison",
    "yard",
    "crimbase",
    "rainbowguns",
    "grabknife",
    "jeff"
]

for (let i = 0; i < Life_In_Paradise_Commands.length; i++) {
    var command = Life_In_Paradise_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("Life In Paradise").appendChild(el);
}

for (let i = 0; i < Adopt_And_Raise_baby_Commands.length; i++) {
    var command = Adopt_And_Raise_baby_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("Adopt And Raise Baby").appendChild(el);
}

for (let i = 0; i < Rays_Mod_Commands.length; i++) {
    var command = Rays_Mod_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("Rays Mod").appendChild(el);
}

for (let i = 0; i < AnrtherAdopt_Commands.length; i++) {
    var command = AnrtherAdopt_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("AnrtherAdopt").appendChild(el);
}

for (let i = 0; i < Adopt_A_Kid_Commands.length; i++) {
    var command = Adopt_A_Kid_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("Adopt A Kid").appendChild(el);
}

for (let i = 0; i < Work_At_A_Pizza_Place_Commands.length; i++) {
    var command = Work_At_A_Pizza_Place_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("Work At").appendChild(el);
}

for (let i = 0; i < ZBM_Commands.length; i++) {
    var command = ZBM_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("ZBM").appendChild(el);
}

for (let i = 0; i < Live_Rich_Commands.length; i++) {
    var command = Live_Rich_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("Live Rich").appendChild(el);
}

for (let i = 0; i < Shark_Bite_Commands.length; i++) {
    var command = Shark_Bite_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("sharkBite").appendChild(el);
}

for (let i = 0; i < Break_in_2_Commands.length; i++) {
    var command = Break_in_2_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("break in 2").appendChild(el);
}

for (let i = 0; i < KAT_Commands.length; i++) {
    var command = KAT_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("KAT").appendChild(el);
}

for (let i = 0; i < brookhaven_Commands.length; i++) {
    var command = brookhaven_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("BH").appendChild(el);
}

for (let i = 0; i < PrisonLife_Commands.length; i++) {
    var command = PrisonLife_Commands[i]
    var el = document.createElement('p');
    el.innerHTML = command;
    el.style.margin = "5px";
    el.style.marginbottom = "8px";
    el.style.paddingtop ="10px";
    document.getElementById("PL").appendChild(el);
}

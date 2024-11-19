var Life_In_Paradise_Commands = [
    "tp (plr1) (plr2)",
    "dupestroller (num)",
    "banlandsall -- old and should probably not be used..",
    "tpcar (plr) -- Most Likely dosent work on Executors with Bad Fire Touch",
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
    "givestick (plr) -- broken with bad fire touch",
    "dupewand (num)",
    "heartname",
    "car",
    "funnysign",
    "soft",
    "hard",
    "funnysignv2",
    "furrynamechanger / unfurrynamechanger",
    "afk / unafk",
    "removeclothes -- need good fire touch",
    "seat",
    "autounsit / unautounsit",
    "spamcolor / unspamcolor -- need good fire touch",
    "skintone (white/black) -- need good fire touch",
    "fairywand",
    "heart"
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

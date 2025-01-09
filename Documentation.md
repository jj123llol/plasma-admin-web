# This Is The Offical Documentation Of Plasma Admin.

To Start Off, Plasma Admin Is A Universal Admin Script, With Plugins And Custom Commands For Certain Games.


# Plugins

You Can Download Or Make Plugins, Locate Workspace > Plasma Admin > Plugins, This Is What You'll Put The Plugins You Download Or Create.


# Making A Plugin

The "addcmd" Function Is Used To Make A Command, The Args Are The Name, What Shows Up On The Cmd List, And The Function.

The "getPlayer" Returns A List Of Player Instances With The Users That Contain The Inputed String In Their Display Or User. You Can Also Put "all", "others", "random" or "me".

Example Of A Command:

addcmd("kill", "kill (plr)", function(plr)
    local targets = getPlayer(plr)
    for _, target in pairs(targets) do
       targetChar = target.Character or target.CharacterAdded:Wait()
       targetChar:WaitForChild("Humanoid").Health = 0
    end
end)

The "|" Symbol Can Be Used To Seperate Different Alias For The Command, addcmd("kill|ckill|krill", "kill (plr)", function()) Would Be An Example Of This.

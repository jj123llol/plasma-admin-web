# This Is The Offical Documentation Of Plasma Admin.

To Start Off, Plasma Admin Is A Universal Admin Script, With Plugins And Custom Commands For Certain Games.

Plasma Admin Fully Encourages The Use And Sharing Of Plugins.


# Plugins

You Can Download Or Make Plugins, Locate Workspace > Plasma Admin > Plugins, This Is What You'll Put The Plugins You Download Or Create.


# Making A Plugin


# Adding Commands

The "addcmd" Function Is Used To Make A Command, The Args Are The Name, What Shows Up On The Cmd List, The Function, And To Split The Args Or Not.

The "getPlayer" Returns A List Of Player Instances With The Users That Contain The Inputed String In Their Display Or User. You Can Also Put "all", "others", "random" or "me".

Example Of Commands:

addcmd("kill", "kill (plr)", function(plr)
    local targets = getPlayer(plr)
    for _, target in pairs(targets) do
       targetChar = target.Character or target.CharacterAdded:Wait()
       targetChar:WaitForChild("Humanoid").Health = 0
    end
end, true)

The True Means The Arguments Will Be Split, Allowing Multiple Args To Be Put In, Like You Could Do A Command That Lowers A Players Health To A Specific Value.

addcmd("print", "print (msg)", function(msg)
    print(msg)
end, false)

The False Means The Arguments Will Stay As One Instead Of Splitting up

The "|" Symbol Can Be Used To Seperate Different Alias For The Command, addcmd("kill|ckill|krill", "kill (plr)", function()) Would Be An Example Of This.


# Creating Notifications

The "createnotification" function Is Used To Make Notifications For Your Plugins

createnotification("Admin", "This Is A Notification", 5)

Would Create A Notification That Says "Admin: This Is A Notification" For Five Seconds.


# Posting Your Plugin

We Have A Plugins Channel In The Discord To Post Your Script, To Ensure Saftey All Plugins MUST Be Unobfuscated.


# Running Commands

The Function "runcommand" Can Be Used To Run Commands In The Admin.

runcommand("re", {})

The Table Passed Is The Args Of The Command, While The String Is The Command To Run.

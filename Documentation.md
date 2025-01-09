# This is the offical documentation of Plasma Admin.

To start off, Plasma Admin is a universal admin script with plugins, and custom commands for certain games.

Plasma Admin fully encourages the use and sharing of plugins.


# Plugins

You can download, or make plugins. Locate workspace > Plasma Admin > plugins. This is where You'll put the plugins you download or create.


# Making A Plugin


## Adding Commands

The "addcmd" function is used to make a command. The args are the name, what shows up on the cmd list, the function, and whether to split the args or not.

The "getPlayer" function returns a list of player instances with the users that contain the inputed string in their display, or user. You can alsopPut "all", "others", "random" or "me".

Example of commands:

addcmd("kill", "kill (plr)", function(plr)
    local targets = getPlayer(plr)
    for _, target in pairs(targets) do
       targetChar = target.Character or target.CharacterAdded:Wait()
       targetChar:WaitForChild("Humanoid").Health = 0
    end
end, true)

The true means the arguments will be split, allowing multiple args to be put in. 
A example would be a command that lowers a players health to a specified value.

addcmd("print", "print (msg)", function(msg)
    print(msg)
end, false)

The false means the arguments will stay as one instead of splitting up

The "|" symbol can be used to seperate different alias for the command, addcmd("kill|ckill|krill", "kill (plr)", function()) would be an example of this.


## Creating Notifications

The "createnotification" function is used to make notifications for your plugins

createnotification("Admin", "This Is A Notification", 5)

Would create a notification that says "Admin: This Is A Notification" for five seconds.


## Posting Your Plugin

We have a plugins channel in the discord to post your script, to ensure saftey all plugins MUST be unobfuscated.


# Running Commands

The function "runcommand" can be used to run commands in Plasma Admin.

runcommand("re", {})

The table passed is the args of the command, while the string is the command to run.

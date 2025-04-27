# What is the "Plasma.Settings" file?

The file "Plasma.Settings" holds the settings for Plasma, this can include: gui colors, commands to autorun, and FOV.

You can share these files among friends or with the server to share your settings with them.

# How to change settings?

You can open the "Plasma.Settings" file with notepad, or any text editor and manually change the settings from there.

You can also edit the file via a script, after the loadstring you can do
```lua
plasmaadmin['settings']['setting'] = value
update_settings()
```
as am example:
```lua
plasmaadmin['settings']['skip_loadscreen'] = true
update_settings()
```

# Using settings in a plugin.

if you are a plguin developer you are able to store settings within Plasma Admin's settings file.


## update_settings function
the "update_settings" function saves the current settings to the "Plasma.Settings" file.


## set_settings_table function
To add tables for RGB, or any other settings you can do,
```lua
set_settings_table("table", values)
```

an example would be

```lua
set_settings_table('cmdbar_color', 0, 0, 0)
```
which would set the cmdbar_color value to {0, 0, 0}



## delitem_settings_table function


the delitem_settings_table function deletes a value from a table.

lets say you have a setting called "test table" that looks like this
```lua
['test_table'] = {
    ['bleh'] = "value",
    ['blez'] = "value"
}
```
you could do

```lua
delitem_settings_table('test_table', 'bleh')
```
and it would turn the table into this:

```lua
['test_table'] = {
    ['blez'] = "value"
}
```


## get_settings_table function

the get_settings_table function can be used to get a color3 or vector3 from a table.

example:

```lua
get_settings_table('cmdbar_color', "color3") -- color3 could also be vector3
```
would return Color3.fromRGB of the table cmdbar_color

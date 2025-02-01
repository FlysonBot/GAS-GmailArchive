# GAS-GmailArchive
A Google Apps Script (GAS) to keep your gmail inbox clean by archiving unneeded emails.

# What do I need to get started

All you need is a browser and an Google account in order to use this script to clean your Gmail inbox. It would work on personal account as well.

If you noticed that not all emails gone away after running the script, you might have too many email in your inbox. Google have a restriction on how many emails the script can retrieve at a time. You might want to run the script multiple times or simply search "before:yyyy-mm-dd" (where yyyy-mm-dd is a date) and archive everything you found.

# How to Use

1. Open [Google Apps Script homepage](https://script.google.com/home)

2. Create a new project

3. Go to the project settings and turn on the option to show 'appsscript.json'

4. Copy and paste the content from [appsscript.json](https://github.com/FlysonBot/GAS-GmailArchive/blob/main/appsscript.json) to the one in your project and save.

5. Copy and paste the code from [cleanGmailInbox.gs](https://github.com/FlysonBot/GAS-GmailArchive/blob/main/cleanGmailInbox.gs) to your project and save.

6. Run emailArchive function (should be selected by default) using the play button displayed when opening the .gs file.

7. Give permission to run the script.

8. To automate, go to Trigger on the left and set up a trigger to run once the emailArchive function regularly (i.e. once a day at 1 am)

# Issues, Bugs, or Suggestions

Open up an issue [here](https://github.com/FlysonBot/GAS-GmailArchive/issues)

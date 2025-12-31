Creeping Dark III
=================

Creeping Dark III is the Minecraft 1.20 continuation of the Creeping Dark series. The premise is basically the same, but the mod selection has changed quite a bit, and the quest mechanics have changed to match.

Right now, CD3 should be considered to be in "alpha" stage. It has had very little playtesting, and is probably still quite buggy.

Installation
------------

The more adventurous of you that want to check out the pack can download it from the [Releases](https://github.com/nathanrsfba/creeping-dark-3/releases) page. The releases will be in the form of a `.zip` file that can be imported into any CurseForge-compatible launcher.

### Installation Using GDLauncher ###

1. Download the latest alpha from the link above
2. Click the `+Add Instance` button in GDLauncher
3. Select Import
4. Select Curseforge Zip
5. Give it the file you downloaded
6. Click `Begin Import`

GDLauncher importing seems to be a bit flaky right now, so it may take several attempts.

### Installation Using Curseforge Launcher ###

1. Download the latest alpha from the link above
2. Click the `Import` button in Curseforge
3. Click the `Choose .zip file` button
4. Give it the file you downloaded

### Creating a server ###

1. Install Java 21
2. Download [Forge](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html) installer for Minecraft 1.20.1, version 47.4.0 or later
3. Install the server somewhere. You can do it from the command line with a command similar to:
   ```
   java -jar forge-1.20.1-47.4.10-installer.jar --installServer
   ```
   This will install it to the current directory. Adjust the filename to match the file you downloaded.
4. Install a copy of Creeping Dark III as described above
5. Copy the following directories to the server directory:
   * config
   * defaultconfigs
   * kubejs
   * mods
6. Start the server with `run.bat` or `run.sh` depending on whether you're on Windows or a Unix-like system.
7. Edit `eula.txt` as directed and start the server again.
8. Edit `server.properties` and ensure that `allow-flight=true`. If it's not, change it and restart the server. It might also be a good idea to bump `view-distance` and `simulation distance` up to 12, otherwise the "plague" may not be visible from the ground in multiplayer
9. Run the server or upload it to your hosting platform.

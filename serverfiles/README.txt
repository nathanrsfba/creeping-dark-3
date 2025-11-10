! This directory contains files used to create the official server pack for
! curseforge.
! 
! See the tools/mkserverpack.sh file and related documentation in
! tools/readme.md.
!
! Everything is this file not preceeded by a ! will be copied into the
! README.txt file in the final pack
!
! THIS IS A WORK IN PROGRESS
! In particular, I need to edit and test go.bat for Windows
Creeping Dark III Server Pack
=============================

This server pack should have everything you need to run a Creeping Dark
server. It includes:

* A batch file (for Windows) and a shell script (for Unix) that will
  run the server
* The mods and configuration required to run the pack
* A default server.properties file

To use it, do the following:

1. Install Java 21 if you don't already have it.
2. If Java isn't in your path (or you need to run a specific version), you can
   set an environnent variable called JAVAEXE to point to the proper Java
   executable.

   On Windows this looks something like:
   ```
   set JAVAEXE=c:\Program Files\Java\jdk1.8.0_191\bin\java.exe
   ```

   On Unix this looks something like:
   ```
   JAVAEXE=/usr/lib64/openjdk8/bin/java ./go.sh
   ```

   Adjust the paths as appropriate to your installation. You can also edit the
   go.bat or go.sh file to set it.
3. From the command line, run go.bat or go.sh. On the first run, this will
   download and install a Forge server in the current directory. Once that's
   done, edit the `eula.txt` file and accept the EULA.
4. Run the server again. Once the server has finished starting up, check the
   server.properties file for any changes you want to make.

   In particular make sure "enable-command-block" is set to "true", or the
   custom dungeons in the pack won't work. It might also be a good idea to set
   allow-flight=true, as there are legit flight items in the pack.

   The server pack contains a copy of server.properties with these changes
   made, but it's good to verify that Minecraft hasn't mangled them.

   Shutdown and restart the server if you make any changes.
6. The server is now ready for use, or to upload to your hosting platform.

Manual Setup
------------

If for some reason the batch or shell script doesn't work, you can install and
launch the server as following:

First of all, download a copy of the Forge installer from
files.minecraftforge.net, and place it in this directory. You'll need Forge
for Minecraft 1.20.1, version 47.4.0. Later versions for 1.20.1 may also


The Forge installer can be run on the command line as follows:

```
java -jar forge-1.20.1-47.4.0-installer.jar --installServer .
```

This will install the server in the current directory. You can also run the
installer in GUI mode (if your system is appropriately equipped) by omitting
the options after the .jar file above, or in most cases just double-clicking
the .jar in your file manager.

Once the server is installed, the server can be started by running the
`run.bat` or `run.sh` files created by the installer. If you want to add
options to the command line, add them to `user_jvm_args.txt`.

The rest of the setup continues as described in the previous section.


#!/bin/sh

# You can also put the following options into a file called go-opts.sh
# (I do this to keep this file identical to the copy in the repo)
# You could also put any commands you want executed before starting the server
# in there.
# If there is a file called go-exit.sh, it will be sourced when the server
# exits. $STATUS will be set to the exit status of the server.

# If you need to specify the path to java:
# JAVAEXE="/usr/lib64/openjdk8/bin/java"

# Minecraft and Forge versions
MCVER=1.20.1
FORGEVER=47.4.0
FORGEURL="https://maven.minecraftforge.net/net/minecraftforge/forge/$MCVER-$FORGEVER/forge-$MCVER-$FORGEVER-installer.jar"

INSTALLER="forge-$MCVER-$FORGEVER-installer.jar"

if [ -e go-opts.sh ]; then
    . ./go-opts.sh || exit 1
fi

JAVAEXE=${JAVAEXE:-java}

if ! which "$JAVAEXE" > /dev/null 2>&1; then
    echo "Couldn't find a Java exeutable. Try setting JAVAEXE to the full path"
    echo "of a Java 8 executable before running this script"
    exit 1
fi

# See if we need to run the installer
if [ ! -d libraries ]; then
    # See if we need to download the installer
    if [ ! -e "$INSTALLER" ]; then
        if which wget > /dev/null 2>&1; then
            echo "Downloading installer using wget..."
            wget "$FORGEURL" || noinstall=1
        elif which curl > /dev/null 2>&1; then
            echo "Downloading installer using curl..."
            curl "$FORGEURL" --output "$INSTALLER" || noinstall=1
        else
            noinstall=1
        fi
        if [ $noinstall ]; then
            echo "Couldn't download the Forge installer"
            echo "Please download the following file and place it in this directory:"
            echo "$FORGEURL"
            exit 1
        fi
    fi
    echo "Running installer..."
    "$JAVAEXE" -jar forge-$MCVER-$FORGEVER-installer.jar --installServer . || exit 1
fi

# Run the server
echo "Starting server..."
# Forge requires a configured set of both JVM and program arguments.
# Add custom JVM arguments to the user_jvm_args.txt
# Add custom program arguments {such as nogui} to this file in the next line before the "$@" or
#  pass them to this script directly
"$JAVAEXE" @user_jvm_args.txt @libraries/net/minecraftforge/forge/$MCVER-$FORGEVER/unix_args.txt "$@"
STATUS=$?

echo ""
echo "Server exited with status $STATUS. To restart, run:"
echo "$0"

if [ -e go-exit.sh ]; then
   . ./go-exit.sh || exit 1
fi


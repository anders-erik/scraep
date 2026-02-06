#!/bin/bash

# install necessary deps to run the project
#     - curl
#     - git
#     - nvm
#     - nodejs
#     - sqlite3


function install_nvm()
{
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
}

function install_nodejs()
{
    nvm install --lts
    nvm use --lts
}

function install_sqlite3()
{
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt-get update
        sudo apt-get install -y sqlite3
    else
        echo "Unsupported OS. Please install sqlite3 manually."
        exit 1
    fi
}

install_nvm
install_nodejs
install_sqlite3
echo "Scraep successfully bootstrapped."
exit 0
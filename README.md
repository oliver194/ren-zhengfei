# Ren Zhengfei bot
#### Originally made for the Huaweicord Discord Server
#### Node.JS 16 or above is recommended.
&nbsp;
## Setup instructions
1. git clone the repo: `git clone https://github.com/oliver194/ren-zhengfei.git`
2. Install Node.JS from [here (Windows/MacOS)](https://nodejs.org/en/download/), or from your Linux package manager (pkg usually named `node`. Also install `npm`)
3. Install required dependendies via `npm install`
4. Set the required environment variables:
- Variabless:
  - ANIMAL_CHANNEL_ID: Channel ID for all the Animal API commands
  - DISCORD_TOKEN: your Discord bot's token
- How to:
  - On Windows:
    - `set ANIMAL_CHANNEL_ID=<channelID>`
    - `set DISCORD_TOKEN=<token>`
    - `set GUILD_ID=<guildID>`
    - `set CLIENT_ID=<clientID>`
    - `set PREFIX=!`
  - On Linux/MacOS:
    - `export ANIMAL_CHANNEL_ID=<channelID>`
    - `export DISCORD_TOKEN=<token>`
    - `export GUILD_ID=<guildID>`
    - `export CLIENT_ID=<clientID>`
    - `export PREFIX=!`
6. Run the bot - Do so by running `node .` in your terminal

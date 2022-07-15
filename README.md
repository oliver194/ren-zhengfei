# Ren Zhengfei bot
#### Originally made for the Huaweicord Discord Server
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
  - On Linux/MacOS:
    - `export ANIMAL_CHANNEL_ID=<channelID>`
    - `export DISCORD_TOKEN=<token>`
5. Run the bot - Do so by running `node .` in your terminal

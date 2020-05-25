# ikea-bot

To run inside docker, create a `docker-compose.yaml` file on your server:

```
version: '2'
services:
    app:
        image: xorik/ikea-bot:latest
        environment:
            ITEM_ID: 70261150 # Your ikea item id
            BOT_TOKEN: '' # Your telegram bot token
            BOT_CHAT_ID: 12345 # Telegram chat id
            INTERVAL: 60 # minutes
```

And run `docker-compose start`

To run without docker clone the repo and run:
```
npm i
npm run build
ITEM_ID=70261150 BOT_TOKEN='' BOT_CHAT_ID=12345 INTERVAL=60 npm run start
```

Replace item ID, bot token and chat with your values

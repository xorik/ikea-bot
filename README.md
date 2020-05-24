# ikea-bot

To run, create a `docker-compose.yaml` file on your server:

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

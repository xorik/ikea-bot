#!/usr/bin/env bash

docker build -t xorik/ikea-bot:0.1 -t xorik/ikea-bot:latest .
docker push xorik/ikea-bot

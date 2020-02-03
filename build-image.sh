#!/bin/bash

echo "build docker image for the application"

docker build . -t app1-node-ts-api:latest;
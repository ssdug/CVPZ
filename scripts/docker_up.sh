#!/bin/bash
rebuild=false
background=false

for args in "$@"
do
    if [ $args = "-r" ]; then
        rebuild=true
    fi
    if [ $args = "-b" ]; then
        background=true
    fi
done

if [ $rebuild = true ]; then
    sudo docker-compose -f ./docker-compose.ci.build.yml up
fi

if [ $background = true ]; then
    sudo docker-compose -f ./docker-compose.yml -f ./docker-compose.override.yml up -d --build
else
    sudo docker-compose -f ./docker-compose.yml -f ./docker-compose.override.yml up --build
fi
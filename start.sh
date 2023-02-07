#!/bin/bash

node main > game.log &
echo "$!" >> pid

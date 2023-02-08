#!/bin/bash
kill -9 $(ps ax | grep "node main" | grep -v "grep" | awk '{print $1}')
kill -9 $(ps ax | grep "adventure" | grep -v "grep" | awk '{print $1}')
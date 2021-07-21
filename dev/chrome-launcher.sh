#!/bin/bash

echo Launching chrome with CORS Restrictions disabled. &&

open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security http://127.0.0.1:8080/
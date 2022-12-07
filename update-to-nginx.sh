#!/bin/bash

npm run build
sudo cp -r ./dist/ /var/www/elu/

echo "Done!"
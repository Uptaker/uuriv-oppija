#!/bin/bash

# give execute permissions to run

npm run build
sudo cp -r ./dist/ /var/www/elu/

echo "Done!"
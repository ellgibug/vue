# create a .env file
cp .env.example .env;

# install composer dependencies
composer install;

# install npm dependencies
npm install;

# generate a key for your application
php artisan key:generate;

# create a local MySQL database (make sure you have MySQL up and running)
mysql -u root;

#> create database vue;
#> exit;

# add the database connection config to your .env file
#DB_CONNECTION=mysql
#DB_DATABASE=vue
#DB_USERNAME=root
#DB_PASSWORD=

# run the migration files to generate the schema
php artisan migrate;

# run webpack and watch for changes
npm run watch;
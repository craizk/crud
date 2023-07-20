Hello,

    For this CRUD application you will need to make a local database on your computer. The name of this database will be "crud". In order to do this type this command into your terminal: docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

    Take note of your image name and then type into the terminal: docker exec -it <image> bash

    followed by: psql -U postgres

    Followed by: CREATE DATABASE crud

    Followed by: \c crud

    make sure to migrate and run the seeds before start up
---------------------------------------------
Home Page,

If you are not logged in you will see all the list items with no functionality

If you ARE logged in, you can add items to your account and edit/delete the items. You will need to type in the values as they were if you choose to edit and submit and nothing changed. This is a goal I hope to fix. 

Clicking delete gets rid of the item

--------------------------------------------------------

Login page,

create a user or login as a current user

Logging in will take you to your item page (home)

---------------------------------------------------------

known bugs

-going from home to login sometimes causes the "destroy is not a function error" refresh the page to fix this
-
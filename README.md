----------------------------------------
Hello,

    For this CRUD application you will need to make a local database on your computer. The name of this database will be "crud". In order to do this type this command into your terminal: docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

    Take note of your image name and then type into the terminal: docker exec -it <image> bash

    followed by: psql -U postgres

    Followed by: CREATE DATABASE crud

    Followed by: \c crud

    make sure to migrate and run the seeds before start up

    I used two terminals to start the server path and the frontend path 
----------------------------------------------------
Home Page,

If you are not logged in you will see all the list items with no functionality

If you ARE logged in, you can add items to your account and edit/delete the items. You do not need to update everyfield, just the oones you want to change.
If you want to stop editing just click off the form or clcik submit  

Clicking delete gets rid of the item

--------------------------------------------------------

Login page,

create a user or login as a current user

click new user and fill out the information in order to make a new user.

Logging in will take you to your item page (home)

---------------------------------------------------------

known bugs

-when logged in if you decide to navigate using the links it sometimes gives the "destruction is not a function" error. Refresh the page to fix
-
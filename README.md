Hello,

    For this CRUD application you will need to make a local database on your computer. The name of this database will be "crud". In order to do this type this command into your terminal: docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

    Take note of your image name and then type into the terminal: docker exec -it <image> bash

    followed by: psql -U postgres

    Followed by: CREATE DATABASE crud

    Followed by: \c crud
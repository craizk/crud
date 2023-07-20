----------------------------------------
Hello,

    For this CRUD application you will need to make a local database on your computer. The name of this database will be "crud". In order to do this type this command into your terminal: docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

    Take note of your image name and then type into the terminal: docker exec -it <image> bash

    followed by: psql -U postgres

    Followed by: CREATE DATABASE crud

    Followed by: \c crud

    make sure to migrate and run the seeds before start up

    I used two terminals to start the server path and the frontend path 

    IMPORTANT SECTION OF READ ME: Known Fun Features. 
----------------------------------------------------
Home Page,

If you are not logged in you will see all the list items with no functionality

If you ARE logged in, you can add items to your account and edit/delete the items. You do not need to update everyfield, just the oones you want to change.
If you want to stop editing just click off the form or clcik submit  

Clicking delete gets rid of the item

Clicking the show all button while logged in will allow you to see everyitem. 

--------------------------------------------------------

Login page,

create a user or login as a current user

click new user and fill out the information in order to make a new user.

Logging in will take you to your item page (home)

---------------------------------------------------------

known fun features (bugs)

-when logged in if you decide to navigate using the links it sometimes gives the "destruction is not a function" error. Refresh the page to fix

---------------------------------------------

Goals,

-would like to complete the css
-would like to refactor and clean up the code

-------------------------------------------

User Stories Completed: 

1. As an inventory manager I want to be able to create an account so that I can track my inventory.
    Completion status: Complete: navigate to the login screen and either create an account or sign in. Upon either you wil be put on your screen where you can add items/edit items. 

2. As an inventory manager I want to be able to log into my account so that I can see my inventory of items.

    - After logging in, the inventory manager should be redirected to their inventory of items.

    Completion status: Complete: navigate to the login screen and either create an account or sign in. Upon either you wil be put on your screen where you can add items/edit items.

3. As an inventory manager I want to be able to create a new item so that I can share my item details with the world.

    - After the item is created, the inventory manager should be redirected to their inventory of items.
    - An item displays name, description, and quantity.

    Completeion status:copmlete: Click the add new item button and enter the information in and you will be able to add an item which is then shown in your inventory and those not logged in. The item format is as foolows in the request.  


4. As an inventory manager I want to be able to see a my entire inventory of items.

   - The inventory of items should display the first 100 characters of each item description, with “...” at the end if the description is longer than 100 characters.

    Completion status: Complete: The item is displayed and if the description is too long then it is shrunk down. If hovered over it displays the full length of text. 

5. As an inventory manager I want to be able to see any individual item I have added.
    The full item information should be displayed.

    Completion Status: Complete: If you click on your item you will be taken to a seperate page where only that item is displayed 
    
6. As an inventory manager I want to be able to edit an item so that I can fix any mistakes I made creating it.

     When the user toggles edit mode, the page remains the same and the fields become editable.

    Completion Status: Complete: If you click the edit button above an item you will be able to edit any of the fields. Leave a field empty if you want to keep it. 

7. As an inventory manager I want to be able to delete an item so that I can remove any unwanted content.

    When the user deletes the item they should be redirected to their inventory of items.

    Completion Status: Complete: If you click the delete button above an item you will be able to remove that item

8. As a visitor, who is not logged in, I want to be able to view all items created by every inventory manager so that I can browse every item.

    Unauthenticated users should be able to view all items, and any single item.
    The items should only display the first 100 characters of its description with “...” at the end if it is longer than 100 characters.

    Completion Status: Complete: If you are not logged in you will be able to see everyones items. The description format is the same as an inventory managers, just hover over to see the full length. 

9. As a visitor, who is not logged in, I want to be able to view a specific item created by any user so that I can see all of its details.

    Unauthenticated users should be able to view all items, and any single item.

    Completion Status: Complete: If you click an item while not logged i you will be taken to that specific items page 

10. As an inventory manager I want to be able to view all items created by every inventory manager so that I can browse every item.

    Unauthenticated users should be able to view all items, and any single item.

    Completion Status: Complete Inventory managers can clcik the show all button to see everyones added items. 
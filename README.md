# Contacts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Summary

Application lets user login to view his contacts. Contacts can be added, edited and deleted by the user. User can search by first or last name of contact, and sort by last name.

Supported by a Java Spring Boot Rest API and MySQL Database.

### Know Issues
Users cannot upload image, I had difficulty saving the image to the server. Retrieval and uploads work fine. Just an issue with the actual way it is stored in the server.
Could not get modal to overlay contacts list. I suspect it has to do with using both Bootstrap4 and Material Design.
Scaling is not great.
Route Guards were not implemented.
Validation work on all form, no feedback implemented.


### Run
pull from github
run npm install 
run ng serve

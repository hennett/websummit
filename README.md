## Synopsis
A simple project that lists all startups that participated in Websummit 2016 in Lisbon.

## Installation
Open a console and navigate inside the project. After that, type the following commands:
- **npm install** *(this will install all dependencies needed by the project)*
- **webpack -w** *(will create all assets in a distribution folder)*
- **.\node_modules\.bin\live-server --port=3004** *(will create a little development server with live reload capability, type **live-server.cmd** for **Windows** users)* **OR** create a virtual host for the Lumen project
- Either import the sql file located in the `storage\app\public` folder or enable and run the seed method in the `app\Http\routes.php` files

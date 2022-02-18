# pokemon-truelayer-challenge

This is an Pokedex application that returns Pokemon information in a very fun and silly way uisng a REST API.

## Instruction To Follow

### Dependencies

Woah there before you play around with this application, you first need to make sure you have docker installed, new to docker? well do not worry here is a link which will help you install it and learn a little bit more about docker: https://docs.docker.com/get-docker/ 


### How to run the application

* Pull this repository to your local machine.
* Open up Terminal/CMD (Whichever one you prefer) and naviagte to the file
* this is where the Dockerfile is.
* Execute `docker run -p 5000:5000 b02e50294616`. 
* The output will show:
 "Server is up on port 5000."
* From there open you broswer and type "http://localhost:5000/" in the address bar 

### How to stop the application 

Remember a docker deamon does not stop working in the background unless you tell it to stop, and will give you steps on how to stop it.

* Open up another terminal/CMD (Whichever one you prefer again).
* Execute `docker ps` this allows you to view a list of deamons is running
* The output should look like this: 
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                                       NAMES
3d2260b41de6   b02e50294616   "docker-entrypoint.s…"   32 seconds ago   Up 31 seconds   0.0.0.0:5000->5000/tcp, :::5000->5000/tcp   serene_spence
* Copy the "CONTAINER ID" value.
* Execute `docker stop <container_id>` where <container_id> is the value you copied.

## How to use the application

You can use this applications in two ways:

### As an API

By making a GET request to http://localhost:5000/pokemon/<pokemon_name>, where <pokemon_name> is the Pokemon name you are getting the description for. 
You will be returned an JSON with 2 keys, "name" and "description".

Example of this:
```` 
{
  "requestedPokemon": "charizard",
  "shakespeareTranslated": "spits fire yond is hot enow to melt boulders. Known to cause forest fires unintentionally."
}
```` 

### By using the UI

Go to http://localhost:5000/ and enter the Pokemon name in the search bar and click "Search".
The name and description will populate below the search bar, unless an error has occured, then a error message will display.

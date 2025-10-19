# Distributed Maps 

The goal of this project is to develop a distributed systems maps clone. Given the geographical data of various regions, we are responisble for storing geographical data on a geographical supproted database and develop a backend server capable of making calls to our database. In subsequent distributions of the project, caching will be implemented in order to achieve QoS constraints.

This project was able to handle a __QoS target requirement of 1600 requests per second (rps), with 95% of the requests responding under 50 ms.__

# Technologies Used:

- NodeJS
- ExpressJS
- MongoDB
- PostgreSQL
- Nginx
- Docker
- Memcached 

# Disclaimers:

## Disclaimer #1:
Users will have to downloaded the following onto their system in order to utilize the project:

- Docker 
- Docker-compose 

## Windows
You can install Docker via the Docker Installer. 

```
https://docs.docker.com/desktop/setup/install/windows-install/
```
Follow the instructions to install Docker. It will ask you to restart the computer and it will also install Docker-compose with it.

## Unix
Go to the scripts directory and run the docker script  

```
chmod +x docker-install.sh
./docker-install.sh
```

Do the same for the docker-compose script 

```
chmod +x docker-compose-install.sh
./docker-compose-install.sh
```

## Disclaimer #2:

Due to GitHub's size limit of 100 MBs and the need to use GitLFS, you will need to __create the map-data folder__ 

```
https://download.geofabrik.de/
```

Once you've downloaded the intended .osm.pbf file, __place the file in the map-data folder__


# Running Program 

## Single Instances

To run the program normally:


```
docker-compose -f docker-compose-first.yml up --build -d
docker-compose -f docker-compose-second.yml up --build -d 
```

On your browser's search bar, type the following:

```
http://localhost:81/
```

# Multiple Server Instances

To run multiple instances of the backend server:

```
docker-compose -f docker-compose-second.yml --scale server={# of servers} up --build -d 
```

To run multiple instances of the tile server: 

```
docker-compose -f docker-compose-second.yml --scale tileserver={# of servers} up --build -d 
```

To run both, multiple instances of the backend server and tileserver, run: 

```
docker-compose -f docker-compose-second.yml --scale server={# of servers} --scale tileserver={# of servers} up --build -d 
```


# User Interation 

## User Forms 

- Create Account
    - Username (required): Input the intended username (can't use duplicate username)
    - Email (required): Input the intended email (can't use duplicate email)
    - Password (required): Input the intended password 

- Login
    - Username (required): Input an existing username
    - Password (required): Input an existing password

    After logging in, a __session is created for the user__. 

- Logout
    - If the user is logged in, they can press submit to logout and terminate the user session 

- User
    - If the user is logged in, they can press submit to gain information about their current session 


## Map Forms 
- Search 
    - Search Term (required): Input the name of the location you want to search 
    - Only-In-Box (required): This determines whether or not objects within the bounding box of the search term should be included or not. If set to true, then only objects within the query bbox are returned, with coordinates pointing to the center of the __VISIBLE PORTION__ of the object within the queried bounding box. If false, then coordinates are the center of the object and bbox is the bounding box that includes the entire object.

- Convert
    - Zoom (required): A numerical value representing the zoom level 
    - Latitude (required): A numerical value representing the latitude 
    - Longitude (required): A numerical value representing the longitude

- Route 
    - Source Lat (required): A numerical value representing the source latitude 
    - Source Lon (required): A numerical value representing the source longitude
    - Dest Lat (required): A numerical value representing the destination latitude
    - Dest Lon (required): A numerical value representing  the destination longitude 

- Address
    - Latitude (required): A numerical value representing the latitude
    - Longitude (required): A numerical value representing the longitude 
.PHONY: load-db image run 

load-db: 
	docker-compose --profile db_load up

image:
	docker-compose build  

run: 
	docker-compose up -d 

drop:
	docker-compose down 

ir:
	- docker-compose build 
	- docker-compose up -d 

dir:
	- docker-compose down 
	- docker-compose build 
	- docker-compose up -d 


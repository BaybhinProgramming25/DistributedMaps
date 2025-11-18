.PHONY:load-dn image run 

load-db: 
	docker-compose --profile db_load up

image:
	docker-compose image 

run: 
	docker-compose up -d 

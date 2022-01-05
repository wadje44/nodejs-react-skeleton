DOCKER_BUILDKIT = 1

.EXPORT_ALL_VARIABLES:

.PHONY: build
build:
	docker-compose build

.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down --remove-orphans

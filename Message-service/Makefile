DOCKER_IMAGE = message-service

.PHONY: build
build:
	DOCKER_BUILDKIT=1 docker build -t $(DOCKER_IMAGE) .

.PHONY: run
run:
	docker run --rm \
		${DOCKER_IMAGE} dev
		
.PHONY: lint
lint: build
	docker run --rm \
		${DOCKER_IMAGE} lint

.PHONY: lint-fix
lint-fix: build
	docker run --rm \
		-v $(realpath ./files/src):/src \
		${DOCKER_IMAGE} lint:fix

.PHONY: test
test: build
	docker run --rm \
		-v $(realpath ./files/src/tests):/src/tests \
		${DOCKER_IMAGE} test

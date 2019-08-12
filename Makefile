UNAME = $(shell uname)

install:
	@echo "\n--> Installing the CubeHash TestNet\n"
	go install ./cmd/cbh
	@echo "\n\nCubeHash, the TestNet for CubeHash (cbh) has successfully installed!"

build:
	go get -o build/cbh ./cmd/cbh
	@echo "\n\nCubeHash, the TestNet for CubeHash (cbh) has successfully build!"


.PHONY: build install

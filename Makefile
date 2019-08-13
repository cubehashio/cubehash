UNAME = $(shell uname)

install:
	@echo "\n--> Installing the cubehash TestNet\n"
	go install ./cmd/cbh
	@echo "\n\ncubehash, the TestNet for cubehash (cbh) has successfully installed!"

build:
	go build -o build/cbh ./cmd/cbh
	@echo "\n\ncubehash, the TestNet for cubehash (cbh) has successfully build!"


.PHONY: build install

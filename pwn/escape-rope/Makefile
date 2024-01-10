.PHONY: all
all: escape-rop
escape-rop: escape-rop.c
	docker run -u "$(shell id -u):$(shell id -g)" -v "$(CURDIR):/app" -w /app --rm \
	buildpack-deps@sha256:c1a2475ac14e13582cf8a44fc071439132928ada47c57e80af372fdcd1690751 \
	gcc -Wno-deprecated-declarations -Wno-incompatible-pointer-types \
	-std=c99 -pedantic \
	-fno-stack-protector -no-pie -z execstack -O0 \
	escape-rop.c -o escape-rop

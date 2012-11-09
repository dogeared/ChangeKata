##
# default task: when you just run `make`
##

default: unit

all: unit 

unit:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--recursive --reporter spec test/unit

.PHONY: unit

wasm:
	 zig build-lib src/increment.zig  -target wasm32-freestanding -dynamic -rdynamic -O ReleaseSmall

#  test 
.PHONY: test
test:
	zig test src/main.zig

serve:
	python3 -m http.server 8080
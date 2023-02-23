#include <stdio.h>
#include <emscripten/emscripten.h>

EMSCRIPTEN_KEEPALIVE
int sum(int x, int y){
    return x + y;
}

int main(){
    return 0;
}
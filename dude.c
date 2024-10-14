#include <stdio.h>
#include <stdlib.h>

typedef struct {
int length;
int width;
int height;
} box;

int main() {
box myBox = {2,3,1};
myBox.height = 4;
printf( "%d", myBox.length * myBox.width * myBox.height );
return EXIT_SUCCESS;}
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

int main() {
    bool is_excited_enough = false;
    char response[20];
    
    printf("ARE YOU READY FOR THE WINTER CYBER GM?\n> ");
    fflush(stdout);

    gets(&response);

    if (is_excited_enough) {
        printf("WOOHOO! %s\n", getenv("FLAG"));
    } else {
        printf("that's not enough excitement >:(\n");
    }
    fflush(stdout);
}

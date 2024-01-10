#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void explode() {
    puts("beep beep beep... BOOM! The box is gone");
    exit(1);
}

void sick_tunes() {
    puts("You did it! Now playing'Cactus Boogie'");
    
    exit(0);
}

int main(void) {
    setbuf(stdout, NULL);
    char buf[256];
    puts("So you want to listen to some sick tunes hm... what's the password?");
    fgets(buf, 256, stdin);
    buf[strlen(buf)-1] = '\0';
    int password[31] = {106, 128, 105, 108, 121, 130, 94, 108, 122, 123, 93, 112, 121, 110, 112, 117, 112, 104, 84, 118, 124, 117, 123, 104, 112, 117,  84, 104, 116, 104, 132};
    for (int i = 0; i < 31; i++){
        if((int)buf[i] != (password[i] - 7)) {
            explode();
        }
    }
    sick_tunes();
}
#include <stdio.h>
#include <string.h>
#include <unistd.h>

int main()
{
    char buf[128];
    printf("Enter in the lock password: ");
    fflush(stdout);
    fgets(buf, 100, stdin);
    if (strcmp(buf, "cyber{un3nc4yp13d_47r1ng_c0mp4r3}\n") != 0)
    {
        printf("Incorrect!\n");
    }
    else
    {
        printf("Correct! How did you know????\n");
    }
}
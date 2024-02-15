#include<stdio.h>

    int main()
{
    int i;

    printf("Even numbers from 1 to 10:\n");
    for (i = 1; i <= 10; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d\n", i);
        }
    }

    printf("\nOdd numbers from 1 to 10:\n");
    for (i = 1; i <= 10; i++)
    {
        if (i % 2 != 0)
        {
            printf("%d\n", i);
        }
    }

    return 0;
}
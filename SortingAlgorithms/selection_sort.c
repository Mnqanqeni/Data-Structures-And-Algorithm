#include <stdio.h>

void selectionSort(int arr[], int n);

int main(void) {
    int numbers[] = {6, 3, 9, 2, 1};
    int n = sizeof(numbers) / sizeof(numbers[0]);
    selectionSort(numbers, n);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");
    return 0;
}

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

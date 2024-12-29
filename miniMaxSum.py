#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def miniMaxSum(arr):
    # Write your code here
    arr.sort()
    minSom=0
    maxSom=0
    for i in range(0,len(arr)):
        if i>0:
            maxSom+=arr[i]
        if i<len(arr)-1:
            minSom+=arr[i]
    print(minSom ,maxSom)
        

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)

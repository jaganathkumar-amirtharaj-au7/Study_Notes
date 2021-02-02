def findPlatform(arr, dep, n): 
    arr.sort() 
    dep.sort() 
    plat_needed = 1
    result = 1
    i = 1
    j = 0
    while (i < n and j < n): 
        if (arr[i] <= dep[j]):   
            plat_needed+= 1
            i+= 1
        elif (arr[i] > dep[j]):  
            plat_needed-= 1
            j+= 1
        if (plat_needed > result):  
            result = plat_needed    
    return result 
n = int(input())
arr = [] 
dep = [] 
for i in range (n):
    a = list(map(int, input().split()))
    arr.append(a[0])
    dep.append(a[1])
n = len(arr)  
print(findPlatform(arr, dep, n))
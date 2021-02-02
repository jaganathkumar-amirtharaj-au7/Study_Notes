def twoarrays(a,a2):
    arr=[0]*len(a2)
    for i in range(0,len(a2)):
        for j in range(0,len(a)):
            if(a[j]<a2[i]):
               arr[i]+=1
            else:
                break
    return arr
if __name__=='__main__':
    n=list(map(int,input().strip().split()))
    a = list(map(int,input().strip().split()))[:n[0]]
    a2 = list(map(int,input().strip().split()))[:n[1]]
    res=(twoarrays(a,a2))
    for i in res:
        print(i,end=" ")
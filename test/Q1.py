# def finding_uniString(s):
#     d={}
#     for i in range(0,len(s)):
#         d[s[i]]=0
#     for i in s:
#         d[i]+=1
#     K = max(d, key=d.get) 
#     return d[K]

# if __name__=='__main__':
#     s=input().lower()
#     print(finding_uniString(s))


def finding_uniString(s):
   
    d={}
    for i in range(0,len(s)):
        d[s[i]]=0
    for i in s:
        d[i]+=1
    K = max(d, key=d.get) 
    return(max(d[K],1))
        
        
    

if __name__=='__main__':
    s=input().lower()
    print(finding_uniString(s))
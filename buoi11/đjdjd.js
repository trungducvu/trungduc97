function find(number) {
    var sum = 0,a=number;
    count =0;
    var n;
    
    for (i=1; i<=n;i++) {
        if (sum<=a)
        count ++;
        sum +=i;
        n = ((sum/count)*2)-1;

    }
    return n;
}
find(7);
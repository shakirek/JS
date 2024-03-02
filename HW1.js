function task1(arr){
    return arr.map(
        function(value,index) {
            return (value+index+1)%10
        }
    )
}
 a1=[1,2,4];
 a2=[4,6,9,1,3];

function test_1_arg_function(f, ...args){
    console.log();
    console.log(f.name);
    args.forEach(
        function(arg) {
            console.log(arg+" --> "+f(arg))
        }
    )
}
test_1_arg_function(task1,a1,a2);


function sum_of_2_lowest_numbers(arr){
    c=Array;
    arr.forEach(
        function(value,index){
            if(index==0) c[0]=value
            else
            if(index==1) c[1]=value
            else{
                if(c[0]>c[1]) i=0
                else i=1;
                if(value<c[i]) c[i]=value;                    
            }
        }
    )
    return c[0]+c[1];
}
min_arr=[19,5,42,2,77];
test_1_arg_function(sum_of_2_lowest_numbers,min_arr);


function math_operations(simb,n1,n2){
    switch (simb){
        case "+": return n1+n2;
        case '-': return n1-n2;
        case '*': return n1*n2;
        case '/': return n1/n2;
    }
}
console.log();
console.log(math_operations.name);
console.log(math_operations('+',4,7));
console.log(math_operations('-',15,18));
console.log(math_operations('*',5,5));
console.log(math_operations('/',49,7));

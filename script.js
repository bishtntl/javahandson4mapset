function removecharacter(inputstr)
{
    var unique = new Set();
    var result = [];

   for( const char of inputstr) 
    if(!unique.has( char))
    {
        unique.add(char);
        result.push(char);
    }
    return result.join('');
}
var STR = "abcadeecfb";
console.log(removecharacter(STR))





let str = "abcadeecfb";
let arr = str.split('');
let set = new Set(arr);
let newarray = Array.from(set);
let output = newarray.map((element, index) => {
let count = 0
    for(let i=0; i < arr.length; i++)
    {
        
        if(element == arr[i])
        {
            count++;
        }
        
    }
    console.log(`${element} = ${count}`)
});
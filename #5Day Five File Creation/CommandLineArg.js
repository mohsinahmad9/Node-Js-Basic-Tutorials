const input  = process.argv;
const fs = require('fs');


if(input[0]=='add')
{
    fs.writeFileSync(input[3], input[4]);
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}
else{
    console.log("Invalid Argument")
}

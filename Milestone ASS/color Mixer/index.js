
function colorMixer(color1,color2){
    switch(color1){
        case "red":
            switch(color2){
                case "blue":
                    console.log("Purple");
                    break;
                case "yellow":
                    console.log("Orange");
                    break;
                default:
                    console.log("Invalid color Combination");
                    break;
            }
            break;
            case "blue":
                switch(color2){
                    case "red":
                        console.log("Purple");
                        break;
                    case "yellow":
                        console.log("Green");
                        break;
                    default:
                        console.log("Invalid Color Combination");
                        break;
                }
                break;
    }
}
var color1="red";
var color2="yellow";
colorMixer(color1,color2);
var col1="red";
var col2="blue";
colorMixer(col1,col2);
/*
    output:
    Orange
`   Purple
*/ 
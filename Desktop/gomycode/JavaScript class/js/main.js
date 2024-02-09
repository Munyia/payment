// alert("vivian")
// function checkifnumber(x) {
//     if (typeof x==="number") {
//         console.log ( `${x} is a number ${x}`);
//     }
//     else{
//         console.log ( `${x} is not a number ${x}`);

//     }
// }

// checkifnumber(34)
// checkifnumber("to call")

// function checkifnumber(x) {
//     if (typeof x==="number") {
//         console.log ( `${x} is a number`);
//     }
//     else if (typeof x==="boolean") {
//         console.log ( `${x} is a boolan `);
//     }
//     else{
//         console.log ( `${x} is a strange datatype`);
//     }
// }
// checkifnumber(true)
// checkifnumber("true")

function decodeColor( code ) {
    switch( code) {
	case 1:
		console.log( 'Red' );
		break;
	case 2:
		console.log( 'Yellow' );
		break;
	case "x":
		console.log( 'Green' );
		break;
	default:
		console.log( 'Unknown code' );
	}
}
decodeColor("x")
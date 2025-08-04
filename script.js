function stringChop(str, size) {
  // your code here
	size = Number(size)
	const arr = []
	if(str.length <= size){
		arr.push(str)
		return arr;
	}
	for(let i = 0; i < str.length; i = i + size){
	// 	if(str.length - i <= size){
	// 		arr.push(str.substring(i))
	// 	}
		console.log(i)
		let substr = str.substring(i, i + size)
		arr.push(substr)
	}
	console.log(arr)
	
	return arr
}
// Do not change the code below
const str = prompt("Enter String.");

const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));


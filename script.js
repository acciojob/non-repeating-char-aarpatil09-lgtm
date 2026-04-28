function firstNonRepeatedChar(str) {
 // Write your code here
	
	for(let i=0;i<str.length;i++){
		let new =str[i];
		for(let k=i+1;k<str.length;k++){
		if(new==str[k]){
			return null;
		}
	}
	}
	return str[i];
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 

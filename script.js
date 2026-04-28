function firstNonRepeatedChar(str) {
 // Write your code here
	
	for(let i=0;i<str.length;i++){
		let count =0;
		for(let k=i+1;k<str.length;k++){
		if(count==str[k]){
			count++;
		}
	}
		if(count==1){
			return str[i];
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

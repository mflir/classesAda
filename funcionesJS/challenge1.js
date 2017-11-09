var arr = [3,8,10,2,5];

var p;
var swap;	

for (p= arr.length -1; p>0; p--){

	for (var i=0; i < p; i++){
		if (arr[i] > arr [p]){
			swap = arr[p];
			arr[p] = arr[i];
			arr[i] = swap;
	}
}
}

console.log (arr);
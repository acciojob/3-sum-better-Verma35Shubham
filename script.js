function threeSum(arr, target) {
	arr.sort((a,b)=>a-b);

	let closest = Infinity;
	for (let i=0; i<arr.length-2; i++) {
		let left = i+1; right = arr.length-1;
		while(left<right){
			let localSum = arr[i] + arr[left] + arr[right];
			if(Math.abs(localSum-target) < Math.abs(closest-target)){
				closest = localSum;
			}
			if(localSum > target) right--;
			else left++;
		}
	}
	return closest;
  
}

module.exports = threeSum;
// const flattened = [[0,1],[2,3], [4,5]].reduce(
// 	(a,b) => {
//          console.log("current value", b);
//          console.log("accumulator", a);

// 		return (a.concat(b));

// 	}, []);

// a - accumulator, b - current array


const flattened = [[0,1],[2,3], [4,5]].reduce(
	(a,b) => {
        debugger;
		return (a.concat(b));

	}, []);

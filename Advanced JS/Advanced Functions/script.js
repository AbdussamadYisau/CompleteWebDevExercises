const first = () => {
	const greet = "Hi";

	const second = () => {
		alert(greet);
	}

	return second;
}

const newFunc = first();

newFunc();

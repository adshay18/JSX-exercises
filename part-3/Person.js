const Person = ({ name, age, hobbies = [] }) => {
	let message;
	if (name.length > 8) {
		name = name.slice(0, 6);
	}
	if (age < 18) {
		message = 'you must be 18';
	} else if (age >= 18) {
		message = 'please go vote!';
	}

	if (!hobbies[0]) {
		hobbies.push('None');
	}

	return (
		<div>
			<p>Learn some information about this person</p>
			<span>
				Name: {name} Age: {age}
			</span>
			<h3>-{message}</h3>
			<div>
				<h4>Hobbies</h4>
				<ul>{hobbies.map((h) => <li>{h}</li>)}</ul>
			</div>

			<br />
		</div>
	);
};

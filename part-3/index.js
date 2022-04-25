const App = () => (
	<div>
		<Person name="Jeff" age="7" hobbies={[ 'Baseball', 'Checkers', 'Karate' ]} />
		<Person name="Geoff" age="17" />
		<Person name="Jeph" age="19" hobbies={[ 'Disc Golf', 'Drifting' ]} />
		<Person name="Jeffffffff" age="21" hobbies={[ 'Drinking', 'Tinder', 'Cooking', 'Texting Sarah again' ]} />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));

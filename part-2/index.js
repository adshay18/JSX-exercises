const App = () => (
	<div>
		<Tweet
			username="bigMacnCheese"
			name="Ronald"
			date="01/04/2022"
			message="Just slammed this mac 'n cheese and also a big mac."
		/>
		<Tweet username="TheGoat" name="Marty" date="04/22/2022" message="Happy earth day to all my herd!" />
		<Tweet username="smiles" name="Miles" date="03/29/2022" message=":)" />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));

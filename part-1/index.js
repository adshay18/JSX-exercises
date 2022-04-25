const App = () => (
	<div>
		<FirstComponent />
		<NamedComponent name="Finn" />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));

const Tweet = ({ username, name, date, message }) => (
	<div>
		<h5>
			{name} aka {username} says..
		</h5>
		<p>{message}</p>
		<p>{date}</p>
	</div>
);

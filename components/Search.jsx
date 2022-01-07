const Search = ({ query, setQuery, data, error }) => {
	if (error) return <div className="max-w-min mx-auto">failed to load</div>;
	if (!data) return <div className="max-w-min mx-auto">loading...</div>;

	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery(e.target[0].value);
	};

	const handleChange = (e) => {
		const searchTimer = setTimeout(() => {
			setQuery(e.target.value);
		}, 2000);
		clearTimeout(searchTimer);
	};

	return (
		<form className="max-w-min flex" onSubmit={handleSubmit}>
			<div className="relative">
				<input
					name="search"
					type="text"
					onChange={handleChange}
					placeholder="Search for an organization"
					className="mx-auto w-64 p-2 shadow-md rounded-lg border border-blue-400 ring-1 bg-gray-100 peer placeholder-transparent focus:ring-2 focus:border-blue-500 focus:bg-gray-100"
				/>
				<label
					htmlFor="search"
					className="text-sm peer-focus:text-sm peer-placeholder-shown:text-gray-400 text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 absolute left-2 -top-6 transition-all peer-focus:left-2 peer-focus:-top-6 peer-focus:text-gray-600 pointer-events-none cursor-text"
				>
					Search for an organization
				</label>
			</div>
			<input
				type="submit"
				value="Submit"
				className="bg-blue-300 p-2 shadow rounded-md ml-2 font-bold hover:bg-blue-400"
			/>
		</form>
	);
};

export default Search;

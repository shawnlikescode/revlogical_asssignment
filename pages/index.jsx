import { useState } from "react";
import useSWR from "swr";
import Table from "../components/Table";
import Search from "../components/Search";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
	const [query, setQuery] = useState("facebook");
	const { data, error } = useSWR(`/api/orgs/${query}`, fetcher);
	return (
		<>
			<div className="p-20 flex justify-around">
				<h1 className="text-3xl font-bold">Github Organizations</h1>
				<Search query={query} setQuery={setQuery} data={data} />
			</div>
			<div className="p-6 w-full">
				{data?.languages ? (
					<Table data={data} />
				) : (
					<h2 className="mx-auto text-2xl text-red-500">{data?.message} Try Another Organization</h2>
				)}
			</div>
		</>
	);
}

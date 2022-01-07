import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Table from "../components/Table";

describe("Table", () => {
	it("renders a table", async () => {
		const data = {
			name: "org",
			languages: [
				{ name: "C++", count: 13 },
				{ name: "Hack", count: 2 },
				{ name: "Rust", count: 3 },
				{ name: "OCaml", count: 2 },
				{ name: "C", count: 16 },
				{ name: "Python", count: 18 },
				{ name: "Java", count: 2 },
				{ name: "C#", count: 2 },
			],
		};
		render(<Table data={data} />);

		const table = screen.getByRole("table");
		expect(table).toBeInTheDocument();
	});

	it("renders a table with a row for each language", async () => {
		const data = {
			name: "org",
			languages: [
				{ name: "C++", count: 13 },
				{ name: "Hack", count: 2 },
				{ name: "Rust", count: 3 },
				{ name: "OCaml", count: 2 },
				{ name: "C", count: 16 },
				{ name: "Python", count: 18 },
				{ name: "Java", count: 2 },
				{ name: "C#", count: 2 },
			],
		};
		render(<Table data={data} />);

		const rows = screen.getAllByRole("row");
		expect(rows.length).toBe(data.languages.length + 1);
	});

	it("renders a table with a header row", async () => {
		const data = {
			name: "org",
			languages: [
				{ name: "C++", count: 13 },
				{ name: "Hack", count: 2 },
				{ name: "Rust", count: 3 },
				{ name: "OCaml", count: 2 },
				{ name: "C", count: 16 },
				{ name: "Python", count: 18 },
				{ name: "Java", count: 2 },
				{ name: "C#", count: 2 },
			],
		};
		render(<Table data={data} />);

		const languages = screen.getByRole("columnheader", { name: "Language" });
		const count = screen.getByRole("columnheader", { name: "Number of Times Used" });

		expect(languages && count).toBeInTheDocument();
	});
});

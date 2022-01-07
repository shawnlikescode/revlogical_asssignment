import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Search from "../components/Search";
import fetch from "node-fetch";

// Test the Search component
describe("Search", () => {
	it("renders a search box", async () => {
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
		render(<Search data={data} />);

		const search = screen.getByRole("textbox");
		expect(search).toBeInTheDocument();
	});

	it("Search accepts user input", async () => {
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

		render(<Search data={data} />);

		const search = screen.getByRole("textbox");

		fireEvent.change(search, { target: { value: "facebook" } });
		expect(search.value).toBe("facebook");
	});
});

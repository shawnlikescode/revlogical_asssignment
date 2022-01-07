import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
	it("renders a heading", async () => {
		render(<Home />);

		const heading = screen.getByRole("heading", { name: /Github Organizations/i });

		expect(heading).toBeInTheDocument();
	});
});

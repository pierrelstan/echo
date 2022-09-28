import { render, screen } from "@testing-library/react";

import Footer from "../components/common/Footer/Footer";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Footer />);

    // expect(aboutAnchorNode).toBeInTheDocument();
  });
});

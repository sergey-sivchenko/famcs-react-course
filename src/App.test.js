import { render } from "@testing-library/react";

import App from "./App";

test.skip("renders correctly", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});

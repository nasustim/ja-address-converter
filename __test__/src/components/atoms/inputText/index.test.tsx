import { describe, test } from "vitest";

import { render, screen } from "@testing-library/react";
import { InputText } from "../../../../../src/components/atoms/inputText";

describe("InputText", () => {
  test("render", () => {
    render(<InputText />);
    screen.debug();
  });
});

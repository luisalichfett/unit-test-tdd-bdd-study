import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { defineFeature, loadFeature } from "jest-cucumber";
import { ButtonComponent as Button } from "./Button";

const feature = loadFeature("src/components/Button/Button.feature");

defineFeature(feature, (test) => {
  const props = {
    label: "Submit",
    type: "primary",
    onClick: jest.fn(),
  };

  const disabledProps = {
    label: "Submit",
    type: "primary",
    disabled: true,
    onClick: jest.fn(),
  };

  test("Clicking the submit button", ({ given, when, then }) => {
    given("I want to submit a form", () => {
      render(<Button {...props} />);
    });

    when("I click the submit button", () => {
      userEvent.click(screen.getByText(props.label));
    });

    then("The form should be submitted", () => {
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });

  test("Clicking a disabled button", ({ given, when, then }) => {
    given("I want to submit a form", () => {
      render(<Button {...disabledProps} />);
    });

    when("I click the disabled submit button", () => {
      userEvent.click(screen.getByText(disabledProps.label));
      userEvent.click(screen.getByText(disabledProps.label));
      userEvent.click(screen.getByText(disabledProps.label));
      userEvent.click(screen.getByText(disabledProps.label));
    });

    then("Ihope that nothing happens", () => {
      expect(disabledProps.onClick).toHaveBeenCalledTimes(0);
    });
  });
});

import { render, fireEvent } from "react-native-testing-library";
import LoginScreen from ".";
import React from "react";

describe("LoginScreen Test Cases", () => {
  test("should check if the changeText event is working or not", () => {
    const onChangeTextEvent = jest.fn();
    const onChangePasswordEvent = jest.fn();
    const { getByPlaceholder } = render(
      <LoginScreen
        onChangeText={onChangeTextEvent}
        onPasswordChange={onChangePasswordEvent}
        isLoadingStatus={false}
      />
    );
    const username = "username";
    const userNameText = getByPlaceholder(username);
    fireEvent.changeText(userNameText, "abc");
    expect(onChangeTextEvent).toHaveBeenCalledWith("abc");
    const password = getByPlaceholder("password");
    fireEvent.changeText(password, "abcdef");
    expect(onChangePasswordEvent).toHaveBeenCalledWith("abcdef");
  });
  test("should check if the login button functionality is working fine or not?", () => {
    const validateUserCredentials = jest.fn();
    const onChangeTextEvent = jest.fn();
    const onChangePasswordEvent = jest.fn();
    const { getByTestId } = render(
      <LoginScreen
        onChangeText={onChangeTextEvent}
        onPasswordChange={onChangePasswordEvent}
        onSubmit={validateUserCredentials}
        isLoadingStatus={true}
      />
    );
    const loginButton = getByTestId("login");
    fireEvent.press(loginButton);
    expect(validateUserCredentials).toBeCalled();
  });
});

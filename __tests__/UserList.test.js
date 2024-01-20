import React from "react"
import { render } from "@testing-library/react-native"
import UserList from "../src/components/UserList"

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper")

describe("UserList", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<UserList />)
    expect(getByTestId("userlist")).toBeTruthy()
  })
})

import React from "react"
import { render } from "@testing-library/react-native"

import Main from "../src/screens/Main"

describe("Main component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Main />)

    // Verificar que el componente UserList se renderiza
    const userList = getByTestId("userlist")
    expect(userList).toBeTruthy()

    // Verificar que el StatusBar se renderiza
    const statusBar = getByTestId("statusbar")
    expect(statusBar).toBeTruthy()
  })
})

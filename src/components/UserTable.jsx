import React, { useState } from "react"
import { StyleSheet, View, Text, Pressable } from "react-native"
import { Table, TableWrapper, Row, Cell } from "react-native-reanimated-table"

const UserTable = (props) => {
  const [tableHead, setTableHead] = useState(["login", "id", "Details"])
  const [tableData, setTableData] = useState(props.users)

  //handledPress
  const handledPress = (user) => {
    console.log("user:", user)
  }

  return (
    <View style={styles.container}>
      <Table style={styles.table}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {tableData.map((user, index) => (
          <TableWrapper key={index} style={styles.row}>
            <View style={styles.row}>
              <Cell
                key={user.id + Math.floor(Math.random() * 1000000)}
                data={user.login}
                textStyle={styles.text}
              />
              <Cell
                key={user.id + Math.floor(Math.random() * 1000000)}
                data={user.id}
                textStyle={styles.text}
              />
              <Pressable
                style={styles.btnContainer}
                onPress={() => handledPress(user.login)}
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>View</Text>
                </View>
              </Pressable>
            </View>
          </TableWrapper>
        ))}
      </Table>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    padding: 16,
    paddingTop: 30,
    backgroundColor: "grey",
  },
  table: {
    width: "600px",
    borderColor: "transparent",
  },
  head: {
    width: "auto",
    padding: 5,
    height: 40,
    textAlign: "center",
    backgroundColor: "#808B97",
  },
  text: { margin: 6, textAlign: "center" },
  row: {
    padding: 5,
    width: "auto",
    flexDirection: "row",
    flex: "auto",
    backgroundColor: "#FFF1C1",
  },
  btnContainer: {
    width: "auto",
    flexDirection: "row",
    flex: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    padding: "10px",
    width: 58,
    backgroundColor: "#78B7BB",
    borderRadius: 2,
  },
  btnText: { textAlign: "center", color: "#fff" },
})

export default UserTable

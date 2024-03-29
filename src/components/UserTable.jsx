import React, { useState } from "react"
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native"
import { Table, TableWrapper, Row, Cell } from "react-native-reanimated-table"
import { useNavigation, useLinkTo } from "@react-navigation/native"
import { Dimensions } from "react-native"
import { Button } from "react-native-paper"

// Get screen width
const screenWidth = Dimensions.get("window").width

const UserTable = (props) => {
  const navigation = useNavigation()
  const linkTo = useLinkTo()
  const [tableHead, setTableHead] = useState(["login", "id", "Details"])
  const [tableData, setTableData] = useState(props.users)

  //handledPress
  const handledPress = (user) => {
    console.log("user", user)
    linkTo("/user-details")
    navigation.navigate("user-details", { user: user })
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

              <Button
                icon="camera"
                mode="contained-tonal"
                onPress={() => handledPress(user)}
              >
                <Text style={styles.btnText}>View</Text>
              </Button>

              {/* <Pressable
                style={styles.btnContainer}
                onPress={() => handledPress(user)}
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>View</Text>
                </View>
              </Pressable> */}
            </View>
          </TableWrapper>
        ))}
      </Table>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 30,
    padding: screenWidth * 0.05,
    backgroundColor: "#20232a",
  },
  table: {
    width: screenWidth * 0.9,
    borderColor: "transparent",
  },
  head: {
    width: "auto",
    padding: 5,
    height: 40,
    textAlign: "center",
    backgroundColor: "#808B97",
    textTransform: "uppercase",
  },
  text: { margin: 6, textAlign: "center", color: "#000" },
  row: {
    padding: 5,
    width: "auto",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#eeeeee",
  },

  btn: {
    padding: "10px",
    width: 58,
    backgroundColor: "#78B7BB",
    borderRadius: 2,
  },
  btnText: { textAlign: "center" },
})

export default UserTable

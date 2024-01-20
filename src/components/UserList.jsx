import React, { useState } from "react"
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native"
import { Chase } from "react-native-animated-spinkit"
import { Button } from "react-native-paper"
import { TextInput } from "react-native-paper"
import { Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width

//components
import UserTable from "../components/UserTable"
import FlashMessage, { showMessage } from "react-native-flash-message"
import FollowersChart from "./FollowersChart"

const UserList = () => {
  const [username, setUsername] = useState("")
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const getDataUsers = () => {
    setLoading(true)
    setUsers([])
    if (username === "") {
      setLoading(false)
      showMessage({
        message: "Error",
        description: "Please enter a username",
        type: "danger",
      })
      return
    }

    if (username.length < 4) {
      setLoading(false)
      showMessage({
        message: "Error",
        description: "Username must be at least 4 characters",
        type: "danger",
      })
      return
    }

    if (username.toLowerCase() === "doublevpartners") {
      setLoading(false)
      showMessage({
        message: "Error",
        description: 'The username "doublevpartners" is not allowed.',
        type: "danger",
      })
      return
    }

    //add fetch api data
    fetch(`https://api.github.com/search/users?q=${username}&per_page=10`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.items)
        if (data.items.length > 0) {
          setUsername("")
        } else {
          showMessage({
            message: "Success",
            description: "No users found",
            type: "simple",
          })
          setUsername("")
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <View style={styles.container} data-testid="userlist">
        {/* <ScrollView style={styles.scroll}> */}
        <View style={styles.subContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            placeholderTextColor="grey"
            value={username}
            onChangeText={(username) => setUsername(username)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                getDataUsers()
              }
            }}
          />
          <Button
            style={styles.btn}
            icon="rocket"
            mode="contained"
            onPress={getDataUsers}
          >
            Search
          </Button>
        </View>
        <View style={styles.loader}>
          {loading && (
            <Chase
              size={40}
              color="#fff"
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
            />
          )}
        </View>
        <View>
          {users.length > 0 && <UserTable users={users} />}
          {users.length > 0 && (
            <Text style={styles.title}>Followers Chart</Text>
          )}
          {users.length > 0 && <FollowersChart users={users} />}
        </View>
        {/* </ScrollView> */}
      </View>
      <FlashMessage position="top" />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    backgroundColor: "#20232a",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    marginTop: 30,
    flex: 1,
    width: screenWidth * 0.95,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  input: {
    width: 250,
    height: 40,
    marginBottom: 20,
    padding: 5,
  },
  btn: {
    width: 250,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
  },
  loader: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
})

export default UserList

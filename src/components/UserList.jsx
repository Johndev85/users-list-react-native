import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native"
import { Chase } from "react-native-animated-spinkit"

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
      <View style={styles.container}>
        <ScrollView>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            placeholderTextColor="grey"
            onChangeText={setUsername}
            value={username}
            onSubmitEditing={getDataUsers}
          />
          <Pressable style={styles.btn} onPress={getDataUsers}>
            <Text style={styles.btnText}>Search</Text>
          </Pressable>
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
          {users.length > 0 && <UserTable users={users} />}
          {users.length > 0 && (
            <Text style={styles.title}>Followers Chart</Text>
          )}
          {users.length > 0 && <FollowersChart users={users} />}
        </ScrollView>
      </View>
      <FlashMessage position="top" />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "600px",
    height: "auto",
    padding: 5,
    backgroundColor: "#20232a",
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
    width: "100%",
    height: 40,
    borderColor: "gray",
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  btn: {
    backgroundColor: "blue",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
})

export default UserList

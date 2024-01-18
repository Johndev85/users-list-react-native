import React from "react"
import { StyleSheet, View, Image } from "react-native"

import { useRoute } from "@react-navigation/native"
import { Avatar, Button, Card, Text } from "react-native-paper"
import { Dimensions } from "react-native"

// Get screen width
const screenWidth = Dimensions.get("window").width

const UserDetails = () => {
  const route = useRoute()
  const { user } = route.params

  //get followers number
  const followersNumber = user.followers_url.split("/").pop().length

  //get following number
  const followingNumber = user.following_url.split("/").pop().length

  //get subscriptions number
  const subscriptionsNumber = user.subscriptions_url.split("/").pop().length

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.imageContainer}>
          <Avatar.Image
            style={styles.image}
            size={180}
            source={{ uri: user.avatar_url }}
          />
        </View>
        <Card.Content style={styles.content}>
          <View style={styles.textTitle}>
            <Text variant="titleLarge" style={styles.text}>
              Login: {user.login}
            </Text>
            <Text variant="titleLarge" style={styles.text}>
              ID # {user.id}
            </Text>
          </View>
          <View style={styles.textBottom}>
            <View style={styles.textColumn}>
              <Text variant="titleSmall" style={styles.textLeft}>
                Type: {user.type}
              </Text>
            </View>
            <View style={styles.textColumn}>
              <Text variant="titleSmall" style={styles.textRight}>
                Followers: {followersNumber}
              </Text>
              <Text variant="titleSmall" style={styles.textRight}>
                Following: {followingNumber}
              </Text>
              <Text variant="titleSmall" style={styles.textRight}>
                Subscriptions: {subscriptionsNumber}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "#20232a",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    maxWidth: 600,
    minWidth: 300,
    width: "100%",
    height: "auto",
    paddingBottom: 30,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeeeee",
    borderRadius: 10,
  },
  imageContainer: {
    paddingTop: 30,
    maxWidth: 600,
    minWidth: 390,
    width: screenWidth * 0.6,
    backgroundColor: "#e8e1ed",
    borderRadius: 10,
  },
  image: {
    alignSelf: "center",
    marginBottom: 30,
  },
  content: {
    width: "100%",
    marginTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  textTitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "5%",
    marginBottom: "2%",
  },

  textBottom: {
    width: "100%",
    padding: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: "5%",
    marginBottom: "2%",
  },
  textColumn: {
    padding: 0,
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    color: "#000",
    marginBottom: "2%",
    textTransform: "capitalize",
  },
  textLeft: {
    fontWeight: "bold",
    color: "#000",
    marginBottom: "2%",
    textAlign: "center",
  },
  textRight: {
    fontWeight: "bold",
    color: "#000",
    marginBottom: "2%",
    textAlign: "center",
  },
})

export default UserDetails

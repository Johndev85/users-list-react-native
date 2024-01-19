import React, { useState } from "react"
import { BarChart } from "react-native-chart-kit"
import { View, StyleSheet, ScrollView } from "react-native"

const FollowersChart = (props) => {
  const [followersData, setFollowersData] = useState([])

  //get followers count
  const getFollowersCount = () => {
    for (let i = 0; i < props.users.length; i++) {
      let followersCount = props.users[i].followers_url.split("/").pop().length
      followersData.push({
        user: props.users[i].login,
        followers: followersCount,
      })
    }
  }
  getFollowersCount()

  const data = {
    labels: followersData.map((user) => user.user),
    datasets: [
      {
        data: followersData.map((user) => user.followers),
      },
    ],
  }

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <BarChart
          style={styles.graphStyle}
          data={data}
          width={900}
          height={500}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 700,
    minWidth: 320,
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  graphStyle: {
    marginVertical: 8,
    borderRadius: 5,
  },
})

export default FollowersChart

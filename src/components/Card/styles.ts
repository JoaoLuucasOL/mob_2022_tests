import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primaryLight,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    width: "95%",
    padding: 10,
  },
  topicos: {
    flexDirection: "row",
  },
  topic: {
    backgroundColor: colors.secondaryLight,
    margin: 5,
    flexDirection: "row",
    borderRadius: 5,
    padding: 5
  },
  item:{
    backgroundColor: colors.white,
  },
  img: {
    width: 100,
    height: 100,
  },
})

export default styles
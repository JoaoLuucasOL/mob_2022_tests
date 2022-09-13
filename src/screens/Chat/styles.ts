import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  rowSearch: {
    flexDirection: 'row',
    backgroundColor: colors.primaryLight,
    borderRadius: 10,
    alignItems: 'center',
    width: 300,
    height: 45,
    marginBottom: 20
  },
  input: {
    width: "80%"
  },
  icon: {
    fontSize: 24,
    padding: 5,
  },
  img: {
    width: 120,
    height: 120,
    padding: 5
    },
  button:{
    position:'absolute',
    bottom:10,
    right:0,
    backgroundColor:colors.secondaryLight,
    width:50,
    height:50,
    borderRadius:50,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText:{
    color:colors.white,
    fontSize: 28,
    fontWeight:"bold"
  }
})

export default styles;
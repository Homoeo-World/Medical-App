import { StyleSheet } from "react-native";
import { theme } from "client/src/utils/theme.js";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 16,
    },
    cartList: {
      flex: 1,
      marginBottom: 20,
    },
    cartItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingTop: 16,
      marginBottom: 12,
      shadowColor: "rgba(0, 0, 0, 0.1)",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 2,
    },
    cartItemInfo: {
      flex: 1,
    },
    itemName: {
      fontSize: 14,
      marginBottom: 6,
        fontWeight: 'bold',
    },
    itemPrice: {
      fontSize: 16,
      color: "black",
      fontWeight: "bold",
    },
    quantityContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    quantityButton: {
      //   backgroundColor: 'lightgray',
      borderWidth: 1,
      borderColor: theme.primaryColor,
      width: 25,
      height: 25,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
    },
    quantityButtonText: {
      fontSize: 18,
      //   fontWeight: 'bold',
      color: theme.primaryColor,
    },
    quantity: {
      fontSize: 20,
      marginHorizontal: 16,
    },
    totalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 16,
      backgroundColor: "white",
      borderRadius: 8,
      shadowColor: "rgba(0, 0, 0, 0.1)",
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 2,
    },
    totalText: {
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 16,
    },
    totalPrice: {
      fontSize: 24,
      fontWeight: "bold",
      marginRight: 16,
    },
    checkoutButton: {
      backgroundColor: theme.primaryColor,
      padding: 16,
      borderRadius: 8,
      alignItems: "center",
    },
    checkoutButtonText: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
    },
    paymentDetailsContainer: {
      backgroundColor: "white",
      padding: 16,
      borderRadius: 8,
      elevation: 3,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      marginBottom: 20,
    },
    detailRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    orderTotalText: {
      fontSize: 18,
      fontWeight: "bold",
    },
    orderTotal: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.primaryColor,
    },
    disabledButton: {
      opacity: 0.5,
    },
    addressCard: {
      padding: 16,
      backgroundColor: "white",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.primaryColor,
      // overflow:'visible'
    },
    addressHeaderText: {
      fontSize: 14,
      fontWeight: "bold",
      color: "grey",
      marginBottom: 8,
    },
    changeButton: {
      flex: 1,
      alignItems: "flex-end",
      paddingBottom: 2,
      // backgroundColor: 'lightgrey'
    },
    removeButton: {
      flexDirection:'row',
      borderWidth: 1,
      borderColor: theme.primaryColor,
      borderRadius: 12,
      paddingHorizontal: 10,
      paddingVertical:1,
      alignItems: 'center'
    },
    separator: {
      borderBottomWidth: 1,
      height:1,
      borderBottomColor: 'lightgrey'
    },
    icon:{
      height: 16,
      width: 16
  },
  button:{
    marginTop: 10,
    backgroundColor: theme.primaryColor
  },
  });
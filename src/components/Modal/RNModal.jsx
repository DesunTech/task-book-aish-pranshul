import React from "react";
import {Modal, View, TouchableOpacity, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Scaling} from "../../constants/dimensions";
import {RFValue} from "../../utils";
import {RNText} from "../Text/RNText";

export const RNModal = ({
  modalVisible,
  setModalVisible,
  title = "Title",
  children,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.rowContainer}>
            <RNText
              size={Scaling.twelve}
              fontWeight={600}
              style={{paddingBottom: Scaling.ten, maxWidth: "90%"}}>
              {title}
            </RNText>

            <Ionicons
              name="close"
              size={RFValue.moderateScale(20)}
              color="black"
              onPress={() => setModalVisible(false)}
            />
          </View>
          <View>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: Scaling.sixteen,
    position: "relative",
  },
  closeButton: {},
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

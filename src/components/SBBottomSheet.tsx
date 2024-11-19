import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../utils/colors";

interface SBBottomSheetProps {
  children: React.ReactNode;
  open: any;
  height?: number;
  title: string;
}

const SBBottomSheet: React.FC<SBBottomSheetProps> = ({
  children,
  open,
  height = 600,
  title,
}) => {
  return (
    <RBSheet
      ref={open}
      height={height}
      customStyles={{
        container: styles.sheetContainer,
      }}
    >
      <Text style={styles.selectSubject}>{title}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    borderRadius: 20,
    padding: 20,
  },
  bsContainer: {
    // borderWidth: 1,
  },
  selectSubject: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 15,
  },
});

export default SBBottomSheet;

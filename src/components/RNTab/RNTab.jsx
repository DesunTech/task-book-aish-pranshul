import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {
  MaterialTabBar,
  MaterialTabItem,
  Tabs,
} from "react-native-collapsible-tab-view";
import {RFValue} from "../../utils";
import {ColorValues, FontFamilyLiterata, StringValues} from "../../constants";
import {Scaling} from "../../constants/dimensions";
import {Header} from "../Header/Header";

const HEADER_HEIGHT = RFValue.moderateScale(220);

const TAB_NAMES = [
  StringValues.Overview,
  StringValues.BestSellers,
  StringValues.NewWriters,
  StringValues.FreeBooks,
  StringValues.Categories,
];

export const RNTab = ({tabs = TAB_NAMES, children, tabHeader}) => {
  const TabHeader = () => {
    return (
      <View style={styles.header}>
        <Header
          backIcon
          containerStyle={{backgroundColor: ColorValues.background.lightSky}}
          iconStyle={{color: ColorValues.background.default}}
        />
        {tabHeader}
      </View>
    );
  };
  return (
    <Tabs.Container
      renderHeader={TabHeader}
      width={"100%"}
      allowHeaderOverscroll={false}
      contentContainerStyle={{scrollEnabled: false}}
      renderTabBar={props => (
        <MaterialTabBar
          {...props}
          scrollEnabled
          style={{paddingHorizontal: Scaling.eight}}
          contentContainerStyle={{}}
          tabStyle={{
            minWidth: RFValue.moderateScale(120),
          }}
          indicatorStyle={{
            height: Scaling.two,
            width: "60%",
          }}
          TabItemComponent={props => (
            <MaterialTabItem
              {...props}
              label={props.label}
              labelStyle={{
                fontFamily: FontFamilyLiterata[400],
              }}
            />
          )}
        />
      )}>
      {tabs.map((tabName, index) => (
        <Tabs.Tab name={tabName} key={tabName}>
          {children[index]}
        </Tabs.Tab>
      ))}
    </Tabs.Container>
  );
};

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    width: "100%",
    backgroundColor: ColorValues.background.lightSky,
  },
  tabBarContainer: {
    flexDirection: "row",
    backgroundColor: ColorValues.background.card,
    borderBottomWidth: 1,
    borderBottomColor: ColorValues.text.muted,
  },
});

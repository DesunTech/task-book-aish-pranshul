import React from "react";
import {View, StyleSheet} from "react-native";
import {
  MaterialTabBar,
  MaterialTabItem,
  Tabs,
} from "react-native-collapsible-tab-view";
import {RFValue} from "../../utils";
import {ColorValues, FontFamilyLiterata, StringValues} from "../../constants";
import {Scaling} from "../../constants/dimensions";

const HEADER_HEIGHT = RFValue.moderateScale(220);

const TAB_NAMES = [
  StringValues.Overview,
  StringValues.BestSellers,
  StringValues.NewWriters,
  StringValues.FreeBooks,
  StringValues.Categories,
];

export const RNTab = ({
  tabs = TAB_NAMES,
  tabHeader,
  currentTab,
  children,
  otherProps,
}) => {
  if (typeof currentTab !== "function") {
    throw new Error("Current Tab callback function is required.");
  }
  const handleTabChange = index => {
    try {
      currentTab(index);
    } catch (error) {
      console.error(error?.message);
    }
  };
  const TabHeader = () => {
    return <View style={styles.header}>{tabHeader}</View>;
  };
  return (
    <Tabs.Container
      renderHeader={TabHeader}
      width={"100%"}
      onTabChange={handleTabChange}
      allowHeaderOverscroll={false}
      contentContainerStyle={{scrollEnabled: false}}
      {...otherProps}
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

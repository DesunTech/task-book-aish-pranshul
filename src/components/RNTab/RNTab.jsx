import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {
  MaterialTabBar,
  MaterialTabItem,
  Tabs,
} from "react-native-collapsible-tab-view";
import {RFValue} from "../../utils";
import {FontFamilyLiterata, StringValues} from "../../constants";
import {RNText} from "../Text/RNText";
import {Scaling} from "../../constants/dimensions";

const HEADER_HEIGHT = RFValue.moderateScale(150);

const DATA = [0, 1, 2, 3, 4];
const TAB_NAMES = [
  StringValues.Popular,
  StringValues.Categories,
  StringValues.FreeBooks,
  StringValues.BestSellers,
  StringValues.NewWriters,
];
const identity = v => v + "";

// Header Component
const Header = () => {
  return <View style={styles.header} />;
};

// Render content for each tab
const renderTabContent = index => (
  <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
);

export const RNTab = () => {
  return (
    <Tabs.Container
      renderHeader={Header}
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
            width: "70%",
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
      {TAB_NAMES.map(tabName => (
        <Tabs.Tab name={tabName} key={tabName}>
          <Tabs.FlatList
            data={DATA}
            showsVerticalScrollIndicator={false}
            renderItem={({index}) => renderTabContent(index)}
            keyExtractor={identity}
          />
        </Tabs.Tab>
      ))}
    </Tabs.Container>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 250,
  },
  boxA: {
    backgroundColor: "white",
  },
  boxB: {
    backgroundColor: "#D8D8D8",
  },
  header: {
    height: HEADER_HEIGHT,
    width: "100%",
    backgroundColor: "#2196f3",
  },
  tabBarContainer: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
  },
  tabLabel: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 10,
    fontSize: RFValue.moderateScale(14),
    color: "#888",
    fontWeight: "400",
  },
  focusedTabLabel: {
    color: "#2196f3",
    fontWeight: "bold",
  },
});

import {View} from "react-native";
import React from "react";
import {RNTab, RNText} from "../../../components";
import {Tabs} from "react-native-collapsible-tab-view";
import {BookHeader, BookOverViewTab} from "../components";

export const BookDetails = () => {
  return (
    <View style={{flex: 1}}>
      <RNTab tabHeader={<BookHeader />}>
        <Tabs.ScrollView>
          <BookOverViewTab />
        </Tabs.ScrollView>

        <Tabs.ScrollView>
          <RNText>TEST2</RNText>
        </Tabs.ScrollView>

        <Tabs.ScrollView>
          <RNText>TEST2</RNText>
        </Tabs.ScrollView>

        <Tabs.ScrollView>
          <RNText>TEST2</RNText>
        </Tabs.ScrollView>
      </RNTab>
    </View>
  );
};

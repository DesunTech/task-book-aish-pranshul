import React from "react";
import {FlatList, View, ActivityIndicator, StyleSheet} from "react-native";
import {ColorValues, StringValues} from "../../constants";
import {Scaling} from "../../constants/dimensions";
import {RNText} from "../Text/RNText";

export const RNFlatList = ({
  data = [],
  renderItem,
  keyExtractor,
  ListEmptyComponent,
  onEndReached,
  onRefresh,
  isRefreshing = false,
  isLoadingMore = false,
  hasMoreData = false,
  onEndReachedThreshold = 0.5,
  footerLoadingColor = ColorValues.background.button,
  emptyText = StringValues.NoData,
  emptyTextStyle = {},
  emptyContainerStyle = {},
  footerStyle = {},
  ...props
}) => {
  const DefaultEmptyComponent = () => (
    <View style={[styles.emptyContainer, emptyContainerStyle]}>
      <RNText
        fontWeight={600}
        size={Scaling.fourteen}
        color={ColorValues.text.muted}
        style={[styles.emptyText, emptyTextStyle]}>
        {emptyText}
      </RNText>
    </View>
  );

  const renderFooter = () => {
    if (!isLoadingMore || !hasMoreData) return null;
    return (
      <View style={[styles.footer, footerStyle]}>
        <ActivityIndicator size="small" color={footerLoadingColor} />
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      ListEmptyComponent={ListEmptyComponent || DefaultEmptyComponent}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      ListFooterComponent={renderFooter}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {textAlign: "center"},
  footer: {
    padding: Scaling.sixteen,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

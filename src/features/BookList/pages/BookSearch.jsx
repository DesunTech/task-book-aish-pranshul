import React, {useState, useEffect} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import axios from "axios";
import {Scaling} from "../../../constants/dimensions";
import {ColorValues, StringValues} from "../../../constants";
import {RNFlatList, RNInput, RNText} from "../../../components";
import {Image} from "expo-image";
import useBookSearch from "../hooks/useBookSearch";
import {BookSearchCard} from "../components/BookSearchCard";

export const BookSearch = () => {
  const {
    loading,
    query,
    bookSuggestions,
    handleClearSearch,
    handleOnChange,
    handleLoadMore,
    handleSearchItemSelect,
    isMoreLoading,
    hasMoreData,
  } = useBookSearch();

  const renderBookItem = ({item}) => {
    const {title, authors, imageLinks} = item.volumeInfo;
    return (
      <BookSearchCard
        title={title}
        authors={authors}
        imageLinks={imageLinks}
        onPress={() => handleSearchItemSelect(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <RNInput
        placeholder={StringValues.SearchForBooks}
        value={query}
        onChangeText={handleOnChange}
        loading={loading}
        handleClearText={handleClearSearch}
      />

      <RNFlatList
        data={bookSuggestions}
        renderItem={renderBookItem}
        keyboardShouldPersistTaps={true}
        isLoadingMore={loading || isMoreLoading}
        hasMoreData={hasMoreData}
        keyExtractor={(item, index) => index}
        onEndReached={handleLoadMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Scaling.ten,
    backgroundColor: ColorValues.background.default,
  },
});

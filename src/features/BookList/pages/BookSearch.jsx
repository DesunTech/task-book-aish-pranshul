import React, {useState, useEffect} from "react";
import {View, StyleSheet} from "react-native";
import axios from "axios";
import {Scaling} from "../../../constants/dimensions";
import {ColorValues, StringValues} from "../../../constants";
import {RNFlatList, RNInput, RNText} from "../../../components";
import {Image} from "expo-image";
import useBookSearch from "../hooks/useBookSearch";

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
      <View style={styles.bookItem}>
        {imageLinks?.thumbnail ? (
          <Image
            source={{uri: imageLinks.thumbnail}}
            style={styles.bookImage}
            contentFit="cover"
          />
        ) : (
          <View style={styles.placeholderImage} />
        )}
        <View style={styles.bookInfo}>
          <RNText numberOfLines={1} size={Scaling.fourteen} fontWeight={700}>
            {title}
          </RNText>
          <RNText>
            {authors ? authors.join(", ") : StringValues.UnKnownAuthor}
          </RNText>
        </View>
      </View>
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
        isLoadingMore={loading || isMoreLoading}
        hasMoreData={hasMoreData}
        keyExtractor={item => item.id}
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

  bookItem: {
    flexDirection: "row",
    marginBottom: Scaling.ten, // Dynamic margin bottom
    alignItems: "center",
  },
  bookImage: {
    aspectRatio: 1 / 1,
    height: Scaling.ten * 7,
    marginRight: Scaling.ten, // Dynamic margin
    borderRadius: Scaling.six, // Dynamic border radius
  },
  placeholderImage: {
    width: Scaling.ten * 5,
    height: Scaling.ten * 7,
    marginRight: Scaling.ten,
    backgroundColor: ColorValues.background.border,
    borderRadius: Scaling.six,
  },
  bookInfo: {
    flexDirection: "column",
  },
});

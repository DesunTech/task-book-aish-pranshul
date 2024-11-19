import { Foundation, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Linking, StyleSheet, Text, View } from "react-native";
import RenderHTML from "react-native-render-html";
import colors from "../utils/colors";

const { width } = Dimensions.get("window");

export const Availability = ({ selectedBookDetail }: any) => {
  return (
    <View style={{ marginBottom: 150 }}>
      <View style={styles.titleContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="subtitles" size={22} color={colors.darkBlack} />
          <Text
            style={{
              color: colors.darkBlack,
              marginLeft: 5,
              fontWeight: "500",
            }}
          >
            Title
          </Text>
        </View>
        <Text style={styles.title}>
          {selectedBookDetail?.volumeInfo?.title || "N/A"}
        </Text>
        {selectedBookDetail?.volumeInfo?.subtitle && (
          <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
            {selectedBookDetail?.volumeInfo?.subtitle}
          </Text>
        )}
      </View>

      <View style={styles.titleContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="details" size={22} color={colors.darkBlack} />
          <Text
            style={{
              color: colors.darkBlack,
              marginLeft: 5,
              fontWeight: "500",
            }}
          >
            Detail
          </Text>
        </View>
        <RenderHTML
          contentWidth={width}
          source={{ html: selectedBookDetail?.volumeInfo?.description }}
          baseStyle={{
            color: colors.darkBlack,
          }}
        />
      </View>

      <View style={styles.titleContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Foundation name="burst-sale" size={22} color={colors.darkBlack} />
          <Text
            style={{
              color: colors.darkBlack,
              marginLeft: 5,
              fontWeight: "500",
            }}
          >
            Availability
          </Text>
        </View>
        <Text style={styles.text}>
          Saleability : {selectedBookDetail?.saleInfo?.saleability}
        </Text>
        <Text style={styles.text}>
          Is Ebook :{" "}
          {selectedBookDetail?.saleInfo?.isEbook == true ? "True" : "False"}
        </Text>
        <Text style={styles.text}>
          List Price :{" "}
          {selectedBookDetail?.saleInfo?.listPrice?.amount +
            " " +
            selectedBookDetail?.saleInfo?.listPrice?.currencyCode}
        </Text>
        <Text style={styles.text}>
          Retail Price :{" "}
          {selectedBookDetail?.saleInfo?.retailPrice?.amount +
            " " +
            selectedBookDetail?.saleInfo?.retailPrice?.currencyCode}
        </Text>
        <Text style={styles.text}>
          Buy Link :{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(selectedBookDetail?.saleInfo?.buyLink)
            }
          >
            Buy on Google Play
          </Text>
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <MaterialIcons name="subtitles" size={22} color={colors.darkBlack} />
          <Text
            style={{
              color: colors.darkBlack,
              marginLeft: 5,
              fontWeight: "500",
            }}
          >
            Identifiers
          </Text>
        </View>
        {selectedBookDetail?.volumeInfo?.industryIdentifiers?.map(
          (item: any, index: number) => {
            return (
              <Text style={styles.text} key={index}>
                {item?.type} : {item?.identifier}
              </Text>
            );
          }
        )}
      </View>

      <View style={styles.titleContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <MaterialIcons name="category" size={22} color={colors.darkBlack} />
          <Text
            style={{
              color: colors.darkBlack,
              marginLeft: 5,
              fontWeight: "500",
            }}
          >
            Categories
          </Text>
        </View>
        {selectedBookDetail?.volumeInfo?.categories?.map(
          (item: string, index: number) => {
            return (
              <Text style={styles.text} key={item}>
                {index + 1}. {item}
              </Text>
            );
          }
        )}
      </View>

      <View style={styles.titleContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <MaterialIcons
            name="supervised-user-circle"
            size={22}
            color={colors.darkBlack}
          />
          <Text
            style={{
              color: colors.darkBlack,
              marginLeft: 5,
              fontWeight: "500",
            }}
          >
            Authors
          </Text>
        </View>
        {selectedBookDetail?.volumeInfo?.authors?.map(
          (item: string, index: number) => {
            return (
              <Text style={styles.text} key={item}>
                {index + 1}. {item}
              </Text>
            );
          }
        )}
      </View>
      

      <View style={styles.titleContainer}>
        <Text style={styles.text}>
          Language: {selectedBookDetail?.volumeInfo?.language}
        </Text>
        <Text style={styles.text}>
          Page Count: {selectedBookDetail?.volumeInfo?.pageCount}
        </Text>
        <Text style={styles.text}>
          Printed Page Count: {selectedBookDetail?.volumeInfo?.printedPageCount}
        </Text>
        <Text style={styles.text}>
          Categories: Computers / Programming / General
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: colors.moreligitPrimary,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    color: colors.darkBlack,
    fontSize: 15,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.darkBlack,
    fontSize: 12,
    fontWeight: "500",
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

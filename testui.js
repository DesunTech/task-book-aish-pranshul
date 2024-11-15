import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";

const BookList = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const filteredBooks = books.filter((book) =>
    book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderBook = ({ item }) => (
    <View style={styles.bookCard}>
      <Image
        source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
        style={styles.bookImage}
      />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.volumeInfo.title}</Text>
        <Text style={styles.bookSubtitle}>{item.volumeInfo.subtitle}</Text>
        <Text style={styles.bookDescription} numberOfLines={3}>
          {item.volumeInfo.description}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Book List</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search books..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialIcons name="filter-list" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Book List */}
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={renderBook}
        contentContainerStyle={styles.list}
      />

      {/* Filter Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Filter Options</Text>
          {/* Add filter options here */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
export default BookList;

const styles = {};

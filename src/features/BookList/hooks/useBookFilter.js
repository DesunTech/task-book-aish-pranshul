import {useState} from "react";
import {useDispatch} from "react-redux";
import {setSubjectFilterOption} from "../../../redux/slice";
import {clearPersistedData} from "../../../redux/store";

const useBookFilter = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const handleFilterSelection = value => {
    setSelectedFilter(value);
    clearPersistedData();
    dispatch(setSubjectFilterOption(value));
    setModalVisible(false);
  };

  return {
    modalVisible,
    setModalVisible,
    handleModalVisible,
    selectedFilter,
    handleFilterSelection,
  };
};

export default useBookFilter;

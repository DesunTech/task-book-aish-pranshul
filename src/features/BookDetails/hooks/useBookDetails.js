import {StringValues} from "../../../constants";

const useBookDetails = () => {
  const handleTabPress = ({tabName}) => {
    switch (tabName) {
      case StringValues.Overview:
        console.log("Overview tab pressed");
        // Call API or handle logic for Overview tab
        break;

      case StringValues.BestSellers:
        console.log("Best Sellers tab pressed");
        // Call API or handle logic for Best Sellers tab
        break;

      case StringValues.NewWriters:
        console.log("New Writers tab pressed");
        // Call API or handle logic for New Writers tab
        break;

      case StringValues.FreeBooks:
        console.log("Free Books tab pressed");
        // Call API or handle logic for Free Books tab
        break;

      case StringValues.Categories:
        console.log("Categories tab pressed");
        // Call API or handle logic for Categories tab
        break;

      default:
        console.log("Unknown tab pressed");
        break;
    }
  };
  return {
    handleTabPress,
  };
};

export default useBookDetails;

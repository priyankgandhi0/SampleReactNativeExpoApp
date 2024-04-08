import { useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import Loader from "../Modals/Loader";
import ApiService from "../API/ApiService";
import { ProductLisResponseModel } from "../API/APIModels";
import UserView from "../CommonViews/UserView";

export default function HomeScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [showPreloader, setPreloader] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [responseData, setResponseData] = useState();

  const itemsPerPage = 10;
  useEffect(() => {
    getProductsList(0, true);
  }, []);

  const fetchMore = async () => {
    if (isLoading) return;
    if (
      responseData != null &&
      responseData.total > responseData.skip + responseData.limit
    ) {
      getProductsList(currentPage);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setCurrentPage(0);
    getProductsList(0);
  };

  return (
    <View style={style.container}>
      <SafeAreaView edges={["top"]} />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        contentContainerStyle={{ padding: 20 }}
        data={items}
        renderItem={({ item, index }) => {
          return <UserView item={item} />;
        }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.1}
      />
      <SafeAreaView edges={["bottom"]} />
      <Loader isLoading={showPreloader} />
    </View>
  );

  async function getProductsList(currentPage, showLoader = false) {
    try {
      setLoading(true);
      setPreloader(showLoader);

      const result = await ApiService.get("/products", {
        skip: currentPage * itemsPerPage,
        limit: itemsPerPage,
      });
      setPreloader(false);
      setRefreshing(false);
      setLoading(false);
      console.log(result);
      if (result.data != null && result.status == 200) {
        //Success
        if (currentPage == 0) {
          setItems([]);
        }
        const model = new ProductLisResponseModel(result.data);
        if (model.products.length > 0) {
          setItems((items) => [...items, ...model.products]);
        }
        setResponseData(model);
        if (model.total > model.skip + model.limit) {
          const nextPage = currentPage + 1;
          setCurrentPage(nextPage);
        }
      } else {
        if (result.data != null && result.data.message != null) {
          //   toast.show(result.data.message);
        } else if (result.status === 400) {
          //   toast.show(t("Bad Request"));
        } else if (result.status > 400 && 420 > result.status) {
          //   toast.show(t("Unauthorized"));
        } else if (result.status >= 500) {
          //   toast.show(t("Internal Server Error"));
        }
      }
      // Do something with the data
    } catch (error) {
      // console.error("Error fetching data1:", error);
      // Handle errors
    }
  }
}

const style = StyleSheet.create({
  container: { flex: 1 },
});

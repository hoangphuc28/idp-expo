import { FoodItem, useCart } from "@/context/CartContext";
import { Plus } from "lucide-react-native";
import React from "react";
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function FoodsScreen() {
  const { addItem } = useCart();

  // Sample food data
  const foodItems: FoodItem[] = [
    {
      id: "1",
      name: "Margherita Pizza",
      price: 12.99,
      description:
        "Fresh tomatoes, mozzarella, basil, and olive oil on a crispy crust",
      image:
        "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "2",
      name: "Beef Burger",
      price: 15.99,
      description:
        "Juicy beef patty with lettuce, tomato, onion, and special sauce",
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "3",
      name: "Chicken Pasta",
      price: 14.99,
      description:
        "Creamy alfredo pasta with grilled chicken and parmesan cheese",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "4",
      name: "Caesar Salad",
      price: 9.99,
      description:
        "Fresh romaine lettuce, croutons, parmesan, and caesar dressing",
      image:
        "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "5",
      name: "Fish Tacos",
      price: 13.99,
      description: "Grilled fish with fresh salsa, cabbage, and lime crema",
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "6",
      name: "Chocolate Cake",
      price: 7.99,
      description:
        "Rich chocolate cake with chocolate frosting and fresh berries",
      image:
        "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const handleAddToCart = (item: FoodItem) => {
    addItem(item);
    Alert.alert("Success", `${item.name} added to cart!`);
  };

  const renderFoodItem = (item: FoodItem) => (
    <View key={item.id} style={styles.foodItem}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <View style={styles.foodContent}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodDescription}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.foodPrice}>${item.price.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddToCart(item)}
          >
            <Plus size={16} color="#ffffff" />
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Menu</Text>
        <Text style={styles.subtitle}>
          Discover delicious dishes crafted with care
        </Text>
      </View>

      <View style={styles.content}>{foodItems.map(renderFoodItem)}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    backgroundColor: "#ffffff",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
  },
  content: {
    padding: 20,
  },
  foodItem: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  foodImage: {
    width: "100%",
    height: 200,
  },
  foodContent: {
    padding: 16,
  },
  foodName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  foodDescription: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  foodPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f97316",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f97316",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    marginLeft: 4,
  },
});

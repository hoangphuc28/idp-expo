import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react-native";
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

export default function CartScreen() {
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (
    id: string,
    currentQuantity: number,
    change: number
  ) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string, name: string) => {
    Alert.alert(
      "Remove Item",
      `Are you sure you want to remove ${name} from your cart?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Remove", style: "destructive", onPress: () => removeItem(id) },
      ]
    );
  };

  const handleClearCart = () => {
    Alert.alert(
      "Clear Cart",
      "Are you sure you want to remove all items from your cart?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Clear All", style: "destructive", onPress: clearCart },
      ]
    );
  };

  const handleCheckout = () => {
    Alert.alert(
      "Checkout",
      `Ready to order ${state.totalItems} items for $${state.totalPrice.toFixed(
        2
      )}?`,
      [
        { text: "Continue Shopping", style: "cancel" },
        {
          text: "Place Order",
          onPress: () => {
            Alert.alert(
              "Success",
              "Order placed successfully! Thank you for your purchase."
            );
            clearCart();
          },
        },
      ]
    );
  };

  if (state.items.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Cart</Text>
          <Text style={styles.subtitle}>Review your selected items</Text>
        </View>

        <View style={styles.emptyCart}>
          <ShoppingBag size={64} color="#d1d5db" />
          <Text style={styles.emptyCartTitle}>Your cart is empty</Text>
          <Text style={styles.emptyCartText}>
            Add some delicious items from our menu to get started!
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Cart</Text>
        <Text style={styles.subtitle}>
          {state.totalItems} {state.totalItems === 1 ? "item" : "items"}
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {state.items.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemContent}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>
                ${item.price.toFixed(2)} each
              </Text>

              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() =>
                    handleQuantityChange(item.id, item.quantity, -1)
                  }
                >
                  <Minus size={16} color="#6b7280" />
                </TouchableOpacity>

                <Text style={styles.quantityText}>{item.quantity}</Text>

                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() =>
                    handleQuantityChange(item.id, item.quantity, 1)
                  }
                >
                  <Plus size={16} color="#6b7280" />
                </TouchableOpacity>
              </View>

              <View style={styles.itemFooter}>
                <Text style={styles.itemTotal}>
                  ${(item.price * item.quantity).toFixed(2)}
                </Text>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => handleRemoveItem(item.id, item.name)}
                >
                  <Trash2 size={18} color="#dc2626" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>${state.totalPrice.toFixed(2)}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearCart}
          >
            <Text style={styles.clearButtonText}>Clear Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={handleCheckout}
          >
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    flex: 1,
    padding: 20,
  },
  cartItem: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 12,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  quantityButton: {
    backgroundColor: "#f3f4f6",
    borderRadius: 4,
    padding: 8,
    marginHorizontal: 4,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    marginHorizontal: 16,
  },
  itemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f97316",
  },
  removeButton: {
    padding: 8,
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyCartTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 16,
    marginBottom: 8,
  },
  emptyCartText: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
    lineHeight: 24,
  },
  footer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f97316",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  clearButton: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6b7280",
  },
  checkoutButton: {
    flex: 2,
    backgroundColor: "#f97316",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

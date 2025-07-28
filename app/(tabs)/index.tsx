import { router } from "expo-router";
import { ChefHat, Clock, Star, Users } from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const navigateToFoods = () => {
    router.push("/foods");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <ChefHat size={48} color="#f97316" />
          <Text style={styles.title}>FoodieExpress</Text>
          <Text style={styles.subtitle}>Delicious food delivered fast</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome to FoodieExpress!</Text>
          <Text style={styles.welcomeText}>
            Discover a world of flavors with our carefully curated selection of
            dishes. From comfort food classics to exotic cuisines, we bring
            restaurant-quality meals directly to your doorstep.
          </Text>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Why Choose Us?</Text>

          <View style={styles.featureItem}>
            <Star size={24} color="#f97316" />
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Quality Ingredients</Text>
              <Text style={styles.featureText}>
                Fresh, locally sourced ingredients in every dish
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Clock size={24} color="#f97316" />
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Fast Delivery</Text>
              <Text style={styles.featureText}>
                Hot meals delivered in 30 minutes or less
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Users size={24} color="#f97316" />
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Expert Chefs</Text>
              <Text style={styles.featureText}>
                Prepared by professional chefs with passion
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.ctaButton} onPress={navigateToFoods}>
          <Text style={styles.ctaButtonText}>Explore Our Menu</Text>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 40,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  headerContent: {
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    marginTop: 8,
  },
  content: {
    padding: 20,
  },
  welcomeSection: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },
  welcomeText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4b5563",
  },
  featuresSection: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  featureContent: {
    marginLeft: 12,
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  featureText: {
    fontSize: 14,
    color: "#6b7280",
  },
  ctaButton: {
    backgroundColor: "#f97316",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ctaButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

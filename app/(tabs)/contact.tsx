import { Mail, MessageSquare, Send, User } from "lucide-react-native";
import React, { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function ContactScreen() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    // Simulate form submission
    Alert.alert(
      "Success",
      "Thank you for your message! We'll get back to you soon.",
      [
        {
          text: "OK",
          onPress: () => {
            setFormData({ name: "", email: "", message: "" });
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>We'd love to hear from you</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Get in Touch</Text>
          <Text style={styles.infoText}>
            Have a question, suggestion, or just want to say hello? Fill out the
            form below and we'll get back to you as soon as possible.
          </Text>
        </View>

        <View style={styles.formSection}>
          <View style={styles.inputGroup}>
            <View style={styles.inputLabel}>
              <User size={20} color="#6b7280" />
              <Text style={styles.labelText}>Name</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Your full name"
              value={formData.name}
              onChangeText={(text) => handleInputChange("name", text)}
              placeholderTextColor="#9ca3af"
            />
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputLabel}>
              <Mail size={20} color="#6b7280" />
              <Text style={styles.labelText}>Email</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="your.email@example.com"
              value={formData.email}
              onChangeText={(text) => handleInputChange("email", text)}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#9ca3af"
            />
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputLabel}>
              <MessageSquare size={20} color="#6b7280" />
              <Text style={styles.labelText}>Message</Text>
            </View>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Tell us what's on your mind..."
              value={formData.message}
              onChangeText={(text) => handleInputChange("message", text)}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              placeholderTextColor="#9ca3af"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Send size={20} color="#ffffff" />
            <Text style={styles.submitButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactInfo}>
          <Text style={styles.sectionTitle}>Other Ways to Reach Us</Text>

          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Email:</Text>
            <Text style={styles.contactValue}>hello@foodieexpress.com</Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Phone:</Text>
            <Text style={styles.contactValue}>+1 (555) 123-4567</Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Hours:</Text>
            <Text style={styles.contactValue}>Mon-Sun: 9:00 AM - 10:00 PM</Text>
          </View>
        </View>
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
  infoSection: {
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
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4b5563",
  },
  formSection: {
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
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111827",
    backgroundColor: "#f9fafb",
  },
  textArea: {
    minHeight: 100,
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f97316",
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  contactInfo: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactItem: {
    flexDirection: "row",
    marginBottom: 12,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    width: 80,
  },
  contactValue: {
    fontSize: 16,
    color: "#6b7280",
    flex: 1,
  },
});

import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { us } from "../assets/aboutUs";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={styles.container}>
      {/* Title Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Temple Crowd Management</Text>
        <Text style={styles.headerSubtitle}>
          {us.proposed_solution}
        </Text>
      </View>

      {/* Problem Statement */}
      <Section title="Problem Statement">
        <Text style={styles.paragraph}>{us.problem_statement}</Text>
      </Section>

      {/* Proposed Solution */}
      <Section title="Proposed Solution">
        <Text style={styles.paragraph}>{us.proposed_solution}</Text>
      </Section>

      {/* Core Ideas */}
      <Section title="Core Ideas">
        {us.core_idea.map((idea, index) => (
          <BulletPoint key={index} text={idea} />
        ))}
      </Section>

      {/* AI & Token Management */}
      <Section title="AI & Token Management">
        <Text style={styles.subheading}>Time Management:</Text>
        <Text style={styles.paragraph}>{us.ai_ml_time_management}</Text>

        <Text style={styles.subheading}>Token Priority:</Text>
        <Text style={styles.paragraph}>{us.token_system_priority}</Text>

        <Text style={styles.subheading}>Refund & Penalty:</Text>
        <Text style={styles.paragraph}>{us.refund_penalty_mechanism}</Text>
      </Section>

      {/* NFC & AI Surveillance */}
      <Section title="Technology Features">
        <Text style={styles.subheading}>AI Surveillance:</Text>
        <Text style={styles.paragraph}>{us.ai_surveillance}</Text>

        <Text style={styles.subheading}>NFC Smart Bands:</Text>
        <Text style={styles.paragraph}>{us.nfc_smart_bands}</Text>
      </Section>

      {/* Devotee Journey */}
      <Section title="Devotee Journey">
        <Text style={styles.subheading}>Before Visit:</Text>
        <Text style={styles.paragraph}>{us.before_visit}</Text>

        <Text style={styles.subheading}>On Arrival:</Text>
        <Text style={styles.paragraph}>{us.on_arrival}</Text>

        <Text style={styles.subheading}>Inside Temple:</Text>
        <Text style={styles.paragraph}>{us.inside_temple}</Text>

        <Text style={styles.subheading}>After Darshan:</Text>
        <Text style={styles.paragraph}>{us.after_darshan}</Text>
      </Section>

      {/* Expected Impact */}
      <Section title="Expected Impact">
        {us.expected_impact.map((impact, index) => (
          <BulletPoint key={index} text={impact} />
        ))}
      </Section>

      {/* Team Roles */}
      <Section title="Team Roles">
        {us.team_roles.map((role, index) => (
          <BulletPoint key={index} text={role} />
        ))}
      </Section>

      {/* Technologies Used */}
      <Section title="Technologies Used">
        {us.technologies_used.map((tech, index) => (
          <BulletPoint key={index} text={tech} />
        ))}
      </Section>

      {/* System Overview */}
      <Section title="System Overview">
        {us.system_overview.map((overview, index) => (
          <BulletPoint key={index} text={overview} />
        ))}
      </Section>

      {/* Expected Outcome */}
      <Section title="Expected Outcome">
        {us.expected_outcome.map((outcome, index) => (
          <BulletPoint key={index} text={outcome} />
        ))}
      </Section>

      <View style={{ height: 30 }} />
    </ScrollView>
    </SafeAreaView>
  );
}

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>{children}</View>
  </View>
);

const BulletPoint = ({ text }) => (
  <View style={styles.bulletPointContainer}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 16,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: "center",
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#4B5563",
    marginTop: 6,
    textAlign: "center",
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 10,
  },
  sectionContent: {
    marginLeft: 2,
  },
  paragraph: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    marginBottom: 8,
  },
  subheading: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111827",
    marginTop: 8,
    marginBottom: 4,
  },
  bulletPointContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  bullet: {
    fontSize: 18,
    lineHeight: 20,
    marginRight: 6,
    color: "#1F2937",
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
  },
});

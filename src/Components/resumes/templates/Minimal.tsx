import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "../../../types"; // Adjust path as needed

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    color: "#555",
    marginBottom: 2,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
    borderBottom: "0.5pt solid #ccc",
    paddingBottom: 2,
  },
  expItem: {
    marginBottom: 8,
  },
  expHeader: {
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  company: {
    fontSize: 10,
  },
  dateLocation: {
    fontSize: 9,
    color: "#777",
    marginBottom: 3,
  },
  bullet: {
    fontSize: 9,
    marginLeft: 8,
    marginBottom: 2,
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    fontSize: 9,
    marginRight: 15,
    marginBottom: 3,
  },
});

// Create a Props interface for the component
interface MinimalProps {
  formData: ResumeData;
}

const Minimal = ({ formData }: MinimalProps) => {
  const { profile, experience, education, skills } = formData;

  return (
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{profile.fullname}</Text>
        <Text style={styles.contact}>
          {profile.email} • {profile.phone} • {profile.location}
        </Text>
        {profile.links?.length > 0 && (
          <Text style={styles.contact}>
            {profile.links
              .map((link) => `${link.type}: ${link.url}`)
              .join(" • ")}
          </Text>
        )}
      </View>

      {/* Summary if available */}
      {profile.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={{ fontSize: 9 }}>{profile.summary}</Text>
        </View>
      )}

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {experience.map((exp, i) => (
          <View key={i} style={styles.expItem}>
            <View style={styles.expHeader}>
              <Text style={styles.jobTitle}>{exp.title}</Text>
              <Text style={styles.company}>{exp.company}</Text>
              <Text style={styles.dateLocation}>
                {exp.startDate} - {exp.current ? "Present" : exp.endDate} |{" "}
                {exp.location}
              </Text>
            </View>
            {exp.responsibilities?.map((resp, j) => (
              <Text key={j} style={styles.bullet}>
                • {resp}
              </Text>
            ))}
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {education.map((edu, i) => (
          <View key={i} style={{ marginBottom: 5 }}>
            <Text style={styles.jobTitle}>{edu.degree}</Text>
            <Text style={styles.company}>{edu.university}</Text>
            <Text style={styles.dateLocation}>
              {edu.startDate} - {edu.current ? "Present" : edu.endDate} |{" "}
              {edu.location}
            </Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skills}>
          {skills.map((skill, i) => (
            <Text key={i} style={styles.skill}>
              • {skill}
            </Text>
          ))}
        </View>
      </View>
    </Page>
  );
};

export default Minimal;

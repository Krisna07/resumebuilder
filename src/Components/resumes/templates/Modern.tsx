import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "../../../types";

// Create Props interface
interface ModernProps {
  formData: ResumeData;
}

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginBottom: 20,
    borderBottom: "1px solid #555",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    marginTop: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
    padding: 5,
    marginBottom: 6,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  company: {
    fontSize: 12,
  },
  dateLocation: {
    fontSize: 10,
    color: "#777",
  },
  bullet: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 2,
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skill: {
    padding: "3px 8px",
    backgroundColor: "#e8f4f8",
    borderRadius: 3,
    fontSize: 10,
  },
});

const Modern = ({ formData }: ModernProps) => {
  const { profile, experience, education, skills } = formData;

  return (
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{profile.fullname}</Text>
        <View style={styles.contact}>
          <Text>{profile.email}</Text>
          <Text>{profile.phone}</Text>
          <Text>{profile.location}</Text>
        </View>
        {profile.summary && (
          <Text style={{ fontSize: 10, marginTop: 10 }}>{profile.summary}</Text>
        )}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skills}>
          {skills?.map((skill, i) => (
            <Text key={i} style={styles.skill}>
              {skill}
            </Text>
          ))}
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {experience?.map((exp, i) => (
          <View key={i} style={{ marginBottom: 8 }}>
            <View style={styles.expHeader}>
              <View>
                <Text style={styles.jobTitle}>{exp.title}</Text>
                <Text style={styles.company}>{exp.company}</Text>
              </View>
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
        {education?.map((edu, i) => (
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
    </Page>
  );
};

export default Modern;

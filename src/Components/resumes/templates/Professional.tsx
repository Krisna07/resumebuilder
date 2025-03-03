import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "../../../types";

// Define props interface
interface ProfessionalProps {
  formData: ResumeData;
}

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Times-Roman",
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 10,
    gap: 15,
  },
  divider: {
    borderBottom: "1px solid #000",
    marginVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    borderBottom: "1pt solid #000",
    paddingBottom: 2,
    marginBottom: 8,
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
    fontStyle: "italic",
  },
  dateLocation: {
    fontSize: 10,
  },
  bullet: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 3,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillGroup: {
    width: "50%",
    marginBottom: 5,
  },
  skillTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  skillList: {
    fontSize: 10,
  },
});

const Professional = ({ formData }: ProfessionalProps) => {
  const { profile, experience, education, skills } = formData;

  // Group skills for two-column layout
  const leftSkills =
    skills?.slice(0, Math.ceil((skills?.length || 0) / 2)) || [];
  const rightSkills = skills?.slice(Math.ceil((skills?.length || 0) / 2)) || [];

  return (
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{profile.fullname}</Text>
        <View style={styles.contact}>
          <Text>{profile.email}</Text>
          <Text>|</Text>
          <Text>{profile.phone}</Text>
          <Text>|</Text>
          <Text>{profile.location}</Text>
        </View>
      </View>

      {/* Summary */}
      {profile.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={{ fontSize: 10, textAlign: "justify" }}>
            {profile.summary}
          </Text>
        </View>
      )}

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {experience?.map((exp, i) => (
          <View key={i} style={{ marginBottom: 10 }}>
            <View style={styles.expHeader}>
              <View>
                <Text style={styles.jobTitle}>{exp.title}</Text>
                <Text style={styles.company}>
                  {exp.company}, {exp.location}
                </Text>
              </View>
              <Text style={styles.dateLocation}>
                {exp.startDate} - {exp.current ? "Present" : exp.endDate}
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
            <View style={styles.expHeader}>
              <Text style={styles.jobTitle}>{edu.degree}</Text>
              <Text style={styles.dateLocation}>
                {edu.startDate} - {edu.current ? "Present" : edu.endDate}
              </Text>
            </View>
            <Text style={styles.company}>
              {edu.university}, {edu.location}
            </Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillGroup}>
            {leftSkills.map((skill, i) => (
              <Text key={i} style={styles.bullet}>
                • {skill}
              </Text>
            ))}
          </View>
          <View style={styles.skillGroup}>
            {rightSkills.map((skill, i) => (
              <Text key={i} style={styles.bullet}>
                • {skill}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </Page>
  );
};

export default Professional;

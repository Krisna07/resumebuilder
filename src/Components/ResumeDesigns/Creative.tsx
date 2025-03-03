import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "../../types";

interface CreativeProps {
  formData: ResumeData;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#f0f4f8",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
    borderBottom: "2px solid #3498db",
    paddingBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2980b9",
  },
  contact: {
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 10,
    gap: 15,
    color: "#2c3e50",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#ecf0f1",
    padding: 5,
    marginBottom: 6,
    color: "#34495e",
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  company: {
    fontSize: 12,
    color: "#7f8c8d",
  },
  dateLocation: {
    fontSize: 10,
    color: "#95a5a6",
  },
  bullet: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 2,
    color: "#34495e",
  },
  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skill: {
    padding: "3px 8px",
    backgroundColor: "#d5f5e3",
    borderRadius: 3,
    fontSize: 10,
    color: "#27ae60",
  },
});

const Creative = ({ formData }: CreativeProps) => {
  const { profile, experience, education, skills } = formData;

  return (
    <Page size="A4" style={styles.page}>
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

      {profile.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={{ fontSize: 10, textAlign: "justify" }}>
            {profile.summary}
          </Text>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {experience?.map((exp, i) => (
          <View key={i} style={{ marginBottom: 8 }}>
            <View style={styles.expHeader}>
              <Text style={styles.jobTitle}>{exp.title}</Text>
              <Text style={styles.company}>{exp.company}</Text>
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {education?.map((edu, i) => (
          <View key={i} style={{ marginBottom: 5 }}>
            <Text style={styles.jobTitle}>{edu.degree}</Text>
            <Text style={styles.company}>
              {edu.university}, {edu.location}
            </Text>
            <Text style={styles.dateLocation}>
              {edu.startDate} - {edu.current ? "Present" : edu.endDate}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skills}>
          {skills.map((skill, i) => (
            <Text key={i} style={styles.skill}>
              {skill}
            </Text>
          ))}
        </View>
      </View>
    </Page>
  );
};

export default Creative;

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "../../../types";

interface ProfessionalProps {
  formData: ResumeData;
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Times-Roman",
    backgroundColor: "#fafafa",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
    borderBottom: "1px solid #333",
    paddingBottom: 10,
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 5,
    color: "#2c3e50",
  },
  contact: {
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 10,
    color: "#7f8c8d",
  },
  contactDivider: {
    marginHorizontal: 5,
  },
  section: {
    marginBottom: 15,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "column",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    borderBottom: "1pt solid #000",
    paddingBottom: 2,
    marginBottom: 8,
    color: "#34495e",
  },
  expHeader: {
    marginBottom: 3,
  },
  jobTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  company: {
    fontSize: 10,
    fontStyle: "italic",
    color: "#7f8c8d",
  },
  dateLocation: {
    fontSize: 10,
  },
  bullet: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 3,
    color: "#34495e",
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
    fontSize: 12,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  skillList: {
    fontSize: 10,
    color: "#34495e",
  },
});

const Professional = ({ formData }: ProfessionalProps) => {
  const { profile, experience, education, skills } = formData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{profile.fullname}</Text>
          <View style={styles.contact}>
            <Text>{profile.email}</Text>
            <Text style={styles.contactDivider}>|</Text>
            <Text>{profile.phone}</Text>
            <Text style={styles.contactDivider}>|</Text>
            <Text>{profile.location}</Text>
          </View>
        </View>

        {profile.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={{ fontSize: 10, textAlign: "justify" }}>
              {profile.summary}
            </Text>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {experience?.map((exp, i) => (
            <View
              key={i}
              style={{
                marginBottom: 10,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <View style={styles.expHeader}>
                <View style={styles.jobTitleRow}>
                  <Text style={styles.jobTitle}>{exp.title},</Text>
                  <Text style={styles.dateLocation}>
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </Text>
                </View>
                <Text style={styles.company}>
                  {exp.company}, {exp.location}
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
            <View
              key={i}
              style={{
                marginBottom: 5,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <View style={styles.jobTitleRow}>
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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, i) => (
              <Text key={i} style={styles.bullet}>
                • {skill}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Professional;

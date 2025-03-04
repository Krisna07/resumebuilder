import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "../../../types";

// Create Props interface
interface ModernProps {
  formData: ResumeData;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#f7f9fc",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    lineHeight: "80%",
  },
  header: {
    borderBottom: "2px solid #3498db",
    paddingBottom: 2,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2980b9",
    marginBottom: "8px",
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    marginTop: 5,
    color: "#2c3e50",
  },
  contactItem: {
    display: "flex",
    flexDirection: "row",
    fontSize: 10,
  },
  section: {
    display: "flex",
    flexDirection: "column",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#ecf0f1",
    padding: "4px 0",
    marginBottom: 4,
    color: "#34495e",
  },
  expHeader: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  company: {
    fontSize: 10,
  },
  dateLocation: {
    fontSize: 10,
  },
  rowSpaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  bullet: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 2,
    color: "#34495e",
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skill: {
    padding: 5,
    paddingBottom: 0,
    border: "1px solid #ccc",
    borderRadius: 3,
    fontSize: 10,
  },
});

const Modern = ({ formData }: ModernProps) => {
  const { profile, experience, education, skills } = formData;
  console.log(skills);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{profile.fullname}</Text>
          <View style={styles.contact}>
            <Text style={styles.contactItem}>{profile.email}</Text>
            <Text style={styles.contactItem}>{profile.phone}</Text>
            <Text style={styles.contactItem}>{profile.location}</Text>
            {profile.links.length > 0 &&
              profile.links.map((link, i) => (
                <Text key={i} style={styles.contactItem}>
                  {link.url}
                </Text>
              ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          {profile.summary && (
            <Text style={{ fontSize: 10, marginTop: 5 }}>
              {profile.summary}
            </Text>
          )}
        </View>

        {/* Skills */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skills}>
            
                {skills.map((item, i) => (
                  <Text key={i} style={styles.skill}>{item}</Text>)
                )}  
     
          </View>
        </View> */}

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience?.map((exp, i) => (
            <View
              key={i}
              style={{
                marginBottom: 8,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <View style={styles.expHeader}>
                <Text style={styles.jobTitle}>{exp.title}</Text>
                <View style={styles.rowSpaceBetween}>
                  <Text style={styles.company}>
                    {exp.company} | {exp.location}
                  </Text>
                  <Text style={styles.dateLocation}>
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </Text>
                </View>
              </View>
              {exp.responsibilities?.map((resp, j) => (
                <View key={j} style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.bulletText}>{resp}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Education */}
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
              <Text style={styles.jobTitle}>{edu.degree}</Text>
              <View style={styles.rowSpaceBetween}>
                <Text style={styles.company}>
                  {edu.university} | {edu.location}
                </Text>
                <Text style={styles.dateLocation}>
                  {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default Modern;

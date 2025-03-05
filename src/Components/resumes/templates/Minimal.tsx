import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "../../../types";

interface MinimalProps {
  formData: ResumeData;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    lineHeight: "100%",
  },
  header: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    color: "#555",
    marginBottom: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactItem: {
    fontSize: 10,
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
    marginBottom: 6,
    borderBottom: "0.5pt solid #ccc",
    paddingBottom: 2,
  },
  expItem: {
    marginBottom: 8,
    display: "flex",
    flexDirection: "column",
  },
  expHeader: {
    marginBottom: 3,
    display: "flex",
    flexDirection: "column",
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  company: {
    fontSize: 10,
  },
  dateLocation: {
    fontSize: 10,
    color: "#777",
    marginBottom: 3,
  },
  bullet: {
    width: "100%",
    fontSize: 10,
    marginLeft: 8,
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    width: "30%",
    fontSize: 10,
    marginRight: 5,
    marginBottom: 2,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const MinimalPDF = ({ formData }: MinimalProps) => {
  const { profile, experience, education, skills } = formData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{profile.fullname}</Text>
          <View style={styles.contact}>
            <Text style={styles.contactItem}>{profile.email}</Text>
            <Text style={styles.contactItem}>{profile.phone}</Text>
            <Text style={styles.contactItem}>{profile.location}</Text>
            {profile.links && profile.links.length > 0 && (
              <Text style={styles.contactItem}>{profile.links[0].url}</Text>
            )}
          </View>
        </View>

        {profile.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={{ fontSize: 10 }}>{profile.summary}</Text>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((exp, i) => (
            <View key={i} style={styles.expItem}>
              <View style={styles.expHeader}>
                <View style={styles.rowContainer}>
                  <Text style={styles.jobTitle}>{exp.title} | </Text>
                  <Text style={styles.company}>{exp.company}</Text>
                </View>
                <Text style={styles.dateLocation}>
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate} |{" "}
                  {exp.location}
                </Text>
              </View>
              {exp.responsibilities?.map((resp, j) => (
                <Text
                  style={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                >
                  -
                  <Text key={j} style={styles.bullet}>
                    {resp}
                  </Text>
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu, i) => (
            <View
              key={i}
              style={{
                marginBottom: 5,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <View style={styles.rowContainer}>
                <Text style={styles.jobTitle}>{edu.degree} |</Text>
                <Text style={styles.company}> {edu.university}</Text>
              </View>

              <Text style={styles.dateLocation}>
                {edu.startDate} - {edu.current ? "Present" : edu.endDate} |{" "}
                {edu.location}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skills}>
            {skills.map((skill, i) => (
              <Text key={i} style={styles.skill}>
                - {skill}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MinimalPDF;

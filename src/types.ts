export interface ResumeData {
  profile: Profile;
  skills: string[];
  experience: Experience[];
  education: Education[];
  certificates: Certificates[];
}

export interface Profile {
  fullname: string;
  email: string;
  phone: string;
  location: string;
  links: { type: string; url: string }[];
  summary: string;
}
export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}
export interface Education {
  degree: string;
  university: string;
  year: string;
  location: string;
}
export interface Certificates {
  title: string;
  issued_by: string;
  year: string;
}
export interface UserResume {
  content: string;
  template: "modern" | "classic" | "minimal";
}

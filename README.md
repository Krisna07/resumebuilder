#Resume Builder App

The Resume Builder App is a user-friendly tool designed to assist individuals in creating professional resumes by entering their details and selecting a preferred resume design. 
This application offers a range of customizable templates to suit various preferences and professional fields.

#Features

User Input

Data Entry: Users can input their personal details, work experience, education, skills, and additional information required for a resume.
Preview: Users can preview their resume in real-time as they enter information to ensure the chosen template and details align effectively.

Resume Customization
Template Selection: The app provides a variety of pre-designed # Resume Builder App

The Resume Builder App is a user-friendly tool designed to assist individuals in creating professional resumes. Users can either upload an existing PDF resume to get started or manually enter their details. The application leverages AI to help tailor resumes to specific job descriptions and offers a range of customizable templates to suit various preferences and professional fields.

## Features

*   **AI-Powered Resume Generation:**
    *   Upload a PDF resume to automatically parse and populate fields.
    *   Generate and refine resume content with AI assistance.
    *   Tailor your resume to a specific job description by providing the job ad text or URL.
*   **Manual Data Entry:** Users can input their personal details, work experience, education, skills, and certifications.
*   **Real-time Preview:** Preview your resume in real-time as you enter information and select different templates.
*   **Template Selection:** Choose from a variety of pre-designed templates (Modern, Creative, Professional, Minimal).
*   **PDF Export:** Download your finalized resume as a PDF.
*   **Job Description Analysis:** (In-progress) Analyze how well your resume matches a given job description.

## Technologies Used

*   **Frontend:**
    *   React
    *   TypeScript
    *   Vite
    *   Tailwind CSS
*   **AI Integration:**
    *   Google Generative AI (Gemini 2.0 Flash)
*   **PDF Handling:**
    *   `react-pdftotext` for extracting text from uploaded PDFs.
    *   `html2pdf.js` for generating PDF documents from HTML.
*   **Styling & UI:**
    *   `clsx` and `class-variance-authority` for dynamic styling.
    *   `lucide-react` and `react-icons` for icons.
*   **Date Picking:**
    *   `react-datepicker`
*   **(for job description extraction):**
    *   `axios`
    *   `cheerio`

## Project Structure

```
/public                 # Static assets
/src
├── App.tsx             # Main application component
├── main.tsx            # Entry point of the application
├── index.css           # Global styles
├── vite-env.d.ts       # Vite environment type definitions
├── types.ts            # TypeScript type definitions
│
├── Components
│   ├── Aiactions/      # AI-related functions (generation, analysis)
│   │   ├── generate.ts
│   │   └── getJobDetails.ts
│   ├── Forms/          # Multi-step form components
│   │   ├── MultiStepForm.tsx
│   │   ├── UserInfoStep.tsx
│   │   ├── SkillsStep.tsx
│   │   ├── ExperienceStep.tsx
│   │   ├── EducationStep.tsx
│   │   ├── CertificatesStep.tsx
│   │   ├── JobDescription.tsx
│   │   ├── Datepicker.tsx
│   │   └── FomLayout.tsx
│   ├── resumes/        # Resume preview and template components
│   │   ├── ResumePreview.tsx
│   │   ├── pdfExportUtility.ts
│   │   └── templates/
│   │       ├── Creative.tsx
│   │       ├── Minimal.tsx
│   │       ├── Modern.tsx
│   │       └── Professional.tsx
│   ├── Button.tsx      # Reusable Button component
│   ├── Header.tsx      # (Partially implemented) Header component
│   └── Input.tsx       # Reusable Input component
│
└── utils/
    └── PEFexport.ts    # (Empty) PDF export utility
```

## Getting Started

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd resumebuilder
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Create a `.env` file in the root of the project and add your Google Generative AI API key:
    ```env
    VITE_GEMINI_API=YOUR_API_KEY
    ```
    Replace `YOUR_API_KEY` with your actual Gemini API key.

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```
This will start the Vite development server, typically at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the codebase using ESLint.
*   `npm run preview`: Serves the production build locally for preview.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.templates for users to choose from.
Customization: Users can further customize fonts, colors, and layout to suit their preferences.

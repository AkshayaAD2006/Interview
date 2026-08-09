# Interview
# Personalized Interview Preparing System

An AI-powered multi-agent system that provides **personalized interview preparation** based on a candidate's resume, skills, projects, target job role, and job description.

---

## 1. Project Overview

The **Personalized Interview Preparing System** is an AI-based interview preparation platform designed to help candidates prepare for technical and HR interviews according to their individual profiles.

Unlike traditional interview preparation systems that provide the same questions to every candidate, this system analyzes the candidate's:

* Resume
* Technical skills
* Projects
* Education
* Experience
* Target job role
* Job description
* Mock interview performance

Based on this information, the system identifies skill gaps, generates personalized interview questions, evaluates answers, and creates an individualized preparation plan.

---

## 2. Problem Statement

Students and job seekers often prepare for interviews using generic question banks and study materials. These resources do not consider the candidate's individual skills, projects, weaknesses, or the requirements of the target job role.

This creates several problems:

* Generic interview questions
* Lack of personalized preparation
* Difficulty identifying skill gaps
* No detailed evaluation of interview answers
* Lack of project-specific interview preparation
* No personalized study plan
* Difficulty understanding job-specific requirements

Therefore, there is a need for an intelligent system that can analyze a candidate's profile and provide personalized interview preparation.

---

## 3. Objective

The main objective of this project is to develop an AI-powered system that:

1. Analyzes the candidate's resume.
2. Extracts technical and non-technical skills.
3. Analyzes the target job description.
4. Compares candidate skills with job requirements.
5. Identifies skill gaps.
6. Generates personalized interview questions.
7. Conducts a mock interview.
8. Evaluates candidate answers.
9. Provides detailed feedback.
10. Generates a personalized interview preparation plan.

---

## 4. Proposed Solution

The system uses a **multi-agent architecture** in which different AI agents perform specialized tasks.

The agents are coordinated by an **Orchestrator Agent**, which manages the flow of information between the agents.

### High-Level Workflow

```text
                    USER
                     |
                     v
             Candidate Profile
                     |
                     v
             Resume / Job Data
                     |
                     v
             Orchestrator Agent
                     |
       +-------------+-------------+
       |             |             |
       v             v             v
 Resume Agent   Skill Agent    Job Analysis
       |             |             |
       +-------------+-------------+
                     |
                     v
              Skill Gap Analysis
                     |
                     v
          Question Generation Agent
                     |
                     v
             Mock Interview Agent
                     |
                     v
            Answer Evaluation Agent
                     |
                     v
               Feedback Agent
                     |
                     v
        Personalized Preparation Plan
```

---

# 5. Multi-Agent Architecture

## 5.1 Orchestrator Agent

The Orchestrator Agent controls the complete workflow.

### Responsibilities

* Receives candidate information.
* Coordinates the specialized agents.
* Passes information between agents.
* Maintains the interview preparation workflow.
* Combines the outputs of different agents.
* Produces the final personalized result.

---

## 5.2 Resume Analysis Agent

The Resume Analysis Agent analyzes the candidate's resume.

### Extracts

* Education
* Technical skills
* Programming languages
* Tools and technologies
* Projects
* Certifications
* Experience
* Soft skills
* Important keywords

### Output

A structured candidate profile is generated from the resume.

---

## 5.3 Skill Analysis Agent

The Skill Analysis Agent evaluates the candidate's skills.

### Identifies

* Strong skills
* Intermediate skills
* Weak skills
* Missing skills
* Technical skills
* Soft skills

This information is used later for personalized question generation and preparation planning.

---

## 5.4 Job Description Analysis Agent

The Job Description Analysis Agent analyzes the requirements of the target role.

### Extracts

* Required technical skills
* Preferred skills
* Programming languages
* Frameworks
* Tools
* Domain knowledge
* Soft skills
* Experience requirements

---

## 5.5 Skill Gap Analysis Agent

The Skill Gap Analysis Agent compares the candidate's skills with the requirements of the target job.

### Example

```text
Candidate Skills:
Python
SQL
Machine Learning
Java

Job Requirements:
Python
SQL
Machine Learning
Deep Learning
Docker
Cloud

Skill Gap:

Strong:
Python
SQL
Machine Learning

Needs Improvement:
Deep Learning

Missing:
Docker
Cloud
```

The system can also calculate an approximate **Job Readiness Score** based on the available information.

---

## 5.6 Interview Question Generation Agent

This agent generates personalized interview questions using:

* Resume
* Candidate skills
* Projects
* Target role
* Job description
* Skill gaps

### Question Categories

* Technical Questions
* Programming Questions
* Machine Learning / AI Questions
* Project-Based Questions
* Resume-Based Questions
* Scenario-Based Questions
* Behavioral Questions
* HR Questions

The system prioritizes candidate-specific questions instead of relying only on generic questions.

---

## 5.7 Mock Interview Agent

The Mock Interview Agent conducts an interactive interview.

### Workflow

```text
Question
   ↓
Candidate Answer
   ↓
Answer Evaluation
   ↓
Feedback
   ↓
Next Question
```

The system can support different interview modes:

* Technical
* HR
* Mixed
* Role-specific

The candidate can also select the number of questions.

---

## 5.8 Answer Evaluation Agent

The Answer Evaluation Agent evaluates candidate responses.

### Evaluation Criteria

* Technical Accuracy
* Relevance
* Completeness
* Clarity
* Communication
* Problem Solving

### Example

```text
Technical Accuracy: 8/10
Relevance: 9/10
Completeness: 7/10
Clarity: 8/10

Overall Score: 8.0/10
```

The system also provides:

* Strengths
* Missing information
* Areas for improvement
* Improved answer
* Recommendations

---

## 5.9 Feedback Agent

The Feedback Agent combines the interview results and provides personalized feedback.

It identifies:

* Strong areas
* Weak areas
* Frequently missed concepts
* Interview performance
* Communication issues
* Recommended preparation topics

---

# 6. Key Features

### Candidate Profile

Users can enter:

* Name
* Degree
* Branch
* Graduation year
* Experience level
* Technical skills
* Projects
* Certifications
* Target job role

### Resume Analysis

Upload or provide resume information for AI-based analysis.

### Job Description Analysis

Analyze the requirements of the target position.

### Skill Gap Detection

Identify skills that match, need improvement, or are missing.

### Personalized Questions

Generate questions based on the candidate's actual profile.

### Mock Interview

Conduct an interactive interview with AI-generated questions.

### Answer Evaluation

Evaluate responses and provide scores and feedback.

### Interview Performance Dashboard

Display:

* Overall score
* Technical score
* Communication score
* Problem-solving score
* Strengths
* Weaknesses

### Personalized Preparation Plan

Generate a preparation plan based on the candidate's performance.

---

# 7. System Workflow

The complete system workflow is:

```text
1. Candidate Registration
          ↓
2. Candidate Profile Creation
          ↓
3. Resume Upload / Input
          ↓
4. Resume Analysis
          ↓
5. Skill Extraction
          ↓
6. Target Job Selection
          ↓
7. Job Description Analysis
          ↓
8. Skill Gap Analysis
          ↓
9. Personalized Question Generation
          ↓
10. Mock Interview
          ↓
11. Answer Evaluation
          ↓
12. Performance Analysis
          ↓
13. Personalized Feedback
          ↓
14. Personalized Preparation Plan
```

---

# 8. Example

### Candidate Input

```text
Degree:
B.Tech Artificial Intelligence and Data Science

Skills:
Python
Java
SQL
Machine Learning

Projects:
AI-Based Waste Management System
Hospital Health Card Management System

Target Role:
Machine Learning Engineer
```

### System Analysis

```text
Strong Skills:
Python
SQL
Machine Learning

Skills to Improve:
Deep Learning
Statistics

Project Preparation:
Waste Management Project
Hospital Health Card Project
```

### Generated Questions

```text
1. Explain the machine learning algorithm used in your project.

2. How did you handle data preprocessing?

3. What is overfitting and how can it be prevented?

4. Explain the difference between a Decision Tree and Random Forest.

5. What challenges did you face while developing your project?
```

### Final Result

```text
Interview Score: 8.2 / 10

Strong Areas:
- Python
- Machine Learning
- Project Explanation

Weak Areas:
- Deep Learning
- Statistics
- Communication

Priority:
High → Deep Learning
High → Statistics
Medium → Communication
```

---

# 9. Technology Stack

| Component               | Technology                 |
| ----------------------- | -------------------------- |
| Frontend                | React                      |
| Backend                 | Python                     |
| API Framework           | FastAPI                    |
| AI Model                | Gemini API / LLM           |
| Database                | SQLite / JSON              |
| Version Control         | Git & GitHub               |
| Development Environment | VS Code / Google AI Studio |
| Documentation           | Markdown                   |

---

# 10. Project Structure

```text
personalized-interview-preparing-system/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── main.py
│   │
│   ├── agents/
│   │   ├── orchestrator.py
│   │   ├── resume_agent.py
│   │   ├── skill_agent.py
│   │   ├── job_agent.py
│   │   ├── skill_gap_agent.py
│   │   ├── question_agent.py
│   │   ├── interview_agent.py
│   │   └── evaluation_agent.py
│   │
│   ├── models/
│   │   └── schemas.py
│   │
│   ├── services/
│   │   └── llm_service.py
│   │
│   └── requirements.txt
│
├── docs/
│   ├── architecture.png
│   ├── workflow.png
│   └── system-design.md
│
├── screenshots/
│   ├── home.png
│   ├── profile.png
│   ├── resume-analysis.png
│   ├── skill-analysis.png
│   ├── mock-interview.png
│   ├── evaluation.png
│   └── preparation-plan.png
│
├── notes/
│   └── scanned-class-notes.pdf
│
├── video/
│   └── architecture-workflow-link.txt
│
├── .env.example
├── .gitignore
├── README.md
└── requirements.txt
```

---

# 11. Installation

## Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd personalized-interview-preparing-system
```

---

## Backend Setup

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## Environment Variables

Create a `.env` file:

```text
GEMINI_API_KEY=your_api_key_here
```

Do not upload the `.env` file to GitHub.

Use `.env.example` as a template.

---

## Start Backend

```bash
uvicorn backend.main:app --reload
```

The backend will be available locally at:

```text
http://localhost:8000
```

---

## Start Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

# 12. API Endpoints

| Method | Endpoint                  | Purpose                      |
| ------ | ------------------------- | ---------------------------- |
| POST   | `/api/profile`            | Create candidate profile     |
| POST   | `/api/resume/analyze`     | Analyze resume               |
| POST   | `/api/job/analyze`        | Analyze job description      |
| POST   | `/api/skills/analyze`     | Analyze candidate skills     |
| POST   | `/api/skill-gap`          | Identify skill gaps          |
| POST   | `/api/questions/generate` | Generate interview questions |
| POST   | `/api/interview/start`    | Start mock interview         |
| POST   | `/api/interview/answer`   | Submit interview answer      |
| GET    | `/api/interview/results`  | Get interview results        |
| GET    | `/api/preparation-plan`   | Get preparation plan         |

---

# 13. Architecture Diagram

The system follows a multi-agent architecture.

![System Architecture](docs/architecture.png)

---

# 14. Workflow Diagram

![System Workflow](docs/workflow.png)

---

# 15. Architecture Workflow Video

The architecture and workflow of the system are demonstrated in the following video:

**[Watch Architecture Workflow Video](VIDEO_LINK_HERE)**

> Replace `VIDEO_LINK_HERE` with the actual shareable video link before submission.

---

# 16. Prototype Screenshots

## Home Page

![Home Page](screenshots/home.png)

## Candidate Profile

![Candidate Profile](screenshots/profile.png)

## Resume Analysis

![Resume Analysis](screenshots/resume-analysis.png)

## Skill Gap Analysis

![Skill Analysis](screenshots/skill-analysis.png)

## Mock Interview

![Mock Interview](screenshots/mock-interview.png)

## Interview Evaluation

![Evaluation](screenshots/evaluation.png)

## Personalized Preparation Plan

![Preparation Plan](screenshots/preparation-plan.png)

---

# 17. Class Notes

The scanned class notes related to the development and architecture of this project are available in the `notes` folder.

[View Scanned Class Notes](notes/scanned-class-notes.pdf)

---

# 18. Sample Output

Example final result:

```text
====================================
PERSONALIZED INTERVIEW REPORT
====================================

Candidate:
Demo Candidate

Target Role:
Machine Learning Engineer

Job Readiness:
72%

------------------------------------
STRONG AREAS
------------------------------------
✓ Python
✓ SQL
✓ Machine Learning

------------------------------------
AREAS TO IMPROVE
------------------------------------
⚠ Deep Learning
⚠ Statistics
⚠ Model Deployment

------------------------------------
INTERVIEW SCORE
------------------------------------
Technical Accuracy: 8.2/10
Communication: 7.8/10
Problem Solving: 8.0/10

Overall: 8.0/10

------------------------------------
HIGH PRIORITY TOPICS
------------------------------------
1. Deep Learning
2. Statistics
3. Model Deployment

------------------------------------
RECOMMENDATION
------------------------------------
Complete focused revision of the high-priority
topics and take another mock interview.
```

---

# 19. Advantages

* Personalized interview preparation
* Resume-based question generation
* Job-specific preparation
* Automated skill gap analysis
* Interactive mock interviews
* AI-based answer evaluation
* Personalized feedback
* Individual preparation plans
* Modular multi-agent architecture
* Can be extended to different job roles

---

# 20. Limitations

The prototype has some limitations:

* AI-generated evaluations may not always perfectly reflect human interview assessment.
* Resume parsing accuracy depends on the format and quality of the resume.
* Job-readiness scores are indicative rather than definitive.
* The quality of generated questions depends on the underlying language model.
* Internet connectivity may be required when using cloud-based AI APIs.
* The prototype may not cover every possible interview domain.

---

# 21. Future Enhancements

Future versions can include:

* Voice-based mock interviews
* Speech-to-text processing
* Facial expression and communication analysis
* Real-time interview feedback
* Video interview simulation
* Company-specific interview preparation
* Integration with job portals
* Coding interview environment
* Programming problem evaluation
* Personalized learning resources
* Progress tracking
* Interview history
* Multiple language support
* Mobile application
* Advanced candidate analytics

---

# 22. Security and Privacy

The system should follow basic security practices:

* API keys are stored using environment variables.
* API keys are never committed to GitHub.
* `.env` is included in `.gitignore`.
* Candidate information should be handled securely.
* Uploaded resumes should not be exposed publicly.
* Sensitive personal information should not be included in demo data.

---

# 23. Project Deliverables

The final project repository contains:

* [x] AI agent architecture
* [x] System workflow
* [x] Working prototype
* [x] Source code
* [x] README documentation
* [x] Architecture diagram
* [x] Workflow video
* [x] Prototype screenshots
* [x] Scanned class notes
* [x] Installation instructions
* [x] Sample input and output

---

# 24. Conclusion

The **Personalized Interview Preparing System** provides an intelligent and adaptive approach to interview preparation.

By combining resume analysis, skill analysis, job-description analysis, skill-gap detection, personalized question generation, mock interviews, answer evaluation, and feedback, the system creates an individualized preparation experience for each candidate.

The multi-agent architecture allows different components to perform specialized tasks while the Orchestrator Agent coordinates the complete workflow.

The system can be further extended with voice interviews, coding assessments, company-specific preparation, progress tracking, and multilingual support.

---

## Project Status

**Status:** Prototype / Academic Project

**Project:** Personalized Interview Preparing System

**Architecture:** Multi-Agent AI System

**Repository:** `YOUR_GITHUB_REPOSITORY_URL`

**Workflow Video:** `VIDEO_LINK_HERE`

https://mellow-panda-ba57d7.netlify.app/

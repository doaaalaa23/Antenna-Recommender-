# 📡 Antenna Recommender

## 🌐 Live Demo

👉🏻**https://share.google/Ku0dn10CWi6DweL2r**
> **An AI-powered bilingual web application that helps students, RF engineers, and researchers select the most suitable antenna based on technical requirements using an intelligent recommendation engine and Google Gemini AI.**

![Homepage](screenshots/homepage.jpg)

![Status](https://img.shields.io/badge/Status-Completed-success)
![AI](https://img.shields.io/badge/AI-Google%20Gemini-blue)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)
![Languages](https://img.shields.io/badge/Languages-English%20%7C%20Arabic-orange)

---

## 📖 Overview

Selecting the right antenna requires evaluating multiple RF parameters such as frequency, gain, polarization, radiation pattern, and application type. Finding the best option often requires consulting textbooks, manufacturer datasheets, and technical references.

**Antenna Recommender** simplifies this process by allowing users to enter their project requirements—or simply describe their project in natural language—and receive intelligent antenna recommendations, alternative options, technical comparisons, and AI-generated installation guidance.

---

## ✨ Features

### 🎯 Intelligent Recommendation Engine

* Multi-parameter antenna filtering
* Frequency, gain, polarization, and coverage matching
* Alternative recommendations when no exact match exists
* Fast and accurate recommendation process

### 🤖 AI Project Analyzer

* Describe your project in plain language
* Google Gemini extracts the required technical parameters automatically
* No RF expertise required

### 📊 Antenna Comparison

Compare recommended antennas side-by-side, including:

* Gain
* Frequency range
* Beamwidth
* Polarization
* Size
* Cost

### 📡 Radiation Patterns

* Interactive radiation pattern visualization
* Physical characteristics
* Technical specifications

### 🛠 AI Installation Guide

Automatically generates:

* Installation steps
* Safety recommendations
* Best practices

Available in both **English** and **Arabic**.

### 🌍 Bilingual Support

* English & Arabic
* RTL/LTR layout switching
* Responsive across desktop, tablet, and mobile devices

---

## 📸 Application Preview

| Recommendation Form                                         | Recommendation Results                                     |
| ----------------------------------------------------------- | ---------------------------------------------------------- |
| ![Recommendation Form](screenshots/recommendation-form.png) | ![Recommendation Results](screenshots/antenna-results.jpg) |

---

## 🛠 Technology Stack

| Category                  | Technologies                           |
| ------------------------- | -------------------------------------- |
| **Frontend**              | HTML5, JavaScript (ES6), Tailwind CSS  |
| **AI Integration**        | Google Gemini API                      |
| **Recommendation Engine** | Custom rule-based filtering            |
| **Data Layer**            | `antennaData` (Single Source of Truth) |
| **Internationalization**  | English / Arabic with RTL support      |

### Supported Antenna Types

* Dipole
* Monopole
* Yagi-Uda
* Parabolic Dish
* Patch Microstrip
* Loop
* Helical

---

## 🚀 Getting Started

### Prerequisites

* Google Chrome, Firefox, or Microsoft Edge
* Google Gemini API Key

### Installation

```bash
git clone https://github.com/<your-username>/antenna-recommender.git

cd antenna-recommender
```

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

> ⚠️ Never commit your API key to GitHub.

Run locally:

```bash
npx serve .
```

Or simply open `index.html` in your browser.

---

## 📂 Project Structure

```text
antenna-recommender/
│
├── index.html
├── DEBUGGING_PACKET.md
├── LICENSE
├── src/
│   ├── ai/
│   ├── data/
│   ├── engine/
│   ├── i18n/
│   └── ui/
│
├── screenshots/
│
├── docs/
│   ├── AR_Project_Brief.pdf
│   ├── AR_BRD.pdf
│   ├── AR_PRD.pdf
│   └── Action_Plan.pdf
│
└── README.md
```

---

## 📄 Documentation

The complete project documentation is available in the **docs** folder.

* 📘 Project Brief
* 📗 Business Requirements Document (BRD)
* 📙 Product Requirements Document (PRD)
* 📕 Action Plan

---

## 👥 Team

| Name                 | Role            |
| -------------------- | --------------- |
| **Nourin Elshenawi** | Project Manager |
| **Doaa Alaaelden**   | Team Member     |
| **Rowan Mohamed**    | Team Member     |
| **Marina Essam**     | Team Member     |

**Academic Sponsor:**
**Dr. Randa Fouad**

---

## 🛠️ Quality Assurance & Debugging

We follow evidence-based debugging practices to ensure dynamic component stability, graceful network fallbacks, and multi-language alignment.

* For complete issue analysis, reproduction steps, split diagnoses, and before/after visual proofs, check our **[Debugging & Investigation Board](DEBUGGING_PACKET.md)**.
* For the full engineering methodology and detailed test scenarios, view the **[QA Bug Report (PDF)](docs/QA_Bug_Report.pdf)**.

---
## 📜 License

This project was developed for educational and academic purposes.
No license has been specified at this time.

---

<div align="center">

### ⭐ If you found this project interesting, consider giving it a star!

**Built with ❤️ using HTML, JavaScript, Tailwind CSS, and Google Gemini AI**

</div>

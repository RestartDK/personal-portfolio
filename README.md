# Personal Portfolio Website

## ✏️ Overview

Welcome to the repository for my personal portfolio website. This website serves as a digital showcase of my skills, projects, and experiences in the world of web development and programming. It's a reflection of my journey, the challenges I've tackled, and the solutions I've crafted.

## ⛰️ Purpose

The primary purpose of this portfolio website is:

1. **Showcase**: To provide a platform where potential employers, colleagues, or anyone interested can view my work, understand my expertise, and get a sense of who I am as a developer.
2. **Networking**: To offer a point of contact for collaboration, job opportunities, or networking.
3. **Learning**: Building and maintaining this portfolio is a continuous learning experience, from design to deployment.

## ⚙️ Cloning and Running Locally

If you're interested in cloning this repository and running the website on your local machine, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/RestartDK/personal-portfolio.git
2. **Install Dependencies**:
   ```bash
   npm install
3. **Setup EmailJS Configuration**:
    - Create a new file named **emailcredentials.js** inside the src/data folder.
    - Populate the file with the following content:
   ```javascript
   export default {
    serviceID: 'ENTER SERVICE ID',
    templateID: 'ENTER TEMPLATE ID',
    userID: 'ENTER USER ID'
    }
4. **Run the Development Server**:
    ```bash
    npm dev start

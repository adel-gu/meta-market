<a name="readme-top"></a>

<div align="center">

  <img src="packages/mint-icons/assets/logo.svg" alt="logo" width="140"  height="auto" />
  <br/>

  <h2><b>Meta Market</b></h2>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🏛️ Project Structure](#project-structure)
  - [🏗️ Key Technologies and Features](#built-with)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)

  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)

- [🙏 Acknowledgements](#acknowledgements)

- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Meta Market <a name="about-project"></a>

**Meta Market** is a NFT marketplace built using a monorepo architecture, leveraging React and microfrontend design principles. The application is divided into five independent React applications, each serving a distinct function within the ecosystem, along with shared design system and icons packages. This microfrontend architecture ensures modularity, scalability, and independent deployment, while the monorepo setup allows for seamless code sharing and consistency across all projects.

## 🏛️ Project Structure <a name="project-structure"></a>

The project consists of the following microfrontends and packages:

> <h3>Microfrontends</h3>

1. **Container** (Host Application)

   Acts as the entry point for the entire system.
   Responsible for orchestrating and rendering the other microfrontend applications.
   Utilizes BrowserRouter for managing global routing.
   Ensures decoupling by loading microfrontends using dynamic imports.

2. **Auth** (Authentication Application)

   Handles user signup, login, and authentication flow.
   Manages secure user sessions and access tokens.
   Provides OAuth integrations for third-party logins (e.g., Google, GitHub).
   Uses MemoryRouter for isolated routing within the microfrontend.

3. **Landing** (Marketing Application)

   Focuses on the home page and marketing content.
   Includes features such as introductory sections, calls to action, and promotional material.
   Aims to attract new users with information on the platform’s features and benefits.

4. **Market** (NFT Marketplace Application)

   Core application for browsing NFTs, collections, and artist rankings.
   Supports advanced filtering, sorting, and searching of NFTs.
   Displays trending collections and top-ranked artists.
   Integrates with a blockchain backend for fetching NFT data and listings.

5. **Profiles** (User Profiles Application)

   Dedicated to artist profiles and individual NFT details.
   Showcases artist information, social links, and their collections.
   Provides detailed pages for each NFT, including descriptions, ownership history, and purchase options.

> <h3>Packages</h3>

1. **mint-ui** (Design system and UI library)

   A React component library for the design system and UI components.
   Ensures a consistent look and feel across all microfrontends.
   Built with Tailwind CSS and React to provide reusable components.

2. **mint-icons** (Icons library)

   A library providing a set of SVG icons for use across all applications.
   Designed to integrate seamlessly with the mint-ui components.

## 🏗️ Key Technologies and Features <a name="built-with"></a>

- **React & TypeScript:** For type safety and a modern development experience.
- **Tailwind CSS:** For a consistent, responsive design.
- **Webpack Module Federation:** Enables dynamic loading of microfrontend modules.
- **Monorepo Architecture:** Simplifies code sharing and dependency management.
- **Shared Component Libraries:** Ensures design consistency and speeds up development.

<!-- Features -->

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

> Link to deployed project.

- [Live Demo Link](https://d1zer73e5vmia3.cloudfront.net/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Setup

Clone this repository to your desired folder:

Example commands:

```sh
  cd my-folder
  git clone git@github.com:adel-gu/meta-market.git
```

### Install

Install this project with:

Example command:

```sh
  cd meta-market
  npm install --legacy-peer-deps
```

### Usage

To run the project, execute the following command:

Example command:

- To Run the whole application

```sh
  npx nx serve container
```

- To run a specific application (auth application for example):

```sh
  npx nx serve auth
```

### Run tests

To run tests, run the following command:

```sh
  npx nx run mint-ui:test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- Figma design by [Anima](https://www.figma.com/@anima).
- The project setup using [Nx](https://nx.dev/) tool.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

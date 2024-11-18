<a name="readme-top"></a>

<div align="center">
  <h2>🖼️ Mint Icons</h2>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🏗️ Key Technologies and Features](#built-with)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)

  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)

- [🙏 Acknowledgements](#acknowledgements)

<!-- PROJECT DESCRIPTION -->

# 📖 Mint Icons <a name="about-project"></a>

**mint-icons** is a React-based icon library designed for seamless integration across the MetaMarket microfrontend applications. This package provides a collection of reusable SVG icons optimized for performance and accessibility, ensuring a consistent visual experience throughout the project.

## 📦 Features <a name="built-with"></a>

- 📁 SVG Icons: A set of optimized, scalable vector icons.
- 🛠️ React Components: Easy-to-use, customizable icons as React components.
- 🎨 Tailwind CSS Support: Pre-styled with Tailwind classes for quick integration.
- ⚡ Tree-shakable: Import only the icons you need to reduce bundle size.
- 🚀 TypeScript Support: Fully typed components for a better developer experience.

<!-- Features -->

<!-- LIVE DEMO -->

## 🚀 NPM <a name="live-demo"></a>

- [Home Link](https://www.npmjs.com/package/@meta-market/mint-ui)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

### Install

Install this project with:

```sh
  npm install @metamarket/mint-icons
```

### Build Icons

```sh
  npx nx run mint-icons:build:icons
```

### Usage

```javascript
  import { ArrowLeft, ArrowRight } from '@metamarket/mint-icons';

  export default function App() {
    return (
      <div className="flex items-center gap-4">
        <ArrowLeft className="w-6 h-6 text-gray-600" />
        <ArrowRight className="w-6 h-6 text-blue-500" />
      </div>
    );
  }
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- Figma design by [Anima](https://www.figma.com/@anima).
- The project setup using [Nx](https://nx.dev/) tool.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

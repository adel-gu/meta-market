<a name="readme-top"></a>

<div align="center">
  <h2>🌿 Mint UI</h2>

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

# 📖 Mint UI <a name="about-project"></a>

**mint-ui** is a React-based component library designed to provide a cohesive design system and reusable UI components for the MetaMarket project. This package is built using modern frontend tools like TypeScript, Tailwind CSS, Storybook, Rollup, and Vitest to ensure high-quality, scalable, and maintainable code.

## 📦 Features <a name="built-with"></a>

- 📚 Storybook Integration: Visual documentation of components.
- 🎨 Tailwind CSS: Utility-first styling for rapid UI development.
- 🛠️ React & TypeScript: Strongly typed, reusable components.
- ⚙️ Rollup: Efficient bundling and tree-shaking.
- ✅ Vitest: Unit testing for robust, reliable components.

<!-- Features -->

<!-- LIVE DEMO -->

## 🚀 NPM <a name="live-demo"></a>

- [Home Link](https://www.npmjs.com/package/@meta-market-nft/mint-ui)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

### Install

Install this project with:

Example command:

```sh
  npm i @meta-market-nft/mint-ui
```

### Usage

```javascript
import { Text } from '@meta-market-nft/mint-ui';

export default function App() {
	return (
		<div>
			<Text as='h1' size='1' weight='bold' className='text-red-500'>
				Hello World
			</Text>
			<Button variant='primary' onClick={() => alert('Clicked!')}>
				Click Me
			</Button>
		</div>
	);
}
```

### Preview Storybook

```sh
  npx nx run mint-ui:storybook
```

### Run tests

To run tests, run the following command:

```sh
  npx nx test mint-ui
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- Figma design by [Anima](https://www.figma.com/@anima).
- The project setup using [Nx](https://nx.dev/) tool.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

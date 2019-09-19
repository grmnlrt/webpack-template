# webpack-template
A Webpack template to easily deploy on GitHub Pages

## Installation

Just clone this repo on your computer and remove `.git` directory.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:grmnlrt/webpack-template.git YOUR_PROJECT_NAME
cd YOUR_PROJECT_NAME
rm -rf .git
yarn install
git init
```

## Usage

Just two commands to know:
- `yarn create-gh-pages`: create your `gh-pages`(run this command only once to create the `gh-pages`)
- `yarn deploy`: deploy latest changes committed on `master` on your `gh-pages`

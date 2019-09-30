# webpack-template with Bootstrap
A Webpack template to easily deploy on GitHub Pages

## Installation

Just clone this repo on your computer and remove `.git` directory.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:grmnlrt/webpack-template.git YOUR_PROJECT_NAME
cd YOUR_PROJECT_NAME
git fetch
git checkout with-bootstrap
rm -rf .git
yarn install
git init
```

## Usage

Just few commands to know:
- `yarn create-gh-pages`: creates your `gh-pages`(run this command only once to create the `gh-pages`)
- `yarn deploy`: deploys latest changes committed on `master` on your `gh-pages`
- `yarn server`: starts a server locally and allows you to access to your project on `localhost:8080`

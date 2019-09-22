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
hub create
```

## Usage

Just few commands to know:
- `yarn create-gh-pages`: creates your `gh-pages`(run this command only once to create the `gh-pages`)
- `yarn deploy`: deploys latest changes committed on `master` on your `gh-pages`
- `yarn server`: starts a server locally and allows you to access to your project on `localhost:8080`

## Bootstrap

You can find this template with **Bootstrap 4** [here](https://github.com/grmnlrt/webpack-template/tree/with-bootstrap).

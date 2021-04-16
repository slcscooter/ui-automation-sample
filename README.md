[logo]: https://avatars.githubusercontent.com/u/38567737?s=60&v=4
![alt text](https://avatars.githubusercontent.com/u/38567737?s=60&v=4)

# ui-automation-sample

The idea of this project is to show a user how they can setup ui automation on their own. This is a WIP and will be contributed to over time.

## Setup

### Software Install recommendation:

1. Install [VSCode](https://code.visualstudio.com/download)
2. Install [brew](https://brew.sh)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
3. Install [node](https://nodejs.org/en/)

```bash
nvm install v12.19.0
```
  * Known working version for this install
4. Install [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

```bash
curl -o- -L https://yarnpkg.com/install.sh | bash
```

### Repos to clone (not in any specific order):

WIP

### Base setup of repositories:

WIP

#### VSCode - ui-automation-sample:
1. Open a new window (File > New Window)
  * at any time during setup use default unless otherwise compelled to or specified
2. File open
3. Select the folder containing `ui-automation-sample`
4. Open a terminal via Terminal > New Terminal
5. Run `yarn`
6. Do not close VSCode

## Setup for UI Automation to run

WIP

## Running UI Automation

### Running default configuration (Developers / Testing / Pipelines):

WIP

### Running advanced configuration (Developers / Testing):

WIP

## Writing new tests/code

### Creating a new branch:

1. Ensure that `main` is checked out
2. `git pull`
3. Checkout new branch using the following format:
  * {initials}/{project}/{description}
  * Example: `sb/ui-automation-sample/updateReadme`

### Writing new tests/code:

WIP: TBD

### Committing new tests/code (not set in stone, you can forge your own path):

1. Merge main back into your branch

```bash
git fetch && git merge origin/main
```
2. Add new code

```bash
git add .
```
3. Commit changes

```bash
git commit
```
  * Add a commit message that documents your changes

4. Push changes

```bash
git push
```
  * Follow any additional instructions

### Submitting a Pull Request in GitHub:

1. Open a Pull Request for your code changes
2. Format the title: {initials}/{project}/{description}
  * Example: `sb/ui-automation-sample/updateReadme`
3. Add a comment in the following format:

```
What changed:
- Added a Readme.md

Browser Support:
- Firefox: can be run on firefox
- Chrome: cannot be run on chrome

Notes:

This has been an update of the readme file

Additional Notes:
- Need to add update Readme.md (upcoming)
```
4. Add reviewers: Scott Brass
5. Submit Pull Request
6. Resolve any comments that need to be resolved
7. Reviewers approve Pull Request
8. Merge Pull Request

## Additional Sections TBD

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change

Please make sure to update tests as appropriate

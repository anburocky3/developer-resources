### How to Contribute to this repository

Data is everything, be the first person to improve the world with your research
findings.

> Pre-requisite: You need Latest versions of
> [Git](https://git-scm.com/downloads),
> [NodeJS](https://nodejs.org/en/download/),
> [Yarn2](https://yarnpkg.com/getting-started/install)

#### Steps to contribute

1. [Fork the repository](https://github.com/anburocky3/developer-resources/fork)
2. Clone the forked repository to your local machine.

```bash
git clone `forked-repository-url` # replace `forked-repository-url` with yours.
```

3. change the present working directory

```markdown
cd developer-resources
```

4. Install packages

```markdown
yarn
```

5. Run the project

```markdown
yarn dev
```

8. Make a new branch
   > Always create meaningful name while creating branch. Good practice is to
   > prefix it with resource. For example: `ideas-app-building` would be
   > meaningful and we can know you are trying to add `data` to the ideas
   > module.

```markdown
git checkout -b branch-name
```

9. Make change in the repository with the new branch.

| Type      | Contribution Guide                                       | Page                                            |
| --------- | -------------------------------------------------------- | ----------------------------------------------- |
| Design    | [Contribution PR Guide](./contributions-docs/design.md)  | https://devfree-resources.netlify.app/designs   |
| App-Ideas | [Contribution PR Guide](./contributions-docs/ideas.md)   | https://devfree-resources.netlify.app/app-ideas |
| Hosting   | [Contribution PR Guide](./contributions-docs/hosting.md) | https://devfree-resources.netlify.app/hosting   |

10. Push the changes.

```bash
git add .
git commit -m "Your commit Message"
git push origin branch-name
```

- Make a pull request.
- Don't forget to **Star the repository**.

### NOTE

- Make Sure you commit your changes in a new branch.
- Make Sure you Give proper name to your files describing the addition.
- Also Make Sure you comment your code wherever necessary.

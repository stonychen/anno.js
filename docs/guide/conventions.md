
# Coding Conventions

[[toc]]

## UTF-8
- All documents should be saved as UTF-8.


## Typescript
- File name should be end with `.ts` or `.tsx`, and put `-` between the words. All words should be lower case. For example, `package-name.ts`. Unit test file name should be like `spec-name.spec.ts`.
- Lower first letter of the first word for a variable name. Capitalize first letter of the following words. For example, `let fooBar = 'foo bar'`.
- Remove unnecessary semicolons in the end of lines. Corresponding setting in `.vscode/settings.json` is `"typescript.format.semicolons": "remove",`.
- Use single quotes for static string. For example, `'foo bar'`.
- Use string template. For example, <code>\`Hello ${this.foo}\`</code>.
- Use arrow function. For example, `let noop = () => null` or `let foo = (bar:string) => {}`.
- Avoid to use `for(let i, i<10, i++){}` or `forEach`, use `.map` instead.
- Promise and Async/await are recommended. Avoid to use `callback` widely in the project.


## Sass
- Sass file name should be end with `.scss` or `.module.scss`. Main name should be same as Javascript files. Below file names are legal, `index.scss`, `foo-bar.scss`, `foo-bar.module.scss`.
- We don't strongly recommend to embed styles inside html. All styles should be inside `.scss` file if there are more than three styles in html.

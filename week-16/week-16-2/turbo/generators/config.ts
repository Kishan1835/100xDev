import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("example", {
    description:
      "An example Turborepo generator - creates a new file at the root of the project",
    prompts: [
      {
        type: "input",
        name: "file",
        message: "What is the name of the new file to create?",
        validate: (input: string) => {
          if (input.includes(".")) {
            return "file name cannot include an extension";
          }
          if (input.includes(" ")) {
            return "file name cannot include spaces";
          }
          if (!input) {
            return "file name is required";
          }
          return true;
        },
      },
      {
        type: "list",
        name: "type",
        message: "What type of file should be created?",
        choices: [".md", ".txt"],
      },
      {
        type: "input",
        name: "title",
        message: "What should be the title of the new file?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/{{ dashCase file }}{{ type }}",
        templateFile: "templates/turborepo-generators.hbs",
      },
    ],
  });

  plop.setGenerator("react-component", {
    description: "Generates a new React component.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the new component?",
        validate: (input: string) => {
          if (!input) {
            return "component name is required";
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/ui/src/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
    ],
  });
}

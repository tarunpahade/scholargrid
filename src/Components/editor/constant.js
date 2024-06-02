export const LANGUAGE_VERSIONS = {
  java: "15.0.2",
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Tarun");\n`,
  typescript: `\ntype Params = {\n\tname:string;\n}\n\nfunction greet(data:Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({name: "Tarun"});\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Tarun")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello {\n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Tarun';\necho $name;\n",
};

export function toggleHandler() {
  const htmlElement = document.querySelector("html");
  const currentTheme = htmlElement.getAttribute("data-bs-theme");

  if (currentTheme === "dark") {
    htmlElement.setAttribute("data-bs-theme", "light");
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
  }
}

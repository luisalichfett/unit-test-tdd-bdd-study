const os = require("os");

const CPU_COUNT = os.cpus().length;

let common = [
  "components/**/*.feature", // Specify our feature files
  "--require-module jsdom-global/register",
  "--require-module ts-node/register", // Load TypeScript module
  "--require step-definitions/**/*.ts", // Load step definitions
  "--format progress-bar", // Load custom formatter
  `--parallel ${CPU_COUNT}`,
  "--format node_modules/cucumber-pretty", // Load custom formatter
].join(" ");

module.exports = {
  default: common,
};

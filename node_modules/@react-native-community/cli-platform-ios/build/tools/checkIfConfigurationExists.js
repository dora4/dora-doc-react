"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIfConfigurationExists = checkIfConfigurationExists;
function _cliTools() {
  const data = require("@react-native-community/cli-tools");
  _cliTools = function () {
    return data;
  };
  return data;
}
function checkIfConfigurationExists(project, mode) {
  if (!project) {
    _cliTools().logger.warn(`Unable to check whether "${mode}" exists in your project`);
    return;
  }
  if (!project.configurations.includes(mode)) {
    throw new (_cliTools().CLIError)(`Configuration "${mode}" does not exist in your project. Please use one of the existing configurations: ${project.configurations.join(', ')}`);
  }
}

//# sourceMappingURL=checkIfConfigurationExists.ts.map
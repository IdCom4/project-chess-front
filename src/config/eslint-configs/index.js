import crossFeatureEslintConfig from "./cross-feature.eslint.config.js"
import dependencyEslintConfig from "./dependency.eslint.config.js"

export default {
  rules: {
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          ...crossFeatureEslintConfig["import/no-restricted-paths"][1].zones,
          ...dependencyEslintConfig["import/no-restricted-paths"][1].zones,
        ],
      },
    ],
  },
}

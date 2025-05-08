const dependencyEslintConfig = {
  "import/no-restricted-paths": [
    "error",
    {
      zones: [
        // enforce unidirectional codebase:
        // e.g. src/app can import from src/features but not the other way around
        {
          target: "./src/features",
          from: "./src/app",
        },

        // e.g src/features and src/app can import from these shared modules but not the other way around
        {
          target: [
            "./src/components",
            "./src/hooks",
            "./src/lib",
            "./src/types",
            "./src/utils",
          ],
          from: ["./src/features", "./src/app"],
        },
      ],
    },
  ],
}

export default dependencyEslintConfig

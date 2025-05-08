const crossFeatureEslintConfig = {
  "import/no-restricted-paths": [
    "error",
    {
      zones: [
        // disables cross-feature imports:
        // eg. src/features/discussions should not import from src/features/comments, etc.
        // {
        //   target: "./src/features/comments",
        //   from: "./src/features",
        //   except: ["./comments"],
        // },
      ],
    },
  ],
}

export default crossFeatureEslintConfig

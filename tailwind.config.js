const path = require("path")

const uiPath = path.resolve(
  require.resolve("@medusajs/ui"),
  "../..",
  "**/*.{js,jsx,ts,tsx}"
)

module.exports = {
    presets: [require("@medusajs/ui-preset")],
    // ...
    content: [
        // ...
        "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
      ],
      // ...
  }
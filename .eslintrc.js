module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react"
  ],
  "parser": "babel-eslint",
  "rules": {
    "strict": 0,
  },
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["@", "./"]
        ],
        "extensions": [".js", ".jsx", ".json"]
      }
    }
  },
  "env": {
    "node": true,
    "browser": true,
  }
};
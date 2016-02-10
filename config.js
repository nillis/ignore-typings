System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "typeCheck": "strict",
    "tsconfig": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "src": {
      "defaultExtension": "ts"
    }
  },

  meta: {
    "*.ts": {
      "loader": "ts"
    }
  },

  map: {
    "ts": "github:frankwallis/plugin-typescript@3.0.2",
    "typescript": "npm:typescript@1.7.5",
    "github:frankwallis/plugin-typescript@3.0.2": {
      "typescript": "npm:typescript@1.9.0-dev.20160210"
    }
  }
});

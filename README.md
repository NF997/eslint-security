# ESLint Configuration Files for Security Source Code Reviews or DevSecOps
For security source code reviews I don't care about missing newlines etc. What I do care about is the output of ESLint security plugins. With the configuration files contained in this repository, ESLint turns into a little SAST tool for JavaScript applications.

The config files are highly inspired by Greenwolfs [eslint-security-scanner-configs](https://github.com/Greenwolf/eslint-security-scanner-configs) which are already great but create too much noise for my taste.

## Prerequisites
Make sure you have ESLint installed globally: `npm i -g eslint`

For some reason it isn't possible to install eslint plugins globally so they have to be installed locally in the `eslint-security` directory:
```
npm i --save-dev eslint-plugin-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-config-standard eslint-config-semistandard eslint-plugin-scanjs-rules eslint-plugin-no-unsanitized eslint-plugin-prototype-pollution-security-rules eslint-plugin-angularjs-security-rules eslint-plugin-react eslint-plugin-security eslint-plugin-no-wildcard-postmessage eslint-plugin-html eslint-plugin-no-secrets eslint-plugin-security-node
```

## Execute ESLint with the Config File
`eslint --ext .html,.htm,.js -c [PATH_TO_ESLINT-SECURITY]/default.js [PATH_TO_REPO_TO_TEST]`

## Utilized Security Plugins
- [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)
- [eslint-plugin-no-secrets](https://github.com/nickdeis/eslint-plugin-no-secrets)
- [eslint-plugin-no-unsanitized](https://github.com/mozilla/eslint-plugin-no-unsanitized)
- [eslint-plugin-no-wildcard-postmessage](https://github.com/mozfreddyb/eslint-plugin-no-wildcard-postmessage)
- [eslint-plugin-prototype-pollution-security-rules](https://github.com/LewisArdern/eslint-plugin-prototype-pollution-security-rules)
- [eslint-plugin-scanjs-rules](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules)
- [eslint-plugin-angularjs-security-rules](https://github.com/LewisArdern/eslint-plugin-angularjs-security-rules)
- [eslint-plugin-security-node](https://github.com/gkouziik/eslint-plugin-security-node)
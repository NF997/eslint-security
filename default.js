module.exports = {
  "env" : {
    "browser" : true,
    "es6" : true /** all es6 features except modules */
  },
  "plugins" : [
    // use plugin to handle html files
    "html",
    // Standard Rules
    "scanjs-rules",
    "no-unsanitized",
    "prototype-pollution-security-rules",
    "no-secrets",
    // NodeJS Rules
    "security",
    "security-node",
    "no-wildcard-postmessage",
    // Augular Rules
    "angularjs-security-rules",
    // React Rules
    "react"
  ],
  "settings": {
        // setting to enable different html file types
        "html/html-extensions": [".html", ".htm"],  // consider .html and .we files as HTML
  },
  "ignorePatterns": ["package-lock.json"],
  "rules" : {
    /** ScanJS rules **/
    "scanjs-rules/accidental_assignment": "error",
    "scanjs-rules/assign_to_hostname" : "warn",
    "scanjs-rules/assign_to_href" : "error",
    "scanjs-rules/assign_to_location" : "error",
    "scanjs-rules/assign_to_onmessage" : "error",
    "scanjs-rules/assign_to_pathname" : "error",
    "scanjs-rules/assign_to_protocol" : "error",
    "scanjs-rules/assign_to_search" : "error",
    "scanjs-rules/assign_to_src" : "error",
    "scanjs-rules/call_Function" : "warn",
    "scanjs-rules/call_addEventListener" : "warn",
    "scanjs-rules/call_addEventListener_deviceproximity" : "error",
    "scanjs-rules/call_addEventListener_message" : "error",
    "scanjs-rules/call_connect" : "warn",
    "scanjs-rules/call_eval" : "error",
    "scanjs-rules/call_execScript" : "error",
    "scanjs-rules/call_hide" : "error",
    "scanjs-rules/call_open_remote=true" : "error",
    "scanjs-rules/call_parseFromString" : "error",
    "scanjs-rules/call_setImmediate" : "error",
    "scanjs-rules/call_setInterval" : "error",
    "scanjs-rules/call_setTimeout" : "warn",
    "scanjs-rules/identifier_indexedDB" : "error",
    "scanjs-rules/identifier_localStorage" : "error",
    "scanjs-rules/identifier_sessionStorage" : "error",
    "scanjs-rules/new_Function" : "error",
    "scanjs-rules/property_addIdleObserver" : "error",
    "scanjs-rules/property_createContextualFragment" : "error",
    "scanjs-rules/property_crypto": "error",
    "scanjs-rules/property_geolocation" : "error",
    "scanjs-rules/property_getUserMedia" : "error",
    "scanjs-rules/property_indexedDB" : "error",
    "scanjs-rules/property_localStorage" : "error",
    "scanjs-rules/property_mgmt" : "error",
    "scanjs-rules/property_sessionStorage" : "error",

    /** no-unsanitized rules **/
    "no-unsanitized/method": "error",
    "no-unsanitized/property": "error",

    /** no-secrets rules **/
    "no-secrets/no-secrets": ["warn",{"tolerance": 5}],

    /** prototype-pollution-security-rules rules **/
    "prototype-pollution-security-rules/detect-merge": "warn",
    "prototype-pollution-security-rules/detect-merge-objects": "warn",
    "prototype-pollution-security-rules/detect-merge-options": "warn",
    "prototype-pollution-security-rules/detect-deep-extend": "warn",

    /** no-wildcard-postmessage (NodeJS) rules **/
    "no-wildcard-postmessage/no-wildcard-postmessage": "error",

    /** angularjs-security-rules (Angular) rules **/
    "angularjs-security-rules/detect-angular-element-methods": "error",
    "angularjs-security-rules/detect-angular-open-redirect": "error",
    "angularjs-security-rules/detect-angular-orderBy-expressions": "error",
    "angularjs-security-rules/detect-angular-resource-loading": "error",
    "angularjs-security-rules/detect-angular-sce-disabled": "error",
    "angularjs-security-rules/detect-angular-scope-expressions": "error",
    "angularjs-security-rules/detect-angular-service-expressions": "error",
    "angularjs-security-rules/detect-angular-trustAs-methods": "error",
    "angularjs-security-rules/detect-angular-trustAsCss-method": "error",
    "angularjs-security-rules/detect-angular-trustAsHtml-method": "error",
    "angularjs-security-rules/detect-angular-sce-disabled": "error",
    "angularjs-security-rules/detect-angular-trustAsJs-method": "error",
    "angularjs-security-rules/detect-angular-trustAsResourceUrl-method": "error",
    "angularjs-security-rules/detect-angular-trustAsUrl-method": "error",
    "angularjs-security-rules/detect-third-party-angular-translate": "error",

    /** react (React) rules **/
    // Some rules have been removed which require additional specific configuration
    "react/boolean-prop-naming": "error",
    "react/button-has-type": "error",
    "react/default-props-match-prop-types": "error",
    "react/destructuring-assignment": "error",
    "react/display-name": "error",
    "react/forbid-component-props": "error",
    "react/forbid-dom-props": "error",
    "react/forbid-elements": "error",
    "react/forbid-prop-types": "error",
    "react/forbid-foreign-prop-types": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-set-state": "error",
    "react/no-typos": "error",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-default-props": "error",
    "react/require-optimization": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": "error",
    "react/sort-prop-types": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-child-element-spacing": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-spacing": "error",
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename-extension": "error",
    "react/jsx-first-prop-new-line": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-indent": "error",
    "react/jsx-indent-props": "error",
    "react/jsx-key": "error",
    "react/jsx-max-depth": "error",
    "react/jsx-max-props-per-line": "error",
    "react/jsx-no-bind": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-one-expression-per-line": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-fragments": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-sort-default-props": "error",
    "react/jsx-sort-props": "error",
    "react/jsx-tag-spacing": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "error",

    /** nodejs rules **/
    "security-node/non-literal-reg-expr": "off", // To avoid duplicates.
    "security-node/detect-absence-of-name-option-in-exrpress-session": "error",
    "security-node/detect-buffer-unsafe-allocation": "error",
    "security-node/detect-child-process": "error",
    "security-node/detect-crlf": "warn",
    "security-node/detect-dangerous-redirects": "error",
    "security-node/detect-eval-with-expr": "off", // To avoid dulicates.
    "security-node/detect-helmet-without-nocache": "warn",
    "security-node/detect-html-injection": "error",
    "security-node/detect-insecure-randomness": "error",
    "security-node/detect-non-literal-require-calls": "off", // To avoid duplicates.
    "security-node/detect-nosql-injection": "error",
    "security-node/detect-option-multiplestatements-in-mysql": "error",
    "security-node/detect-option-rejectunauthorized-in-nodejs-httpsrequest": "error",
    "security-node/detect-option-unsafe-in-serialize-javascript-npm-package": "error",
    "security-node/detect-possible-timing-attacks": "warn",
    "security-node/detect-runinthiscontext-method-in-nodes-vm": "error",
    "security-node/detect-security-missconfiguration-cookie": "error",
    "security-node/detect-sql-injection": "error",
    "security-node/disable-ssl-across-node-server": "error",

    /** security plugin rules**/
    "security/detect-unsafe-regex": "error",
    "security/detect-buffer-noassert": "error",
    "security/detect-child-process": "warn",
    "security/detect-disable-mustache-escape": "error",
    "security/detect-eval-with-expression": "off", // To avoid duplicates.
    "security/detect-no-csrf-before-method-override": "error",
    "security/detect-non-literal-fs-filename": "error",
    "security/detect-non-literal-regexp": "warn", 
    "security/detect-non-literal-require": "warn",
    "security/detect-object-injection": "warn",
    "security/detect-possible-timing-attacks": "warn",
    "security/detect-pseudoRandomBytes": "error"
  },
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module"
  },
  "settings" : {
    "react" : {
        "version": "latest"
    }
  }
};
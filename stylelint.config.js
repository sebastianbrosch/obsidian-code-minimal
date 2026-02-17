/** @type {import('stylelint').Config} */
export default {
  "plugins": [
    "stylelint-scss"
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "comment-no-empty": null,
    "scss/comment-no-empty": true,
    "comment-empty-line-before": "always",
    "rule-empty-line-before": "always",
    "no-irregular-whitespace": true,
  }
};
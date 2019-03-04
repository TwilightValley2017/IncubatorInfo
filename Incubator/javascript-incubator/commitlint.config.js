module.exports = {extends: ['@commitlint/config-conventional']}

// commitlint.config.js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', [
            "feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert", "merge"
        ]],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never']
    }};
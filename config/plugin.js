module.exports = ({ env }) => ({
  'config-sync': {
    enabled: true,
    config: {
      excludedEnvironments: ['production'],
    },
  },
  'import-export-content': {
    enabled: true,
  },
});
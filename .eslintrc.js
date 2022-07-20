module.exports = {
  plugins: ['prettier'],
  extends: ['next/core-web-vitals'],
  rules: {
    'no-console': 'error',
    'prettier/prettier': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  },
  
};

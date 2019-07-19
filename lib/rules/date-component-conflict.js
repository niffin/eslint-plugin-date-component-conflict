module.exports = function(context) {
  const errorMessage = 'Can\'t use the native Date when importing the <Date> component.'
  let isImportingDate;

  return {
    ImportDeclaration: function (node) {
      const isDateComponent = /\/Date$/.test(node.source.value);
      const isNamedDate = node.specifiers.some(specifier => /^Date$/.test(specifier.local.name));

      if(isDateComponent && isNamedDate) {
        isImportingDate = true;
      }
    },
    CallExpression: function (node) {
      if (node.callee.name === 'Date' && isImportingDate) {
        context.report(node, errorMessage)
      }
    },
    NewExpression: function (node) {
      if (node.callee.name === 'Date' && isImportingDate) {
        context.report(node, errorMessage)
      }
    }
  };
};

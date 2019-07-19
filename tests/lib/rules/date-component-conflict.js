const rule = require('../../../lib/rules/date-component-conflict');

const RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
});

const ruleTester = new RuleTester();
const message =
  "Can't use the native Date when importing the <Date> component.";

ruleTester.run('date-component-conflict', rule, {
  valid: [
    {
      code: `
import RxDate from '../Date';

const a = new Date();
`
    },
    {
      code: `
import Date from '../Date';

function Component ({ date }) {
  return (
    <div>
      <Date>{date}</Date>
    </div>
  )
}
`
    }
  ],
  invalid: [
    {
      code: `
import Date from '../components/core/Date';

const foo = Date();
`,
      errors: [
        {
          message,
          type: 'CallExpression'
        }
      ]
    },
    {
      code: `
      import Date from '../components/core/Date';

const foo = new Date();
`,
      errors: [
        {
          message,
          type: 'NewExpression'
        }
      ]
    },
    {
      code: `
import Date from '../Date';

const date = new Date();

function Component ({ date }) {
  return (
    <div>
      <Date>{date}</Date>
    </div>
  )
}
`,
      errors: [
        {
          message,
          type: 'NewExpression'
        }
      ]
    }
  ]
});

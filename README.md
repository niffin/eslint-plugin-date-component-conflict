# date-component-conflict

no conflicts between <Date> and the native Date

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `date-component-conflict`:

```
$ npm install date-component-conflict --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `date-component-conflict` globally.

## Usage

Add `date-component-conflict` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "date-component-conflict"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "date-component-conflict/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here






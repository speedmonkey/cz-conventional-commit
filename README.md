# cz-conventional-commit

Status:
[![npm version](https://img.shields.io/npm/v/cz-conventional-changelog.svg?style=flat-square)](https://www.npmjs.org/package/cz-conventional-changelog)
[![npm downloads](https://img.shields.io/npm/dm/cz-conventional-changelog.svg?style=flat-square)](https://npm-stat.com/charts.html?package=cz-conventional-commit&from=2019-11-05&to=2019-11-12)
[![Build Status](https://img.shields.io/travis/commitizen/cz-conventional-changelog.svg?style=flat-square)](https://travis-ci.org/commitizen/cz-conventional-changelog)

Part of the [commitizen](https://github.com/commitizen/cz-cli) family. Prompts for [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) standard.

## How to use

### Adaptater for commitizen 

To use this package, you need to add this following to your package.json root file :

```json5
"config": {
    "commitizen": {
      "path": "cz-conventional-commit"
    },
}
```

### What's change ?

Four types of commit are now available (with emojis ): 
- fix
- feat
- style
- refactor 

![Commitizen Interface](https://user-images.githubusercontent.com/19270653/68765942-38cd8500-061e-11ea-9590-757a08806fba.png)

There are now just three steps : type, scope and short description. Example of a commit ruled by this package :

![Commitizen Steps](https://user-images.githubusercontent.com/19270653/68766642-84ccf980-061f-11ea-854c-9c64e430e520.png)


## Configuration

### package.json

Like commitizen, you specify the configuration of cz-conventional-changelog through the package.json's `config.commitizen` key.

```json5
{
// ...  default values
    "config": {
        "commitizen": {      
            "path": "cz-conventional-commit",
            "maxHeaderWidth": 100,
            "maxLineWidth": 100,
            "defaultType": "",
            "defaultScope": "",        
            "defaultSubject": ""
        }
    }
// ...    
}
``` 
### Environment variables

The following environment varibles can be used to override any default configuration or package.json based configuration.

* CZ_TYPE = defaultType 
* CZ_SCOPE = defaultScope
* CZ_SUBJECT = defaultSubject
* CZ_MAX_HEADER_WIDTH = maxHeaderWidth
* CZ_MAX_LINE_WIDTH = maxLineWidth

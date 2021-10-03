# prototypes-string

- a way to implement some extensions to help with string and numbers manipulation

## Note
 
 - all extensions are strongly typed and included globally.
 - ensure the least risk of collision and lack of understanding.
 - in order not to risk future implementations of es, all functions start with a capital letter
 - You don't need to extend all the functions in this library


``` bash
npm install prototypes-string
```

## usage

 - just require in root

### example

- for a full implementation

``` js
    require('prototypes-string')
```

- I just want to implement some string function:

``` js
    require('prototypes-string/format')
``` 

# examples

## Capitalize

- Returns a reCapitalized text

``` js

'matheus correa'.Format('###.###.###-##') // 'Matheus Correa'

```

## Format

- Returns a reformatted text from right to left with default mask as '0'

``` js
//String
'23'.Format('###.###.###-##') // '000.000.000-23'

//or Number
23.Format('###.###.###-##', 'x') // 'xxx.xxx.xxx-23'
```

## Money

 - setMoneyLocale accept all options [Intl.NumberFormatOptions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat#par%C3%A2metros)

``` js
const test = 1023.36;
//customize locale in root, default is pt-br BRL
setMoneyLocale('pt-BR' , { currency: 'BRL'});
test.Money(); // R$ 1.023,36

setMoneyLocale('ja-JP' , { currency: 'JPY'});
test.Money(); // ￥1,023

// or strings
const test = "R$ 1.023,36";
setMoneyLocale('de-DE' , { currency: 'EUR'});
test.Money(); // 1.023,36 €

// this will override any option
test.Money('en-IN', { maximumSignificantDigits: 3})); // 1,020
```

## Percent

 - Returns percentage of a number in max

## TestMail

 - Regex test if match full name

## TestName

 - Regex test if match email

## TestPassword

- Regex test match password strenght

- default but configurable
- 6 min different digits
- have number
- have special char
- have upper case letter
- have lower case letter

``` js
'strongPassword'.TestPassword({
    minDigits: 6,
    upperCase: true,
    number: true,
    specialChar: true,
    lowerCase: true
})
// return text "MinDigits" or "Number" or "LowerCase" or "UpperCase" or "SpecialChar" or "Ok"
```
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
    require('prototypes-string/capitalize')
    require('prototypes-string/format')
    require('prototypes-string/mask')
    require('prototypes-string/math')
    require('prototypes-string/money')
    require('prototypes-string/percent')
    require('prototypes-string/test-mail')
    require('prototypes-string/test-name')
    require('prototypes-string/test-password')
``` 

# examples

## Capitalize

- Returns a reCapitalized text

``` js

'matheus correa'.Capitalize() // 'Matheus Correa'

```

## Date Time Functions 

- 

```js
const date = new Date(2022, 2, 20, 17, 30)

    date.toISOString() => '2022-03-20T20:30:00.000Z';

    date.Date() => '20/03/2022';
    date.Time() => '17:30:00';
    date.DateTime() => '20/03/2022 17:30:00';
```


## Format

- Returns a reformatted text from right to left with default mask as '0'

``` js
//String
'23'.Format('###.###.###-##') // '000.000.000-23'

//or Number
23.Format('###.###.###-##', 'x') // 'xxx.xxx.xxx-23'

//or Date
new Date('2022-03-20 17:30').Format('yyyy-mm-dd')) => '2022-03-20'

```


## Mask
- Returns a reformatted text to cpf or cnpj or phone formatted pt-BR

``` ts
String.Mask(mask: "cpf" | "cnpj" | "phone"): String
```

## Math
- Another way to format fractional numbers

```js
55.55.Round(-1);   // 55.6
55.549.Round(-1);  // 55.5
55.Round(1);       // 60
54.9.Round(1);     // 50
-55.55.Round(-1);  // -55.5
-55.551.Round(-1); // -55.6
-55.Round(1);      // -50
-55.1.Round(1);    // -60
1.005.Round(-2);   // 1.01

55.59.Floor(-1);   // 55.5
59.Floor(1);       // 50
-55.51.Floor(-1);  // -55.6
-51.Floor(1);      // -60

55.51.Ceil(-1);    // 55.6
51.Ceil(1);        // 60
-55.59.Ceil(-1);   // -55.5
-59.Ceil(1);       // -50
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
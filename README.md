# cookie-manager-js
Simple and easy cookie manager in js

https://img.shields.io/github/license/mercurygit/cookie-manager-js

This is a simple library for providing more useful and powerful interface to manage your cookies
- No depency
- 1kb wieght
- support all major browers (all browsers)
- no dependency





## Installation

Download Cookie-manager-js and include in your project.

```html
<script src ="cookie-manager.min.js"></script>
```

## Usage
After including the cookie manager.js you will be able to use `cookieManager` object.
It can also be loaded as `cookieManager` object as an AMD, CommonJS or Node Module

## Functionalities

### Creating a cookie

creating cookie
```js
cookieManager.set(name, value, expires, domain, path, secure);
```
- `name (String)` cookie name 
- `value (String)` cookie value 
- `expires (Optional)(Number)` cookie expiration duration (days)
- `domain (Optional)(String)` cookie domain
- `path (Optional)(String)` cookie path
- `secure (Optional)(Boolean)` cookie secure,ssl support flag

### Retrieving a cookie

returns the value of the cooke if it exist, else it returns ,`undefined`
```js
  cookieManager.get(name);
```
- `name (String)` cookie name 

### Updating a cookie
Updating a given cookie, return void

```js
  cookieManager.update(name, value, expires, domain, path, secure);
```
- `name (String)` cookie name 
- `value (String)` cookie value 
- `expires (Optional)(Number)` cookie expiration duration (days)
- `domain (Optional)(String)` cookie domain
- `path (Optional)(String)` cookie path
- `secure (Optional)(Boolean)` cookie secure,ssl support flag

### Deleting a cookie

Deleting a cookie by providing its name
```js
  cookieManager.delete(name);
```
- `name (String)` cookie name 

### Listing all cookies

Returns an Array of key:value pair objects that contain all the existing ccookies available

```js
  cookieManager.getAll();
```

### Clearing all cookies

Clear all the existing cookies

```js
  cookieManager.clear();
```


## Author and License

Created and maintained [Ngum Buka Fon](https://img.shields.io/github/license/mercurygit/cookie-manager-js) under MIT open license

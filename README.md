"# math-for-kids" 

# Guessing number game
!["Guess the number game"](../math-for-kids/assests/images/Responsivnes.jpg)

## Table of content
- [Project goal](#project-goal)
  - [User goal](#user-goal)
  - [Site owner goal](#site-owner-goal)
  - [User Experience](#user-experience)
    - [Targeted group](#targeted-group)
  - [User expectation](#user-expectation)
  - [User Stories](#user-stories)
- [Design of webpage](#design-of-webpage)
  - [Design choices](#design-choices)
    - [Color](#color)
    - [Structure](#structure)
    - [Background Image](#background-image)
- [Techology and Tools used](#techology-and-tools-used)
  - [Languages](#languages)
  - [Tools](#tools)
  - [Additional help](#additional-help)
- [Gameplay](#gameplay)
  - [User interactions](#user-interactions)
- [Validation](#validation)
  - [Validation Tools](#validation-tools)
    - [Responsivnes](#responsivnes)
    - [HTML Checker](#html-checker)
    - [CSS Validator](#css-validator)
    - [Accessibility Validator](#accessibility-validator)
    - [Accessibility Review](#accessibility-review)
    - [Performance Review](#performance-review)
    - [Best Practice Examples Review](#best-practice-examples-review)
    - [SEO Review](#seo-review)
  - [QA & Bugfixes](#qa-&-bugfixes)
    - [Devices used](#devices-used)
    - [Browsers used](#browsers-used)
    - [Bugs](#bugs)
- [Support and Help](#support-and-help)
  - [Links](#links)
  - [Deployment](#deployment)
- [Thanks](#thanks)




## Validation
-------------------------------------------
### **Validation Tools**
To validate html, css, accessibiliy, responsivnes, performance... following links were used
- https://validator.w3.org/
- https://jigsaw.w3.org/css-validator/
- https://wave.webaim.org/
- https://ui.dev/amiresponsive?url=https://
- https://developer.chrome.com/docs/lighthouse/overview/

-------------------------------------------

### *Responsivnes* 

https://ui.dev/amiresponsive?url=https://agnogh.github.io/math-for-kids/
![Responsivnes of "Guess the number game"](../math-for-kids/assests/images/Responsivnes.jpg)

### *HTML Checker*

https://validator.w3.org/nu/?doc=https%3A%2F%2Fagnogh.github.io%2Fmath-for-kids%2F
![HTML Checker for "Guess the number game"](../math-for-kids/assests/images/HTML%20Checker.jpg)

### *CSS Validator*

https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fagnogh.github.io%2Fmath-for-kids%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en
![CSS Validator for "Guess the number game"](../math-for-kids/assests/images/CSS%20Checker.jpg)

### *Accessibility Validator*

*Accessibility shows 1 error, but in fact they do now really cause accessibiliy issues as it is blank button to help alignment when user has top and bottom button where top buttons are 1-5 and bottom 6-9 where unequal alignemtn would show*
https://wave.webaim.org/report#/https://agnogh.github.io/math-for-kids/
![Accessibility Validator for "Guess the number game"](../math-for-kids/assests/images/Accessibility%20Validator%20-1-.jpg)

### *Accessibility Review*
![Performance Review for "Guess the number game" - 100%](../math-for-kids/assests/images/Accessibility%20performance.jpg)

### *Performance Review*
![Performance Review for "Guess the number game - 96%"](../math-for-kids/assests/images/Performance%20review.jpg)

### *Best Practice Examples Review*
![Best Practice Examples Review for "Guess the number game - 100%"](../math-for-kids/assests/images/Best%20Practice%20examples%20review.jpg)

### *SEO Review*
![SEO Review for "Guess the number game - 100%"](../math-for-kids/assests/images/SEO%20review.jpg)


## QA & Bugfixes
-------------------------------------------
### *Devices used*
- Huawei P smart
- Samsung A15
- iPad 15
- iPad Pro
- iPhone 16
- MacBook Pro
- MacBook Air
- Nitro 5, Ryzan 7

### *Browsers used*
**Chrome**
**Safari**

### *Bugs*
- typos in user added text
- unnecesary styling that looked "too much" for header
- unnecesarry and unused labels just below command button that generates random numbers
- removing syles that were not used and could have inherit rules frm parent elements
- fixing the issue where user could click only 2 times and button stopped unresponsive
- fixing the issue that button was unresponsive as event listener 'click' was calling on wrong keyID
- removing that every random number generated calls out Alert window as it would hinder user experience and slow down the game pace by making user click on "OK" to dismiss that window
- adding ratio to calculate percentage of win and lose
- displacing unnecesary text from label element below comman button and keeping only text on the footer
- correcting formula to calculate percentage of 'luck success rate'


## Support and Help

### **Links**
*Validation related*

- https://validator.w3.org/
- https://jigsaw.w3.org/css-validator/
- https://developer.chrome.com/docs/lighthouse/overview/
- https://wave.webaim.org/
- https://ui.dev/amiresponsive?url=https://

*Training, tips & tricks*
-https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#syntax
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods
- https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
- https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML
- https://pythontutor.com/render.html#mode=edit
- https://learn.codeinstitute.net/sandbox/api/challenges/658052c609aa64a4c9719c60/files/index.html
- https://learn.codeinstitute.net/courses

*Various*
- https://github.com/
- YouTube
- https://stackoverflow.com


### **Deployment**
- https://agnogh.github.io/math-for-kids/
- https://github.com/Agnogh/math-for-kids/settings/pages


## Thanks
NA

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



## Project goal

The idea behind this project is to 
- create a small simple guessing game that will interact with the user based on the outcome
- give the user the ability to keep track of overall score (called luck index)
- get users an idea about the probability of guessing the number from 1st go
- make people understand the probability of winning the lottery and returning invested money 
- give the user some entertainment 


### **User goal**

Try out their luck
Have fun
Make a competition among friends who will have a better score after a certain number of rounds.
Help users make more analytical decision is it worth buy lottery ticket

### **Site owner goal**

Give people something to play around with to pass the time while seeing how mathematical probability works and what are the chances they could get rich playing the lottery.

### **User Experience**

#### *Targeted group*
Anyone who wants to try their luck. There are no age limitations/restrictions. Most likely group will be very small kinds or older people as everyone in between will set their sights on far more advanced entertainment.  

### **User expectation**
Expectations are limited. It serves more as a tryout before buying a lottery ticket and hoping to become a millionaire who spends hours playing the game.
With a random element involved (the number is randomly generated), the user will not have any real power over the outcome of the game and get a better score (it is just pure luck)


### **User Stories**
Since the idea is simple to try out your luck and used just for fun with no big expectations, there is no big replayability.
Users will come over to try out their luck, see what is success rate, maybe try out a challenge to get 2 or 3 in a row or competition among people who will have a better success rate among a certain number of rounds.



## Design of webpage
-------------------------------------------
### **Design choices**
Design is wrapped around the idea of having a simple, straightforward, approachable, design with few windows, highly visible buttons to choose from, and clear instructions in both design and text placement and size so there is no confusion about what needs to be selected.

A black background is selected so that Yellow, and red-orange stand out so that black letters are more visible.

The decision was to go with more round shapes instead of crude and sharp edges that would make UI a bit 'old'

Shadows are also included for visual effects with mostly green and orange colours to match and contrast at the same time buttons, and background colours.


### *Color*
The black background is a good fit for yellow and red with green borders. Green border is perfect for a light transition between the contrast of yellow and orange against black.

Slightly transparent boxes cause that transition in colours to be more distinguished while still slightly transiting from red or yellow to black.


### *Structure*

*Structure* is simple with the title on top holding the game name

*Body* contains 
1. 'playing area' where numbers are displayed where user can interact with them
2. 'command button' names 'I feel lucky' that generates a random number 
3. 'diagnose area' where user gets info on what was selected, what was "pulled", are the numbers match and what is success rate is - displays info for the user

*footer* contains win or lose outcome in the form of text

I didn't want to go with any additional links to social media as the page is designed to serve the purpose of the lotto game and not have several links that are more relevant for HTML design.

Top part of the UI

![Structure "Guess the number game"](../math-for-kids/assests/images/Structure%20-1-.jpg)

Bottom part of the UI

![Structure "Guess the number game"](../math-for-kids/assests/images/Structure%20-2-.jpg)


### *Background Image*

The background image was picked based on theme, colour and simplicity.
Black to increase visibility with saturated simple images of digits that do not stand out or interfere with user's focus.

Picture is High Res to avoid cropping and blurry images on larger devices.


## Techology and Tools used
-------------------------------------------
### **Languages**
- HTML
- CSS
- JavaScript


### **Tools**
- Git
- GitHub
- Gitpod
- Freeform
- TextEdit
- BBEdit
- Word
- Paint
- Font Awesome
- Favicon
- Diff Checker
- Grammarly
- Pen and paper (as it is faster in some instances)


### **Additional help**
- YouTube 
- Stack Overflow 
- Slack Community
- No tutor help was requested as I wanted to pull this as independently as possible


## Gameplay
-------------------------------------------
The idea is that the user has a simple-to-follow UI with a clear description.
- Numbers presented are described with section title "Pick Your Number"
- Numbers are easy to see/detect and selectable
- User is prompted with an Alert message after each selected number
- Under that number section box is the button that if not clear enough has in brackets description 'Click me' by which a random number is generated
- Description text explains what is selected and what random number was "pulled". Also followed by the result of each gamble round with a win-or-lose message
- user can keep playing and see the overall lucky score but no further interaction is needed

### **User interactions**
User interacts with numbers from 1-9 but can keep a selected number for several rounds with a random number "pulled" " That way user can play his/her favourite number several rounds in a row.
Another interaction is that each round requires the user to click on the "I feel lucky" button creates a random number which will be compared with number user selected for him/herself.

![User interaction on "Guess the number game"](../math-for-kids/assests/images/User%20Interaction.jpg)

No other interaction is needed as text shows up based on either user selection or outcome if the numbers match or not. The calculated success rate (luck factor) is also automatically done and doesn't require input from the user.



## Validation
-------------------------------------------
### **Validation Tools**
To validate HTML, CSS, accessibility, responsivnes, and performance... following links were used
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


### **QA & Bugfixes**
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
- typos in user-added text
- unnecessary styling that looked "too much" for header
- unnecessary and unused labels just below the command button that generate random numbers
- removing syles that were not used and could have inherited rules from parent elements
- fixing the issue where the user could click only 2 times and button stopped unresponsive
- fixing the issue that button was unresponsive as event listener 'click' was calling on wrong keyID
- removing that every random number generated calls out the Alert window as it would hinder user experience and slow down the game pace by making the user click on "OK" to dismiss that window
- adding ratio to calculate percentage of wins and lose
- displacing unnecessary text from the label element below command button and keeping only text on the footer
- correcting formula to calculate percentage of 'luck success rate'
- removing default text in footer with something more meaningful
- changing name of the webpage from "Math/Quiy/Lottery" to "Lottery Game" due to theme used


## Support and Help
-------------------------------------------
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

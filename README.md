"# math-for-kids" 

# Guessing number game
!["Guess the number game"](/assests/images/Responsivnes.jpg)

## Table of content
- [1. Project goal](#project-goal)
  - [1.1. User goal](#user-goal)
  - [1.2. Site owner goal](#site-owner-goal)
  - [1.3. User Experience](#user-experience)
    - [1.3.1. Targeted group](#targeted-group)
  - [1.4. User expectation](#user-expectation)
  - [1.5. User Stories](#user-stories)
- [2. Design of webpage](#design-of-webpage)
  - [2.1. Design choices](#design-choices)
    - [2.1.1. Color](#color)
    - [2.1.2. Structure](#structure)
    - [2.1.3. Background Image](#background-image)
- [3. Techology and Tools used](#techology-and-tools-used)
  - [3.1. Languages](#languages)
  - [3.2. Tools](#tools)
  - [3.3. Additional help](#additional-help)
- [4. Gameplay](#gameplay)
  - [4.1. User interactions](#user-interactions)
- [5. Validation](#validation)
  - [5.1. Validation Tools](#validation-tools)
    - [5.1.1. Responsivnes](#responsivnes)
    - [5.1.3. HTML Checker](#html-checker)
    - [5.1.4. CSS Validator](#css-validator)
    - [5.1.5. Accessibility Validator](#accessibility-validator)
    - [5.1.6. Accessibility Review](#accessibility-review)
    - [5.1.7. Performance Review](#performance-review)
    - [5.1.8. Best Practice Examples Review](#best-practice-examples-review)
    - [5.1.9. SEO Review](#seo-review)
  - [5.2. QA & Bugfixes](#qa-&-bugfixes)
    - [5.2.1. Devices used](#devices-used)
    - [5.2.2. Browsers used](#browsers-used)
    - [5.2.3. Bugs](#bugs)
- [6. Support and Help](#support-and-help)
  - [6.1. Links](#links)
  - [6.2. Deployment](#deployment)
- [7. Thanks](#thanks)



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

![Structure "Guess the number game"](/assests/images/Structure%20-1-.jpg)

Bottom part of the UI

![Structure "Guess the number game"](/assests/images/Structure%20-2-.jpg)


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

![User interaction on "Guess the number game"](/assests/images/User%20Interaction.jpg)

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
![Responsivnes of "Guess the number game"](/assests/images/Responsivnes.jpg)

### *HTML Checker*

https://validator.w3.org/nu/?doc=https%3A%2F%2Fagnogh.github.io%2Fmath-for-kids%2F
![HTML Checker for "Guess the number game"](/assests/images/HTML%20Checker.jpg)

### *CSS Validator*

https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fagnogh.github.io%2Fmath-for-kids%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en
![CSS Validator for "Guess the number game"](/assests/images/CSS%20Checker.jpg)

### *Accessibility Validator*

*Accessibility shows 1 error, but in fact they do now really cause accessibiliy issues as it is blank button to help alignment when user has top and bottom button where top buttons are 1-5 and bottom 6-9 where unequal alignemtn would show*
https://wave.webaim.org/report#/https://agnogh.github.io/math-for-kids/
![Accessibility Validator for "Guess the number game"](/assests/images/Accessibility%20Validator%20-1-.jpg)

### *Accessibility Review*
![Performance Review for "Guess the number game" - 100%](/assests/images/Accessibility%20performance.jpg)

### *Performance Review*
![Performance Review for "Guess the number game - 96%"](/assests/images/Performance%20review.jpg)

### *Best Practice Examples Review*
![Best Practice Examples Review for "Guess the number game - 100%"](/assests/images/Best%20Practice%20examples%20review.jpg)

### *SEO Review*
![SEO Review for "Guess the number game - 100%"](/assests/images/SEO%20review.jpg)


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

1. Create a GitHUb repo
- 1a Create new reposotory on GitHub (math-for-kids)
- 1b in VSCode

--> a git init
--> git add .
--> git commit -m "Initial commit"
--> git branch -M main
--> git remote add origin https://github.com/Agnogh/math-for-kids.git
--> git push -u origin main
 
2. Enable GitHub Pages
- 2a GitHub > Going to my Repo > Selecting 'math-for-kids' reposotory

--> Settings (far right)
--> Pages (last item under ?code and automation' section)
--> Build and Deployment section (top)
--> Source > Select drop down menu 
--> Deploy from a branch
--> Select 'main' 
--> Select root
--> Click on Save


- Deployed page
https://agnogh.github.io/math-for-kids/

- GitHub
https://github.com/Agnogh/math-for-kids


## Thanks
NA

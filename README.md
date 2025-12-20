
# Guessing number game
!["Guess the number game"](/assests/images/Responsivness%20-%20Gameplay%20Page.jpg)

## Table of content
- [1. Project goal](#1-project-goal)
  - [1.1. User goal](#11-user-goal)
  - [1.2. Site owner's goal](#12-site-owners-goal)
  - [1.3. User Experience](#13-user-experience)
    - [1.3.1. Targeted group](#131-targeted-group)
  - [1.4. User expectation](#14-user-expectation)
  - [1.5. User Stories](#15-user-stories)
- [2. Design of webpage](#2-design-of-webpage)
  - [2.1. Design choices](#21-design-choices)
    - [2.1.1. Color](#211-color)
    - [2.1.2. Structure](#212-structure)
    - [2.1.3. Background Image](#213-background-image)
    - [2.1.4. Page flow & navigation](#214-page-flow--navigation)
- [3. Technology and Tools used](#3-technology-and-tools-used)
  - [3.1. Languages](#31-languages)
  - [3.2. Tools](#32-tools)
  - [3.3. Additional help](#33-additional-help)
- [4. Gameplay](#4-gameplay)
  - [4.1. User interactions](#41-user-interactions)
- [5. Validation](#5-validation)
  - [5.1. Validation Tools](#51-validation-tools)
    - [5.1.1. Responsiveness](#511-Responsiveness)
    - [5.1.2. HTML Checker](#512-html-checker)
    - [5.1.3. CSS Validator](#513-css-validator)
    - [5.1.4. Accessibility Validator](#514-accessibility-validator)
    - [5.1.5. Lighthouse Review - Mobile](#515-lighthouse-review---mobile)
    - [5.1.6. Lighthouse Review - PC](#516-lighthouse-review---pc)
  - [5.2. QA & Bugfixes](#52-qa--bugfixes)
    - [5.2.1. Bugfixes](#521-bugfixes)
    - [5.2.2. Game logic](#522-game-logic)
    - [5.2.3. UI & layout](#523-ui--layout)
    - [5.2.4. Navigation & accessibility](#524-navigation--accessibility)
    - [5.2.5. Styling & performance](#525-styling--performance)
  - [5.3. Testing](#53-testing)
    - [5.3.1. Test environment](#531-test-environment)
    - [5.3.2. Test run](#532-test-run)
    - [5.3.3. Manual testing](#533-manual-testing)
  - [5.4. Challenges & technical decisions](#54-challenges--technical-decisions)
- [6. Support and Help](#6-support-and-help)
  - [6.1. Links](#61-links)
  - [6.2. Deployment](#62-deployment)
- [7. Thanks](#7-thanks)



## **1. Project goal**

The idea behind this project is to 
- create a small, simple guessing game that will interact with the user based on the outcome
- give the user the ability to keep track of overall score (called luck index)
- get users an idea about the probability of guessing the number from 1st go
- make people understand the probability of winning the lottery and returning invested money 
- give the user some entertainment 


### **1.1. User goal**

Try their luck, have fun, and compete with friends to achieve a higher score.
Help users make more analytical decisions about probability and whether it is worth buying a lottery ticket.


### **1.2. Site owner's goal**

Give people something to play around with to pass the time while seeing how mathematical probability works and what are the chances they could get rich playing the lottery.

### **1.3 User Experience**

#### **1.3.1. Targeted group**
The game is suitable for anyone who wants to try their luck, with no age restrictions.
It is most appealing to younger users and casual players, and can also be used as a light-hearted competition between friends.

### **1.4. User expectation**
Expectations are intentionally limited. The game serves as a light-hearted demonstration of probability rather than a serious attempt at predicting lottery outcomes.
With a random element involved (the number is randomly generated), the user will not have any real power over the outcome of the game, and get a better score (it is just pure luck)


### **1.5. User Stories**

- As a user, I want to read the rules before playing so that I understand how the game works.
- As a user, I want to select a number and receive instant feedback so that the game feels interactive.
- As a user, I want to see my past results so that I can track my luck over time.
- As a user, I want to view the leaderboard without interrupting my current game.


## **2. Design of webpage**
-------------------------------------------
### **2.1 Design choices**
Design is wrapped around the idea of having a simple, straightforward, approachable, design with few windows, highly visible buttons to choose from, and clear instructions in both design and text placement and size so there is no confusion about what needs to be selected.

A black background is selected so that Yellow, and red-orange stand out so that black letters are more visible.

The decision was to go with more round shapes instead of crude and sharp edges that would make UI a bit 'old'.

Shadows are also included for visual effects with mostly green and orange colours to match and contrast at the same time buttons, and background colours.


### **2.1.1. Color**
The black background is a good fit for yellow and red with green borders. Green border is perfect for a light transition between the contrast of yellow and orange against black.

Slightly transparent boxes cause that transition in colours to be more distinguished while still slightly transitioning from red or yellow to black.


### **2.1.2. Structure**

**The project now consists of three pages:**

- Welcome page (`index.html`) – explains the rules, provides the main “Start the Game” button and shows social media links.
- Gameplay page (`gameplay.html`) – main interactive game interface.
- Leaderboard page (`leaderboard.html`) – shows saved scores on this device only.

**Structure** is kept simple, with a clear title at the top of each page identifying its purpose.

### **Page structure overview**

#### **Welcome page**
![Welcome Page Layout](/assests/images/Structure%20-%20Welcome%20pane.jpg)

*Figure: Welcome page layout including rules, call-to-action button and social media footer.*

#### **Gameplay page**
![Gameplay Page Layout](/assests/images/Structure%20-%20Gameplay%20pane.jpg)

*Figure: Gameplay page layout showing number selection, game controls and live result feedback.*

#### **Leaderboard page**
![Leaderboard Page Layout](/assests/images/Structure%20-%20Leaderboard%20pane.jpg)

*Figure: Leaderboard page layout displaying score table, navigation buttons and empty-state messaging.*


### **Body content by page**

#### Welcome page body
![Welcome Page Body](/assests/images/Structure%20of%20body%20-%20Welcome%20pane.jpg)

*Figure: Rules and introductory content displayed on the Welcome page.*

#### Gameplay page body
![Gameplay Page Body](/assests/images/Structure%20of%20body%20-%20Gameplay%20pane.jpg)

*Figure: Interactive game area including number grid and action button.*

#### Leaderboard page body
![Leaderboard Page Body](/assests/images/Structure%20of%20body%20-%20Leaderboard%20pane.jpg)

*Figure: Score table area showing either empty state or populated leaderboard.*


### **Footer variations**

#### Welcome page footer
![Welcome Page Footer](/assests/images/Structure%20of%20footer%20-%20Welcome%20pane.jpg)

*Figure: Social media links displayed in the Welcome page footer.*

#### Gameplay page footer
![Gameplay Page Footer](/assests/images/Structure%20of%20footer%20-%20Gameplay%20pane.jpg)

*Figure: Game statistics and live feedback displayed during gameplay.*

#### Leaderboard page footer
![Leaderboard Page Footer](/assests/images/Structure%20of%20footer%20-%20Leaderboard%20pane.jpg)

*Figure: Informational footer explaining local score storage.*


### **Full structure overview**

![Structure Full UI - 'Welcome pane'](/assests/images/Full%20UI%20Welcome%20Pane.jpg)

![Structure Full UI - 'Gameplay pane'](/assests/images/Full%20UI%20Gameplay%20Pane.jpg)

![Structure Full UI - 'Leaderboard pane'](/assests/images/Full%20UI%20Leaderboard%20Pane.jpg)


### **2.1.3. Background Image**

The background image was picked based on theme, colour and simplicity.
Black to increase visibility with saturated simple images of digits that do not stand out or interfere with user's focus.

Picture is High-Res to avoid cropping and blurry images on larger devices.

### **2.1.4. Page flow & navigation**

**Navigation between the three pages is intentionally designed to support how the game is played:**

- From the *Welcome page*, the “Start the Game” button opens the gameplay page in the *same* tab. This encourages users to read the rules before playing.
- From the *Gameplay page*, the “View leaderboard” link opens the leaderboard in a *new tab*. This lets the player keep the current game visible while quickly checking past scores.
- The leaderboard also contains links back to both the Welcome page and the Gameplay page, which open in new tabs. This allows the player to continue an active game while refreshing the leaderboard tab to view updated score history.

This approach keeps the main gameplay uninterrupted, while still making it easy to review rules and scores at any time.


## **3. Technology and Tools used**
-------------------------------------------
### **3.1. Languages**
- HTML
- CSS
- JavaScript


### **3.2. Tools**
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


### **3.3. Additional help**
- YouTube 
- Stack Overflow 
- Slack Community
- No tutor help was requested, as I wanted to pull this as independently as possible


## **4. Gameplay**
-------------------------------------------
The gameplay is designed to be simple and easy to follow, with clear visual feedback and minimal required interaction.

Players select a number between 1 and 9 and then press the “I feel lucky” button to generate a random result.
After each roll, the interface displays the outcome, whether the round was a win or a loss, and updates the overall luck index.

The game runs for 10 rounds per session.
After the final round, the user is prompted to start a new game or view the leaderboard.


### **4.1. User interactions**
User interacts with numbers from 1-9, but can keep a selected number for several rounds with a random number "pulled". That way user can play his/her favourite number several rounds in a row.
Another interaction is that each round requires the user to click on the "I feel lucky" button creates a random number which will be compared with number user selected for him/herself.


![User interaction on "Guess the number game"](/assests/images/User%20Interaction.jpg)

No other interaction is needed as text shows up based on either user selection or outcome, if the numbers match or not. The calculated success rate (luck factor) is also automatically done and doesn't require input from the user.



## **5. Validation**
-------------------------------------------
### **5.1. Validation Tools**
To validate HTML, CSS, accessibility, Responsiveness, and performance... following links were used
- https://validator.w3.org/
- https://jigsaw.w3.org/css-validator/
- https://wave.webaim.org/
- https://ui.dev/amiresponsive?url=https://
- https://developer.chrome.com/docs/lighthouse/overview/

-------------------------------------------

### **5.1.1. Responsiveness** 

https://ui.dev/amiresponsive?url=https://agnogh.github.io/math-for-kids/
![Responsiveness of "Guess the number game" Welcome pane](/assests/images/Responsivness%20-%20Welcome%20Page.jpg)

![Responsiveness of "Guess the number game" Gameplay pane](/assests/images/Responsivness%20-%20Gameplay%20Page.jpg)

![Responsiveness of "Guess the number game" Leaderboard pane](/assests/images/Responsivness%20-%20Leaderboard%20Page.jpg)

### **5.1.2. HTML Checker**

https://validator.w3.org/nu/?doc=https%3A%2F%2Fagnogh.github.io%2Fmath-for-kids%2F

![HTML Checker for "Guess the number game" Welcome pane](/assests/images/HTML%20Checker%20-%20Welcome%20Page%20(index.html).jpg)


![HTML Checker for "Guess the number game" Gameplay pane](/assests/images/HTML%20Checker%20-%20Gameplay%20Page%20(gameplay.html).jpg)


![HTML Checker for "Guess the number game" leaderboard pane](/assests/images/HTML%20Checker%20-%20Leaderboard%20Page%20(leaderboard.html).jpg)

### **5.1.3. CSS Validator**

https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fagnogh.github.io%2Fmath-for-kids%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en

![CSS Validator for "Guess the number game" - No Errors](/assests/images/CSS%20Validator%201%20-%20No%20Errors.jpg)

![CSS Validator for "Guess the number game" - Warnings explanation](/assests/images/CSS%20Validator%202%20-%20No%20Errors.jpg)

**The CSS validator shows only two types of warnings:**

- **“Due to their dynamic nature, CSS variables are currently not statically checked.”** – this is a limitation of the validator with `var(--some-value)` and `calc()`, not an actual error.  
- **“-webkit-appearance is a vendor extension.”** – this is intentionally used to normalise button appearance across browsers and is acceptable.

**Relevant discussions and references:**

- https://stackoverflow.com/questions/75536172/css-variables-are-not-statically-checked  
- https://stackoverflow.com/questions/73135646/why-does-using-a-variable-inside-calc-throw-an-invalid-type-error-in-a-validator  
- https://github.com/validator/validator/issues/1284  
- https://github.com/w3c/css-validator/issues/355  
- https://stackoverflow.com/questions/30607832/w3c-css-validation-error-using-calc-and-vendor-extensions


### **5.1.4. Accessibility Validator**

https://wave.webaim.org/report#/https://agnogh.github.io/math-for-kids/

![Accessibility Validator for "Guess the number game" - Welcome pane](/assests/images/Wave%20-%20Welcome%20Page.jpg)

![Accessibility Validator for "Guess the number game" - Gameplay pane](/assests/images/Wave%20-%20Gameplay%20Page.jpg)

![Accessibility Validator for "Guess the number game" - Leaderboard pane](/assests/images/Wave%20-%20Leaderbaord%20Page.jpg)


### **5.1.5. Lighthouse Review - Mobile**
![Performance Review for "Guess the number game" - Welcome pane](/assests/images/Lighthouse%20Validation%20MOBILE%20-%20Welcome%20Page.jpg)

![Performance Review for "Guess the number game" - Gameplay pane](/assests/images/Lighthouse%20Validation%20MOBILE%20-%20Gameplay.jpg)

![Performance Review for "Guess the number game" - leaderboard pane](/assests/images/Lighthouse%20Validation%20MOBILE%20-%20Leaderboard.jpg)


### **5.1.6. Lighthouse Review - PC**
![Performance Review for "Guess the number game - Welcome pane"](/assests/images/Lighthouse%20Validation%20PC%20-%20Welcome%20Page.jpg)

![Performance Review for "Guess the number game - Gameplay pane"](/assests/images/Lighthouse%20Validation%20PC%20-%20Gameplay.jpg)

![Performance Review for "Guess the number game - Leaderboard pane"](/assests/images/Lighthouse%20Validation%20PC%20-%20Leaderboard.jpg)


### **5.2. QA & Bugfixes**
-------------------------------------------

- **5.2.1 Bugfixes**
  - Below is a summary of the most important bugs and improvements. (Many smaller layout tweaks and refactors are documented in commit messages.)

- **5.2.2. Game logic**
  - Fixed a logical error where duplicate random numbers could be drawn in “easy” and “easiest” modes instead of always drawing distinct numbers.
  - Prevented crashes from undefined variables such as `user_selected_number`.
  - Ensured that the game always consists of exactly 10 valid rolls, while still giving a clear message when the player clicks a “11th time”.
  - Locked game mode selection after the first roll and restored the correct visual state if the user tries to change mode mid-game.
  - Fixed the “Start new game” button so it becomes enabled after 10 rolls and correctly resets all game state.

- **5.2.3. UI & layout**
  - Resolved vertical scrolling issues that forced users to scroll between number selection and the “I feel lucky” button, especially on smaller phones and tablets.
  - Removed horizontal scrolling on Welcome, Gameplay and Leaderboard pages by tightening layout and adding targeted media queries.
  - Adjusted button sizing, spacing and font scaling across multiple breakpoints (phones, tablets, desktops) to avoid oversized or misaligned UI.
  - Fixed the gap at the bottom of the number grid and changed circular buttons into “egg shaped” variants on extreme aspect ratios while keeping them readable.
  - Improved scaling and alignment of the social media icons and leaderboard footer across devices.

- **5.2.4. Navigation & accessibility**
  - Updated links so the Welcome page is the landing page, while the Gameplay page and Leaderboard behave consistently (leaderboard and welcome links open in new tabs where appropriate).
  - Removed an unnecessary script tag on the Welcome page that caused a console error.
  - Removed an empty “0” button used only for layout and replaced it with a more accessible layout solution.
  - Improved heading levels and ARIA labels and cleaned up Wave accessibility warnings where possible.

- **5.2.5. Styling & performance**
  - Reorganised CSS, reduced unused rules and switched more values from `px` to `rem` / `clamp()` for better responsive scaling.
  - Added `preconnect` hints and moved font loading to the recommended place in `<head>` to improve performance.
  - Added defensive checks in JavaScript (for example in `leaderboard.js`) so future changes to non-critical elements don’t cause runtime errors.

**Changes based on subject review feedback:**

- **Fixed the exception in `index.html` caused by `user_selected_number` not being defined.**  
- **Added social media links and a separate welcome page.**  
- **Added two additional game modes (“easy” and “easiest”) and a persistent leaderboard stored in `localStorage`.**  
- **Improved UX with more interactive buttons, thematic styling and better feedback messages.**  
- **Worked towards fitting the core content on a single screen for most devices (with minimal scrolling where this is not technically possible).**  




### **5.3 Testing**
-------------------------------------------
#### **5.3.1. Test environment**
*Browsers*
Chrome, Firefox, Edge, Safari

*HW (devices)*
Desktop (Windows OS)
MacBook Pro
Samsung Galaxy 15, Huawei P30
iPhone SE, iPhones 15 Pro, iPad 15

#### **5.3.2. Test run**
*On live website*
https://agnogh.github.io/math-for-kids/

*On server*
python3 -m http.server --bind 127.0.0.1
--> More > More tools > Developer tools > Console and Network

#### **5.3.3. Manual testing**

The following table outlines key manual test cases performed across all pages.


| Feature / Component| Test Steps | Expected Result |
|--------------|--------------------------|--------------------------|
| **Welcome Page Load** | Open `index.html` on phone, tablet, laptop | Page loads without errors; no horizontal scrolling; header + rules visible |
| **Start Game Button** | Click **Start the Game** | Opens `gameplay.html` in same tab |
| **Game Page Load** | Open `gameplay.html` | All UI elements visible: mode selector, number grid, spin button, result pane, footer |
| **Game Mode Selection** | Select **Normal**, **Easy**, **Easiest** | Only one option active; mode value updates internally |
| **Number Button Selection** | Click numbers 1–9 | Selected number becomes highlighted; previous highlight is removed |
| **Spin Without Selection** | Click **I feel lucky** with no number selected | Status text instructs user to select a number |
| **Spin With Selection** | Select number → click **I feel lucky** | Random number is generated; win/lose message shown; counter updates |
| **10-Round Limit** | Click **I feel lucky** more than 10 times | Round 11 is blocked; user instructed to start new game |
| **Start New Game Button** | After 10 rounds, click **Start new game** | Score resets; buttons reset; selection reset |
| **Leaderboard Link (Game Page)** | After a full game, click **Leaderboard** | Opens `leaderboard.html` in **new tab**, without interrupting game |
| **LocalStorage Save** | Finish 10 rounds | Score added to localStorage; persists after refresh |
| **Leaderboard Load** | Open `leaderboard.html` with saved data | Table displays ranking, game mode, luck %, timestamp |
| **Leaderboard Empty State** | Clear localStorage → Reload page | Shows "**No scores yet**" message centered in the results box |
| **Clear Leaderboard Button** | Click **Clear leaderboard** | Stored scores deleted; empty state message appears |
| **Welcome Page Link in Leaderboard** | Click **Welcome Page** link | Opens welcome page in new tab |
| **Game Page Link in Leaderboard** | Click **Game Page** link | Opens gameplay page in new tab |
| **Responsiveness (Phones)** | Test 360×640, 414×896, 390×844 | No clipping; full UI visible; footer not oversized |
| **Responsiveness (Tablets)** | Test 768×1024, 820×1180 | Tablet media query activates: reduced padding, centered titles, reduced button heights |
| **Responsiveness (Large screens)** | Test 1366×768, 1920×1080 | Layout centered; footer properly sized; no text overlaps |
| **Accessibility (Keyboard)** | Use TAB to navigate | All interactive elements receive focus in logical order |
| **Accessibility (ARIA)** | Observe result updates during game | Live regions announce updates; no redundant alerts |
| **Favicons** | Reload site from GitHub Pages | All favicon files load correctly; no 404 errors |
| **Error Console** | Open DevTools → Console → Refresh all pages | Zero errors; no undefined variables; no blocked scripts |



#### **5.4. Challenges & technical decisions**

During development, a few design decisions made the project more complex than a simple one-page game:

- Original layout vs. three-page structure – the UI was first designed as a single page. Later requirements added a dedicated Welcome page and a Leaderboard page. Re-using the same CSS across three layouts introduced many alignment and scaling issues. In hindsight, starting a fresh stylesheet for the multi-page version would probably have been faster than continuously “hot-fixing” the original one.

- “One screen” requirement – trying to avoid scrolling on all devices while keeping the game readable was challenging. On some device sizes this is not realistic without hurting accessibility. The final compromise is that small initial scrolling might be needed on some screens, but the game can then be played without further scrolling.

- Responsive typography – early versions relied heavily on fixed px sizes. Over time, the project migrated towards rem, clamp() and CSS variables so that changing base font size affects the whole layout more predictably.

- Aspect-ratio specific fixes – a lot of effort went into handling very tall phones and very wide desktop monitors so that buttons stayed usable and text remained centred. Special media queries for certain aspect ratios were introduced to keep the number grid and footer looking balanced.

- Leaderboard UX – the leaderboard must look reasonable both when it is empty and when there is a long history of games. Additional spacing, media queries and footer adjustments were added so that neither version feels broken.

These constraints made the project slower to finish, but also provided good practice in debugging responsive layouts, JavaScript game logic, and accessibility issues.


## **6. Support and Help**
-------------------------------------------
### **6.1. Links**
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


### **6.2. Deployment**

1. Create a GitHUb repo
- 1a Create a new repository on GitHub (math-for-kids)
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
--> Pages (last item under 'code and automation' section)
--> Build and Deployment section (top)
--> Source > Select drop-down menu 
--> Deploy from a branch
--> Select 'main' 
--> Select root
--> Click on Save


- Deployed page
https://agnogh.github.io/math-for-kids/

- GitHub
https://github.com/Agnogh/math-for-kids


## **7. Thanks**
NA
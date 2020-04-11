# BriAccess

## Description

We’re building an application to help people with communication issues during emergency situations. People with communication issues include those who are deaf, partially deaf or non-verbal due to any reason. Emergency situations include fire, medical and traffic stops or emergencies.

The current problem is that during such emergency situations, communication between law enforcement or emergency service workers and people with communication issues takes more than twice as long as regular interactions. For example, when a traffic cop pulls over a deaf individual for speeding, the interaction can take up to 40 minutes, but stops like these should only take around 10 minutes. We want to bridge this divide by making communication easier through our app. 

We’re bridging this communication gap by shifting the medium of communication. 
Instead of relying on verbal communication, our application uses pictographic communication. The 4 sections on the landing page are built for 4 different types of situations. The Police, Fire, Emergency and Help sections are built for communication between people with communication issues and then police officers, firefighters, emergency service responders and other non-law-enforcement regular citizens, respectively.

Each section will contain frequently asked questions according to the unique scenario, and images supporting those questions. For example, “Show me your id” will have pictures of multiple types of id so that it can easily be pointed to. This pictographic information will reduce communication time exponentially, making these interactions not just faster, but also simpler and less intimidating for both parties involved.

## Key Features

<details><summary>LANDING PAGE</summary>

The landing page of the application includes a header and a main body. 

### Header
The header contains 3 buttons. From left to right

1. **HEALTH** - This button opens up the medical page.
1. **IDENTITY** - This is a declaration statement unique to each user. It’s the first thing they should be able to easily pull up to communicate their medical condition and needs. The default statement is “I am Deaf” but it can be edited using the edit button to include other needs such as “I am deaf and require wheelchair access”. 
1. **TEXT** - This button opens up the text page.

### Body 
The four subsections are:
1. **EMS** - For interactions with emergency service workers.
1. **POLICE** -  For interactions with police officers.
1. **HELP** -  For interactions with regular citizens. 
1. **FIRE** - For interactions with firefighters. 

Each section will include questions unique to the emergency situations. Each question has a dropdown of images relating to that question that can be easily distinguished and pointed to.
As of now we have included dummy questions, we are waiting for our partner to provide us with their list of heavily researched and tested questions from their organization. 

</details>


<details><summary>MEDICAL PAGE</summary>

This page contains the medical information of the user. 

1. The text fields in this page will be empty by default. 
1. To edit/add information the user can click on the edit button and they will be redirected to the edit medical information page. The information on this page will be saved dynamically therefore, pressing the back button will take the user back to the medical information page with the updated text fields. The save button alerts the user that they’re changes are saved dynamically.
1. There’s a data privacy warning at the bottom that let’s users know that their data is private and only stores locally.
1. This page also has two buttons at the bottom - Get Data and Send Data. These buttons are used to transfer your medical data from one device to another (incase the user buys a new device). The Get Data button will open the camera to read the QR code from the old device and the Send Data button will generate the QR code using the current medical information. The implementation for both of these buttons has not been completed.
</details>

<details><summary>TEXT PAGE</summary>

This page allows users to create conversations and view past ones

1. Users will be able to create new conversations with a title of their choice
1. Users will also be able delete old conversations
1. Clicking on an existing conversation opens it, showing all the messages added to it, and a text box to allow adding more messages
1. Currently not able to create/delete conversations or add messages, just view test data
1. Additional features planned are the ability to export a conversation to some file format like PDF, and possibly to incorporate some speech-to-text or vice versa
</details>

## Instructions

The app is accessible [here](https://oad.netlify.com/). There are no user accounts, so anyone can start using the app as-is without any additional setup. When first visiting the site, you are greeted by the landing page, which features the four main sections of the app. Clicking/tapping on either of these sections will bring you to that section’s page. The navbar at the top of the screen allows you to navigate back to the home screen.

The navbar at the top of the landing page also has links to the Medical and Text page. The medical page has medical information displayed. There are Send Data and Get Data buttons at the bottom send and receive medical information. The Send Data button creates a QR code with all the medical information that has been filled in. Taking a picture of this QR code from another device will allow you to see all the information. The Get Data button has not been implemented yet. To edit the medical information, the user must click the edit button that’ll take you to the edit medical page. The changes on this page are saved dynamically. The back button from edit medical brings you back to the Medical page. The back button from the Medical Page takes you back to the Landing Page.

The text page shows all created conversations. The back button on this page takes you back to the home page. Clicking on a conversation takes you to a page showing the messages in that conversation. The back button on that page goes to the conversations menu.

The identity button displays a pop up which presents the user’s personal statement of medical condition and needs. It’s top and center for easiest reach.

## Development requirements

* This PWA is built with React.js which is available via npm, that comes packaged with [Node.js](https://nodejs.org/en/) so Node.js and npm must be installed.
* Once these are installed, you'll need to clone the repo.
```
git clone https://github.com/csc301-winter-2020/team-project-7-ontarioassocofthedeaf.git
cd team-project-7-ontarioassocofthedeaf
```
* Next you'll need to install dependencies with `npm i`
* Finally start the app with `npm start`
* For production builds you can instead run `npm run build`

To get the full effect of the PWA (installable cross-platform app), it will have to be hosted on https. We host all our branches on https via Netlify to make sure it works as a PWA, so keep in mind that the PWA magic doesn't work on localhost.

## Deployment and Github Workflow

* There is ultimately the `master` branch, and at the start of each deliverable a branch is made called dX-work, where X is the number of the deliverable, e.g: `d1-work`, `d2-work`, etc.
* Issues are made on a project board specific to each deliverable. Members assign themselves to an issue and move it across the Project board from TODO, to In Progress, to Done.
* When someone begins work on an issue, they create a branch from dX-work, usually named dX-<what-is-being-done>, or anything other than dX-work.
* When work is done on a branch, a pull request is made with an appropriate destination branch. i.e. dX-work branches go to master when the deliverable is done, and all other branches go to their respective dX-work branch.
* Every team member is automatically invited for review on all pull requests. A pull request cannot be merged until at least 3 team members (besides who created the pull request) review and approve the changes. Once there are 3 accepted reviews, anyone can merge the branch.
* The master and dX-work branches (besides d1-work) are configured to automatically deploy to Netlify whenever changes are made.
* Pull requests into any of those branches also have deploy previews made on Netlify so visually sharing and testing changes is easier.
* It’s also encouraged that branches with unfinished work still make work-in-progress pull requests just so the deploy preview can be live.
* This workflow was chosen as it helps us stay organized while adding little to no complexity/overhead. Netlify was easy to configure and had great integrations right out of the box like watching for changes, previews on pull requests, etc.. GitHub project boards live in the repository, so we don’t have to switch to and manage 3rd party apps, and it also has some handy automation features built right in. The branching scheme also enforces reviews to be made, protects our production code, and lets us see our progress from one dX-work branch to another over time.

## Licenses
* We decided to use the [MIT](https://opensource.org/licenses/MIT) licence for our codebase. We as a team decided on this because we also wanted the software to be open source, and we think that MIT explains what we want in a clear and concise way.
* The effects on our codebase are simple as the only repercussion is that anyone can use our code in any way that they want as long as it complies with the licence. We don’t have to work around the licence.

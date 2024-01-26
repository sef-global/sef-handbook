"use strict";(self.webpackChunksef_handbook=self.webpackChunksef_handbook||[]).push([[13],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(a),u=r,h=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:10},o="Google Summer of Code 2024 - Project Ideas",l={unversionedId:"project-ideas",id:"project-ideas",title:"Google Summer of Code 2024 - Project Ideas",description:"Sustainable Education Foundation is excited to announce our first-time application to be a mentoring organization for Google Summer of Code 2024! We are eager to be part of this esteemed program and are looking forward to the potential projects and mentorship opportunities available in 2024. Participating in Google Summer of Code with SEF provides a unique chance to enhance your coding skills while contributing to initiatives that have a positive impact on education in developing countries.",source:"@site/docs/project-ideas.md",sourceDirName:".",slug:"/project-ideas",permalink:"/project-ideas",draft:!1,editUrl:"https://github.com/sef-global/sef-handbook/edit/main/docs/project-ideas.md",tags:[],version:"current",lastUpdatedBy:"Sanjana",lastUpdatedAt:1706291182,formattedLastUpdatedAt:"Jan 26, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Adopting a self-service and self-learning mentality",permalink:"/culture/self-service"},next:{title:"GSoC - Guidelines",permalink:"/gsoc-contributor-guidance"}},s={},m=[],d={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-summer-of-code-2024---project-ideas"},"Google Summer of Code 2024 - Project Ideas"),(0,r.kt)("p",null,"Sustainable Education Foundation is excited to announce our first-time application to be a mentoring organization for ",(0,r.kt)("a",{parentName:"p",href:"http://g.co/gsoc"},"Google Summer of Code")," 2024! We are eager to be part of this esteemed program and are looking forward to the potential projects and mentorship opportunities available in 2024. Participating in Google Summer of Code with SEF provides a unique chance to enhance your coding skills while contributing to initiatives that have a positive impact on education in developing countries."),(0,r.kt)("p",null,"If you are new to Sustainable Education Foundation, we recommend going through our ",(0,r.kt)("a",{parentName:"p",href:"https://handbook.sefglobal.org/engineering-team/team"},"handbook"),". "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Project name"),(0,r.kt)("th",{parentName:"tr",align:null},"RATING AND SIZE"),(0,r.kt)("th",{parentName:"tr",align:null},"PROJECT DESCRIPTION"),(0,r.kt)("th",{parentName:"tr",align:null},"SKILLS (Required/Preferred)"),(0,r.kt)("th",{parentName:"tr",align:null},"Primary Mentor"),(0,r.kt)("th",{parentName:"tr",align:null},"Secondary Mentor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Program Progress Data visualization for ScholarX"),(0,r.kt)("td",{parentName:"tr",align:null},"Medium, 175 hours"),(0,r.kt)("td",{parentName:"tr",align:null},"We need to get some insights on what\u2019s happening with the program. The best solution to this is to visualize the data we have in a meaningful way. We can integrate this to our existing admin dashboard. With this information we can make better decisions to make the scholarx program better."),(0,r.kt)("td",{parentName:"tr",align:null},"React, TypeScript, Node.js"),(0,r.kt)("td",{parentName:"tr",align:null},"Anjula Samarasinghe"),(0,r.kt)("td",{parentName:"tr",align:null},"Madhawa Monarawila")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integrated Email Communication System for ScholarX Platform"),(0,r.kt)("td",{parentName:"tr",align:null},"Medium, 175 hours"),(0,r.kt)("td",{parentName:"tr",align:null},"To enhance communication within the ScholarX platform, an integrated email system will be implemented. This will allow program admins to seamlessly contact mentors and mentees directly through the platform, eliminating the need for external email systems. The integration will include features such as composing, sending, and receiving emails, as well as organising and tracking communications for monitoring purposes."),(0,r.kt)("td",{parentName:"tr",align:null},"React, TypeScript, Node.js, Email API Integration (e.g., SMTP for sending emails, IMAP for receiving emails)"),(0,r.kt)("td",{parentName:"tr",align:null},"Mayura Alahakoon"),(0,r.kt)("td",{parentName:"tr",align:null},"Heshan Jayaneththi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Individual Profile for Mentors/Mentees"),(0,r.kt)("td",{parentName:"tr",align:null},"Medium, 175 hours"),(0,r.kt)("td",{parentName:"tr",align:null},"It would be beneficial to provide ScholarX users (mentors and mentees) with a means to share their ScholarX profiles as a portfolio. This feature would enable them to showcase their activities, including past mentorships (both taken and given), reviews, and other pertinent details such as their background, skills, and experience. A user can function as either a mentor or a mentee, and while most users will fall into only one category, there may be exceptional cases where a user serves in both roles.  To implement this, students can utilize the existing wireframes and UI mockups designed for the relevant profile pages, making improvements as necessary. Additionally, backend changes may be suggested based on specific requirements and optimization needs."),(0,r.kt)("td",{parentName:"tr",align:null},"React, TypeScript, Node.js"),(0,r.kt)("td",{parentName:"tr",align:null},"Piumal Rathnayake"),(0,r.kt)("td",{parentName:"tr",align:null},"Kumuditha Udaya")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ScholarX Messaging"),(0,r.kt)("td",{parentName:"tr",align:null},"Medium, 175 hours"),(0,r.kt)("td",{parentName:"tr",align:null},"The project involves creating a messaging feature for a web application to enhance communication between mentors and mentees in scholarX. The key features expected include a user-friendly chat interface with real-time messaging, support for text messages, and possibly file attachments. The system should implement push notifications or email alerts to notify users of new messages, Additionally, the platform should provide read receipts, and offer mentors the ability to create group messages for\xa0their\xa0mentees."),(0,r.kt)("td",{parentName:"tr",align:null},"React, TypeScript, Node.js"),(0,r.kt)("td",{parentName:"tr",align:null},"Kumuditha Udaya"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integrated appointment system for ScholarX Platform"),(0,r.kt)("td",{parentName:"tr",align:null},"Medium, 175 hours"),(0,r.kt)("td",{parentName:"tr",align:null},"One of the key requirements of the ScholarX program is to understand the interactions between the mentees and the mentors. However since most of the meeting / discussion scheduling happens outside the platform, program admins have to rely on manual feedback collections to monitor aspects like frequency of discussions, discussed topics, etc."),(0,r.kt)("td",{parentName:"tr",align:null},"React, TypeScript, Node.js"),(0,r.kt)("td",{parentName:"tr",align:null},"Ashen Robles"),(0,r.kt)("td",{parentName:"tr",align:null},"Anjula Samarasinghe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ScholarX Certificate Generator"),(0,r.kt)("td",{parentName:"tr",align:null},"Medium, 175 hours"),(0,r.kt)("td",{parentName:"tr",align:null},"ScholarX Certificate Generator will address the inefficiencies of the current manual system. The project is designed to streamline and enhance the certification process for the ScholarX program. This platform enables seamless certificate generation for program participants, ensuring a quick and efficient way to validate their achievements."),(0,r.kt)("td",{parentName:"tr",align:null},"React, TypeScript, Node.js, Jest"),(0,r.kt)("td",{parentName:"tr",align:null},"Janith Kariyawasam"),(0,r.kt)("td",{parentName:"tr",align:null},"Ashen Robles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Recommendation System for ScholarX Platform"),(0,r.kt)("td",{parentName:"tr",align:null},"Medium, 175 hours"),(0,r.kt)("td",{parentName:"tr",align:null},"Currently, in the ScholarX Platform, mentees can filter mentors by category and find a suited mentor, but we want to implement a more sophisticated recommendation system, which will analyse mentees' responses to questions to identify their interests and then match mentees with mentors based on similar interests, providing a more personalised and effective mentorship experience."),(0,r.kt)("td",{parentName:"tr",align:null},"Understanding of machine learning algorithms for analysis, Familiarity with creating web services, and APIs, Python"),(0,r.kt)("td",{parentName:"tr",align:null},"Madhawa Monarawila"),(0,r.kt)("td",{parentName:"tr",align:null},"Akshika Wijesundara")))))}c.isMDXComponent=!0}}]);
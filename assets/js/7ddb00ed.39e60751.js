"use strict";(self.webpackChunksef_handbook=self.webpackChunksef_handbook||[]).push([[465],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),m=n,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return o?r.createElement(g,a(a({ref:t},c),{},{components:o})):r.createElement(g,a({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6429:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const i={sidebar_position:11,title:"GSoC - Guidelines"},a="Google Summer of Code Contributor Guidelines",s={unversionedId:"gsoc-contributor-guidance",id:"gsoc-contributor-guidance",title:"GSoC - Guidelines",description:"Are you interested in participating in a Google Summer of Code project with SEF? We're excited to guide you toward becoming a successful GSoC contributor in our community. To assist you, we've compiled some guidelines and sessions that address your initial questions and provide insight into what is expected of students before proposal submission, after acceptance, and during the coding period.",source:"@site/docs/gsoc-contributor-guidance.md",sourceDirName:".",slug:"/gsoc-contributor-guidance",permalink:"/gsoc-contributor-guidance",draft:!1,editUrl:"https://github.com/sef-global/sef-handbook/edit/main/docs/gsoc-contributor-guidance.md",tags:[],version:"current",lastUpdatedBy:"anjula-sack",lastUpdatedAt:1706115946,formattedLastUpdatedAt:"Jan 24, 2024",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"GSoC - Guidelines"},sidebar:"tutorialSidebar",previous:{title:"Google Summer of Code 2024",permalink:"/project-ideas"},next:{title:"Handbook Usage",permalink:"/handbook/usage"}},l={},u=[{value:"Before the Application",id:"before-the-application",level:2},{value:"After Being Accepted",id:"after-being-accepted",level:2},{value:"During the Coding Period",id:"during-the-coding-period",level:2},{value:"After GSoC",id:"after-gsoc",level:2},{value:"GSoC Awareness Sessions",id:"gsoc-awareness-sessions",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-summer-of-code-contributor-guidelines"},"Google Summer of Code Contributor Guidelines"),(0,n.kt)("p",null,"Are you interested in participating in a Google Summer of Code project with SEF? We're excited to guide you toward becoming a successful GSoC contributor in our community. To assist you, we've compiled some guidelines and sessions that address your initial questions and provide insight into what is expected of students before proposal submission, after acceptance, and during the coding period."),(0,n.kt)("h2",{id:"before-the-application"},"Before the Application"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Familiarize yourself with SEF and the project(s) you're interested in. Refer to the Developer Guide, Getting Started as a Developer, and engage with the community for any queries."),(0,n.kt)("li",{parentName:"ol"},"Explore project ideas and ask questions in the GSoC category on SEF Hive."),(0,n.kt)("li",{parentName:"ol"},"Actively participate in SEF slack channel and SEF Hive."),(0,n.kt)("li",{parentName:"ol"},"Introduce yourself on the introduction thread on SEF Hive."),(0,n.kt)("li",{parentName:"ol"},"Contribute to SEF by working on github issues. Select issues from github, work on them, and submit pull requests to the respective repository."),(0,n.kt)("li",{parentName:"ol"},"Identify potential issues in SEF projects. Create new github issues for unreported issues."),(0,n.kt)("li",{parentName:"ol"},"Increase visibility on SEF Hive and Slack by helping others and engaging in discussions."),(0,n.kt)("li",{parentName:"ol"},"Conduct code reviews. Reviewing others' code is essential for learning the SEF code base.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Additional Expectations:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Write blogs about SEF or related topics to contribute valuable information to others."),(0,n.kt)("li",{parentName:"ul"},"Properly document your work in Hive and assist others in building on it.")),(0,n.kt)("h2",{id:"after-being-accepted"},"After Being Accepted"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set up a blog for your open source projects, including GSoC. Share the URL on SEF Hive and write weekly posts about planning and project progress during GSoC."),(0,n.kt)("li",{parentName:"ol"},"Contact your mentor immediately and establish a regular communication plan. Use slack or discussions on SEF Hive for communication."),(0,n.kt)("li",{parentName:"ol"},"CC your backup mentor in communications to keep them informed of your progress."),(0,n.kt)("li",{parentName:"ol"},"Review github issues related to your project and work on initial bugs or feature development with guidance from your mentor."),(0,n.kt)("li",{parentName:"ol"},"Prepare a detailed project plan with SMART goals and milestones, and publish it on SEF Hive.")),(0,n.kt)("h2",{id:"during-the-coding-period"},"During the Coding Period"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Submit a short weekly progress updates."),(0,n.kt)("li",{parentName:"ol"},"Write a weekly blog post to share your work publicly."),(0,n.kt)("li",{parentName:"ol"},"Commit early and often to align with our open-source community values."),(0,n.kt)("li",{parentName:"ol"},"Prepare mid-term and final project presentation videos for the community.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Developer Community Expectations:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Conduct all project-related discussions on slack or SEF Hive."),(0,n.kt)("li",{parentName:"ul"},"Ask questions in a smart way when facing challenges."),(0,n.kt)("li",{parentName:"ul"},"Participate in the weekly standup calls when your schedule allows.")),(0,n.kt)("h2",{id:"after-gsoc"},"After GSoC"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Write a final blog post summarizing your overall experience. Consider cross-posting to the Google Open Source Blog with approval from org admins."),(0,n.kt)("li",{parentName:"ol"},"Stay involved with your project or other projects based on your schedule."),(0,n.kt)("li",{parentName:"ol"},"Monitor SEF Hive for additional questions or feedback about your GSoC project and for other topics of interest."),(0,n.kt)("li",{parentName:"ol"},"Consider participating as a mentor for GSoC, if SEF is accepted. Your involvement will inspire secondary school students to use their programming skills in open source projects.")),(0,n.kt)("h2",{id:"gsoc-awareness-sessions"},"GSoC Awareness Sessions"),(0,n.kt)("p",null,"We have conducted a few GSoC awareness sessions. Check out the links below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/live/o6rBv_5FfPo?si=CQCPvymFVX51q2DK"},"Sun's Out with Google Summer of Code 2024")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/live/2hFRHc_zNvU?si=uYzptEE-b_MU3tpu"},"Sun's Out with Google Summer of Code 2023")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/cso2YTD3z3s?si=nrmcT8hDKR-iwXTj"},"Google Summer of Code Awareness Session"))))}p.isMDXComponent=!0}}]);
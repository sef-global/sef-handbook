"use strict";(self.webpackChunksef_handbook=self.webpackChunksef_handbook||[]).push([[982],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4392:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={sidebar_position:2,title:"Practical Handbook Edits"},s="Practical Handbook Edits Examples",d={unversionedId:"organisation/handbook/practical-handbook-edits",id:"organisation/handbook/practical-handbook-edits",title:"Practical Handbook Edits",description:"This page contains video recordings and written instructions on how to work Handbook-First for non-engineering team",source:"@site/docs/organisation/handbook/practical-handbook-edits.md",sourceDirName:"organisation/handbook",slug:"/organisation/handbook/practical-handbook-edits",permalink:"/organisation/handbook/practical-handbook-edits",editUrl:"https://github.com/sef-global/sef-handbook/edit/main/docs/organisation/handbook/practical-handbook-edits.md",tags:[],version:"current",lastUpdatedBy:"Jayasanka Weerasinghe",lastUpdatedAt:1642922684,formattedLastUpdatedAt:"1/23/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Practical Handbook Edits"},sidebar:"tutorialSidebar",previous:{title:"Handbook Usage",permalink:"/organisation/handbook/usage"},next:{title:"Edit the handbook locally",permalink:"/organisation/handbook/edit-locally"}},c=[{value:"Creating new handbook pages and multimedia embedding best-practices",id:"creating-new-handbook-pages-and-multimedia-embedding-best-practices",children:[],level:2},{value:"Creating mermaid diagrams",id:"creating-mermaid-diagrams",children:[],level:2},{value:"Creating issue templates",id:"creating-issue-templates",children:[],level:2},{value:"More Tips",id:"more-tips",children:[{value:"Pre-requisites",id:"pre-requisites",children:[],level:3},{value:"Find files",id:"find-files",children:[],level:3}],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"practical-handbook-edits-examples"},"Practical Handbook Edits Examples"),(0,r.kt)("p",null,"This page contains video recordings and written instructions on how to work Handbook-First for non-engineering team\nmembers. In these videos, we walk through the SEF Handbook with experts, learning how to best use the Handbook in our\nday-to-day work and picking up best practices for Handbook editing along the way. This page contains some examples from\nGitLab, the company from which we drew inspiration for the SEF handbook. However, we use github to maintain our\nhandbook. Therefore, this page should be updated with current information."),(0,r.kt)("p",null,"Have your own practical Handbook editing tips? Drop a video below!"),(0,r.kt)("h2",{id:"creating-new-handbook-pages-and-multimedia-embedding-best-practices"},"Creating new handbook pages and multimedia embedding best-practices"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/hQgS97M8abc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,"Please note that the video mentions that you need to go to ",(0,r.kt)("inlineCode",{parentName:"p"},"source/handbook")," to create a page which is no longer the\ncase. The handbook is located under ",(0,r.kt)("inlineCode",{parentName:"p"},"_docs"),"."),(0,r.kt)("h2",{id:"creating-mermaid-diagrams"},"Creating mermaid diagrams"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SQ9QmuTHuSI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,"This video covers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating a mermaid diagram for the handbook:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Intro to a mermaid diagram"),(0,r.kt)("li",{parentName:"ul"},"What they look like"),(0,r.kt)("li",{parentName:"ul"},"Use cases for using them in the handbook Note: Flowcharts are universally used to outline the steps of a processes\nin sequential\norder. ",(0,r.kt)("a",{parentName:"li",href:"https://www.lucidchart.com/pages/flowchart-symbols-meaning-explained"},"Every shape or symbol has its own function in a flowchart."))))),(0,r.kt)("h2",{id:"creating-issue-templates"},"Creating issue templates"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ObNWS3trqIY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,"This video covers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why you may want to use issue templates - @0:10"),(0,r.kt)("li",{parentName:"ul"},"What is an issue template and how to create one - @:54"),(0,r.kt)("li",{parentName:"ul"},"How issue templates and boards facilitate workflow management and automation - @3:55")),(0,r.kt)("h2",{id:"more-tips"},"More Tips"),(0,r.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"Some tips may require terminal shell access on macOS/Linux. Ensure that your environment is working and that you have\ncloned the www-gitlab-com project for example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/sef-global/handbook.git\n")),(0,r.kt)("p",null,"Sync it. Ensure that you stash away local changed not yet committed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd handbook\ngit stash\ngit checkout master\ngit pull\n")),(0,r.kt)("p",null,"On macOS it is advised to use Homebrew and install the GNU tools.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://about.gitlab.com/blog/2020/04/17/dotfiles-document-and-automate-your-macbook-setup/"},"this blogpost")," for a\nmacOS setup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install gnu-sed\n")),(0,r.kt)("h3",{id:"find-files"},"Find files"),(0,r.kt)("p",null,"One of the shell tools provided with macOS/Linux GNU is ",(0,r.kt)("inlineCode",{parentName:"p"},"find"),". Open a terminal an run the following command in the main\ndirectory of the ",(0,r.kt)("inlineCode",{parentName:"p"},"handbook")," repository to get a list of all *.md files. This matches .md as suffix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"find . -type f -name '*.md'\n")),(0,r.kt)("p",null,"Instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},".")," you can also use a directory in the current path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"find source/handbook -type f -name '*.md'\n")),(0,r.kt)("p",null,"The type ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," specifies files, ",(0,r.kt)("inlineCode",{parentName:"p"},"d")," matches for directories. When not specified, all files and directories are taken into\naccount. You can replace ",(0,r.kt)("inlineCode",{parentName:"p"},"-name")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"-regex")," to do more sensitive matching, for example to match all ",(0,r.kt)("inlineCode",{parentName:"p"},".md"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},".md.erb")," files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"find . -type f -regex '.*\\.md[.erb]*'\n")))}u.isMDXComponent=!0}}]);
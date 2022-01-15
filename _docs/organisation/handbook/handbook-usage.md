---
layout: page
title: Handbook Usage
parent: Handbook
grand_parent: Organisation
nav_order: 1
---

# SEF Handbook Usage


<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Flow structure

1. A (process) problem comes up, frequently in an issue or chat.
1. A proposal is made in a pull request to the handbook.
1. Once merged, the change is announced by linking to the diff in the PR or commit. Major ones are posted in the #general slack channel. Medium ones are posted in the #handbook channel for visibility, with a one line summary of the change. If there was an issue, close it out with a link to the diff.

Sometimes you want to have real time editing of a proposal during a meeting and you need to use a Google Doc for that. When doing so the first item should be the URL of the handbook page this content will be moved to when the meeting is over.

## Why handbook first?

Documenting in the handbook before taking an action may require more time initially because you have to think about where to make the change, integrate it with the existing content, and then possibly add to or refactor the handbook to have a proper foundation. But, it saves time in the long run, and this communication is essential to our ability to continue scaling and adapting our organization.

This process is not unlike writing tests for your software. Only communicate a (proposed) change via a change to the handbook; don't use a presentation, email, chat message, or another medium to communicate the components of the change. These other forms of communication might be more convenient for the presenter, but they make it harder for the audience to understand the context and the implications for other potentially affected processes.

Having a **"handbook first"** mentality ensures there is no duplication; the handbook is always up to date, and others are better able to contribute.

<iframe width="560" height="315" src="https://www.youtube.com/embed/EuGsen3FxXc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

When asked during an INSEAD case study interview (shown above) about challenges related to being all-remote, GitLab co-founder and CEO Sid Sijbrandij provided the following reply.


> " The biggest problem is GitLab not working handbook first. We have an amazing handbook that allows us to collaborate, onboard new people, and think collectively.
{: .text-grey-dk-000 }
> However, it is counterintuitive to communicate changes to the handbook. The default of people, when they wish to communicate a change, is to send a Slack message, send an email, give a presentation, or tell people in a meeting — anything but make a change in the handbook.
{: .text-grey-dk-000 }
> It's slower for them. It's quicker to use any other form. If they make a change in the handbook, they first have to find the relevant part of the handbook, they sometimes have to adjust the handbook to make sure their change will fit in, they have to go through a technical process and a review or two, and they have to wait a bit before it's deployed.
{: .text-grey-dk-000 }
> It's slower than any other option. However, it allows people that commit a change after that to build upon a change. When they take that extra time, it's building a foundation for the next thing.
{: .text-grey-dk-000 }
> I think of it as brick laying. Every piece of information is a brick. At GitLab, there is a well-structured house, and everyone adds to that one house. Because we're pretty particular on how we build it, it has a strong foundation and we can build it very high.
{: .text-grey-dk-000 }
> In every other company, they send the brick into the hands of people. Everyone is receiving bricks daily that they have to add to the house they're building internally. They forget things and things are unclear. A lot of context has to be created because there is no context around where to place the bricks.
{: .text-grey-dk-000 }
> So, you can end up with a thousand houses that look quite different, that are all hanging a bit, and each time you add a brick to the top one pops out at the bottom."
{: .text-grey-dk-000 }
 — GitLab co-founder and CEO Sid Sijbrandij


## Handbook guidelines
Please follow these guidelines and remind others of them.

## How we use the guide every day

1. Most guidelines in this handbook are meant to help, and unless otherwise stated, are meant to help more than being absolute rules. Don't be afraid to do something because you don't know the entire handbook, nobody does. Be gentle when reminding people about these guidelines. For example say, "It is not a problem, but next time please consider the following guideline from the handbook."
1. If you ask a question and someone answers with a link to the handbook, they do this because they want to help by providing more information. They may also be proud that we have the answer documented. It doesn't mean that you should have read the entire handbook, nobody knows the entire handbook.
1. If you need to ask a team member for help, please realize that there is a good chance the majority of the community also doesn't know the answer. Be sure to **document** the answer to radiate this information to the whole community. After the question is answered, discuss where it should be documented and who will do it. You can remind other people of this request by asking "Who will document this?"
1. When you discuss something in chat always try to **link** to a URL where relevant. For example, the documentation you have a question about or the page that answered your question. You can remind other people of this by asking "Can you please link?"
1. Remember, the handbook is not what we hope to do, what we should formally do, or what we did months ago. **It is what we do right now**. Make sure you change the handbook in order to truly change a process. To propose a change to a process, make a pull request to change the handbook. Don't use another channel to propose a handbook change (email, Google Doc, etc.).
1. The handbook is the process. Any sections with names like 'process', 'policies', 'best practices', or 'standard operating procedures' are an indication of a deeper problem. This may indicate a duplication between a prose description of a process and a numbered list description of the same process that should be combined in one description of the process.
1. When communicating something always include a link to the relevant (and up-to-date) part of the **handbook** instead of including the text in the email/chat/etc. You can remind other people of this by asking "Can you please link to the relevant part of the handbook?"
1. Everyone should subscribe to the `#handbook` channel to stay up-to-date with changes to the handbook.

## How to change or define a process

1. To change a guideline or process, **suggest an edit** in the form of a pull request.
1. When working to get your change merged quickly, make sure you are asking the appropriate team members with merge rights.
1. After it is merged you can post this in the `#general` slack channel if applicable. You can remind other people of this by asking "Can you please send a pull request for the handbook?"
1. When substantially changing handbook layout, please leave a link to the specific page of the review app **that is directly affected by this PR**. Along with the link, include as much info as possible in the PR description. This will allow everyone to understand what is the purpose of the PR without looking at diffs.
1. Keeping up with changes to the Handbook can be difficult, please follow the commit subject guidelines with a particular focus on your pull request's title, to ensure someone reading the Handbook Changelog can quickly understand the MR's content.
1. Communicate process changes by linking to the **merged diff** (a commit that shows the changes before and after). If you are communicating a change for the purpose of discussion and feedback, it is ok to link to an **unmerged diff**. Do not change the process first, and then view the documentation as a lower priority task. Planning to do the documentation later inevitably leads to duplicate work communicating the change and it leads to outdated documentation. You can remind other people of this by asking "Can you please update the handbook first?"
1. When feasible, introduce process changes iteratively. It is important that you contribute to the handbook by making small pull requests. This will help gain adoption among the process's intended audience. We want to avoid significant process changes that are unnecessarily large, top-down, and disruptive. These types of process changes can disempower DRIs and cause people to focus on process rather than results.
1. Like everything else, our processes are always in flux. Everything is always in draft, and the initial version should be in the handbook, too. If you are proposing a change to the handbook, whenever possible, **skip the issue and submit a pull request**. (Proposing a change via a pull request is preferred over an issue description). Mention the people that are affected by the change in the pull request. In many cases, pull requests are easier to collaborate on since you can see the proposed changes.
1. **If something is a limited test** to a group of users, add it to the handbook and note as such. Then remove the note once the test is over and every case should use the new process.
1. If someone inside or outside GitLab makes a good suggestion invite them to add it to the handbook. Send the person the URL of the relevant page and section and offer to do it for them if they can't. Having them make and send the suggestion will make the change and will reflect their knowledge.
1. When you submit a pull request, make sure that it gets merged quickly. Making single, small changes quickly will ensure your branch doesn't fall far behind master, creating merge conflicts. Aim to make and merge your update on the same day. Mention people in the pull request or reach them via Slack. If you get a suggestion for a large improvement on top of the existing one consider doing that separately. Create an issue, get the existing MR merged, then create a new pull request.
1. If you have to move content have a pull request that moves it and does nothing else. If you want to clean it up, summarize it, or expand on it do that after the moving MR is merged. This is much easier to review.
1. Try to **add the why of a handbook process**, what is the business goal, what is the inspiration for this section. Adding the why makes processes easier to change in the future since you can evaluate if the why changed.

## Style guide and information architecture

### Single Source of Truth

Think about the information architecture to eliminate repetition and have a Single Source of Truth (SSoT). Instead of repeating content cross-link it (each text has a hyperlink to the other piece). If you copy content please remove it at the origin place and replace it with a link to the new content. Duplicate content leads to more work by having to update the content in multiple places as well as the need to remember where all of the out of date content lives. When you have a single source of truth it's only stored in a single system. Make sure to always cross-link items if there are related items (elsewhere in the handbook, in docs, or in issues).

### System of Record

A system of record (SoR) is the authoritative data source for a given data element or piece of information. It's worth noting that while it is possible to have a system of record that is also a single source of truth, simply just being a system of record doesn't directly imply it is the single source of truth.

### Organized by Function and Results

The handbook is **organized by function and result** to ensure every item in it has a location and owner to keep it up to date.

- It's essential that we adhere to this hierarchy and that we not maintain separate structures for company training materials (e.g. onboarding materials, how-tos, etc.), videos, or other documentation.
- Adhering to this hierarchy is sometimes counter-intuitive. We've learned over the years that keeping content in context helps to ensure consistency when making future updates.
- At times, a change of perspective may be desired. In those cases, link to relevant sections of the handbook but don't include the content itself.
- **Avoid unstructured content based on formats like Learning Playbooks, FAQs, lists of links (such as quick links), resource pages, glossaries, courses, videos, tests, processes, standard operating procedure, training, or how-to's**. These are very hard to keep up-to-date and are not compatible with organization per function and result. For example: Call it Contract Negotiation Handbook instead of Contract Negotiation Playbook
- Instead, put the answer, link, definition, course, video, or test in the most relevant place. Use descriptive headings so that people can easily search for content.
- That said, please mix formats where and when appropriate in the handbook, even within a single page. Utilizing multiple formats can be valuable, and different people may prefer certain formats over others.
- Worry only about the organization **per function and result**, not about how the page will look if you embed varying types and formats of content.

### Use headings liberally

If a page includes more than two headings (especially if it's larger than a single "screen"), add an automatically generated Table of Contents (ToC) by copying `{:toc}` (see [this doc](https://pmarsceill.github.io/just-the-docs/docs/navigation-structure/#in-page-navigation-with-table-of-contents)). Headings should have normal capitalization: don't use ALL CAPS or TitleCase). After a heading, leave one blank line; this is not required in the standard, but it is our convention.

## Editing the handbook

Strongly consider learning how to edit the handbook using git and/or via the web IDE. Please read through the Writing Style Guidelines before contributing.

### Fine points

- Keep your handbook pages short and succinct. Eliminate fluff and get right to the point with the shortest possible wording. Keep in mind that the biggest challenge cited by new employees is the vast amount of information to take in during on-boarding.

### Scope of this handbook

The handbook is for things concerning current and future SEF team-members only. If something concerns users of SEF, it should be documented in relevant documentations.

### Handbook First Competency
In an all-remote, asynchronous organization, each team member should practice handbook first. For more information on what it means to be handbook first, please refer to the [why handbook first](#why-handbook-first) section of this page.

**Skills and behaviors of handbook first as a Team Member:**

- Actively contributes to the handbook.
- Everything starts with a pull request
- Provides links information from the handbook when answering questions and if the information doesn't exist in the handbook, then the team member adds it.

**Skills and behaviors of handbook first as a People Leader:**

- Holds their team and others accountable for being handbook first
- Enables new team members and managers on how to leverage the handbook as a resource.
- Serves as a role model for what it means to be handbook first.

## Screenshot the handbook instead of creating a presentation

Presentations are great for ephemeral content like group conversations and board presentations. Evergreen content like a leadership training should be based on the handbook. This is an important element of working handbook-first.

In the creation of presentations for evergreen content, please screenshot the handbook and provide links to displayed pages rather than copy and pasting content (or formatting a slide specifically to mirror handbook information). This approach shows a bias towards asynchronous communication, and rationale for this is below.

1. It saves you the effort of needing to both update the handbook and create content for a presentation; the handbook is checked and improved as part of the preparation instead of extra work
1. The handbook will stay up to date so people don't look at an outdated information in a presentation
1. Seeing screenshots will confirm to people the content is in the handbook and it is up to date there
1. People get used to the structure of the handbook and can more easily find the relevant handbook section later on
1. The content is open for everyone to contribute to when it is in the handbook
1. The content is integrated with the rest of our processes and shown in context
1. Many more people will consume the content on a webpage than a presentation because it is easier to search and link
1. You're helping other organizations and students around the work by giving them an example how we do it
1. Also see some of the [advantages of using our handbook](/organisation/handbook/about#advantages)
1. The presentation will look less polished, but the advantages outweigh that concern.

If a synchronous presentation is required, default to sharing your screen and viewing live handbook pages over a slide presentation.

## Make it worthwhile

To ensure that people's time is well spent looking at the handbook we should follow the [handbook guidelines](#handbook-guidelines) above, and also:

1. Follow the writing style guide
1. Test people on their knowledge during onboarding
1. Give real examples
1. Avoid corporate speak, describe things like you're talking to a friend. For more, see our communications guide on Simple Language.

## Having Trouble Contributing to the Handbook?

If you run into trouble editing the SEF Handbook there are various means of help available.

- Team members, are available to help you create a pull request or debug any problems you might run into while updating the SEF Handbook.
- For more serious problems, especially ones that are time sensitive or prohibiting access to important information, reach out to team members who are on-call to help resolve the problem.





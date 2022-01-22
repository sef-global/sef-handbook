---
sidebar_position: 3
---

# Edit the handbook locally

## Introduction

This is a guide on what you'll need to install and run a local development environment on your machine so you can make
edits locally. This allows you a better overview and preview when making complex changes.

Once you're set up, you will find the source files for the SEF
Handbook [in the sef-handbook repo](https://github.com/sef-global/sef-handbook)

:::tip

When you only need to make small or quick changes, the Web IDE may be easier or faster than the local development
environment.

:::

### Help is available for team members

If you work for SEF, we don't expect you to figure this out by yourself. If you have questions, ask anyone for help or
post in the `#handbook` Slack channel. You're more likely to have success with:

- People that have been here longer than 3 months.
- People that have 'engineer' in their title.

### 1. Start using GitHub

Here's where you can find step-by-step guides on
the [basics of working with Git and GitHub](https://docs.github.com/en/get-started/quickstart). You'll need those later.

### 2. Install Git

1. Open a terminal.
1. Check your Git version by executing: `git --version`.
1. If Git is not installed, you should be prompted to install it. Follow
   this [guide](https://docs.github.com/en/get-started/quickstart/set-up-git) to installing Git and linking your account
   to Git.

### 3. Installing Ruby and Jekyll

For detailed install instructions, follow the guide for your operating system.

- [macOS](https://jekyllrb.com/docs/installation/macos/)
- [Ubuntu](https://jekyllrb.com/docs/installation/ubuntu/)
- [Windows](https://jekyllrb.com/docs/installation/windows/)
- [Other Linux](https://jekyllrb.com/docs/installation/other-linux/)

### 4. Clone the source of the website

There are two ways to clone this repository: ssh or https. You only need to choose one.

#### Clone via SSH

The GitHub documentation covers how to setup SSH keys. If you haven't already done this - or aren't sure - read through
the [GitHub SSH docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh). When you have your SSH
keys [added to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account):

1. In a terminal, execute: `git clone git@github.com:sef-global/sef-handbook.git` to clone the website.

#### Clone via HTTPS

If you prefer using https, then:

1. In a terminal, execute: `git clone https://github.com/sef-global/sef-handbook.git`

#### 5. Preview website changes locally

1. In a terminal, execute:
    1. Change to the directory for your site, for example: `cd sites/sef-handbook`
    1. `bundle exec jekyll serve`
1. Visit [http://localhost:4000](http://localhost:4000) in your browser.

#### 6. Start contributing

Most pages that you might want to edit are written in [markdown](https://www.markdownguide.org/basic-syntax/). Read
through the Markdown Guide to understand its syntax and create new content. Also, reffer
to [Just the Docs UI Components](https://pmarsceill.github.io/just-the-docs/docs/ui-components) for additional stylings.

#### 7. Test if all URL links in a page are valid

A quick way to see if there are any invalid links inside a page is the following

1. Install
   the [check-my-links](https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf/)
   extension in Chrome or the [Broken Link Checker](https://addons.mozilla.org/en-US/firefox/addon/find-broken-links/)
   addon in Firefox.
1. Open the page you wish to preview (see previous step).
1. Click the newly installed extension in the upper right corner of Chrome.

A pop-up window will open and tell you how many links, if any, are invalid. Fix any invalid links and ideally any
warnings.

All internal links (links leading to other parts of the website) should be relative.


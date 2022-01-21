---
sidebar_position: 2
title: Practical Handbook Edits
---

# Practical Handbook Edits Examples

This page contains video recordings and written instructions on how to work Handbook-First for non-engineering team members. In these videos, we walk through the SEF Handbook with experts, learning how to best use the Handbook in our day-to-day work and picking up best practices for Handbook editing along the way. This page contains some examples from GitLab, the company from which we drew inspiration for the SEF handbook. However, we use github to maintain our handbook. Therefore, this page should be updated with current information.

Have your own practical Handbook editing tips? Drop a video below!

## Creating new handbook pages and multimedia embedding best-practices

<iframe width="560" height="315" src="https://www.youtube.com/embed/hQgS97M8abc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Please note that the video mentions that you need to go to `source/handbook` to create a page which is no longer the case. The handbook is located under `_docs`.

## Creating mermaid diagrams

<iframe width="560" height="315" src="https://www.youtube.com/embed/SQ9QmuTHuSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video covers:

- Creating a mermaid diagram for the handbook:
	- Intro to a mermaid diagram
	- What they look like
	- Use cases for using them in the handbook
Note: Flowcharts are universally used to outline the steps of a processes in sequential order. [Every shape or symbol has its own function in a flowchart.](https://www.lucidchart.com/pages/flowchart-symbols-meaning-explained)

## Creating issue templates

<iframe width="560" height="315" src="https://www.youtube.com/embed/ObNWS3trqIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video covers:

- Why you may want to use issue templates - @0:10
- What is an issue template and how to create one - @:54
- How issue templates and boards facilitate workflow management and automation - @3:55



## More Tips
### Pre-requisites
Some tips may require terminal shell access on macOS/Linux. Ensure that your environment is working and that you have cloned the www-gitlab-com project for example.
```
git clone https://github.com/sef-global/handbook.git
```
Sync it. Ensure that you stash away local changed not yet committed.

```
cd handbook
git stash
git checkout master
git pull
```
On macOS it is advised to use Homebrew and install the GNU tools. See [this blogpost](https://about.gitlab.com/blog/2020/04/17/dotfiles-document-and-automate-your-macbook-setup/) for a macOS setup.

```
brew install gnu-sed
```

### Find files
One of the shell tools provided with macOS/Linux GNU is `find`. Open a terminal an run the following command in the main directory of the `handbook` repository to get a list of all *.md files. This matches .md as suffix.
```
find . -type f -name '*.md'
```
Instead of the `.` you can also use a directory in the current path.
```
find source/handbook -type f -name '*.md'
```
The type `f` specifies files, `d` matches for directories. When not specified, all files and directories are taken into account.
You can replace `-name` with `-regex` to do more sensitive matching, for example to match all `.md` and `.md.erb` files.
```
find . -type f -regex '.*\.md[.erb]*'
```

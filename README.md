# Metanthropes RPG

![Foundry v10](https://img.shields.io/badge/foundry-v10-green)

This is the official Metanthropes RPG system for Foundry VTT.

## Based off asacolips boilerplate template for Foundry VTT.

For the original work please check out https://gitlab.com/asacolips-projects/foundry-mods/boilerplate
Using this as a template for Metanthropes RPG as we learn the ropes of FoundryVTT

### Tutorial

For much more information on how to use this system as a starting point for making your own, see the [full tutorial on the Foundry Wiki](https://foundryvtt.wiki/en/development/guides/SD-tutorial)!

## Sheet Layout

This system includes a handful of helper CSS classes to help you lay out your sheets if you're not comfortable diving into CSS fully. Those are:

* `flexcol`: Included by Foundry itself, this lays out the child elements of whatever element you place this on vertically.
* `flexrow`: Included by Foundry itself, this lays out the child elements of whatever element you place this on horizontally.
* `flex-center`: When used on something that's using flexrow or flexcol, this will center the items and text.
* `flex-between`: When used on something that's using flexrow or flexcol, this will attempt to place space between the items. Similar to "justify" in word processors.
* `flex-group-center`: Add a border, padding, and center all items.
* `flex-group-left`: Add a border, padding, and left align all items.
* `flex-group-right`: Add a border, padding, and right align all items.
* `grid`: When combined with the `grid-Ncol` classes, this will lay out child elements in a grid.
* `grid-Ncol`: Replace `N` with any number from 1-12, such as `grid-3col`. When combined with `grid`, this will layout child elements in a grid with a number of columns equal to the number specified.

## Compiling the CSS

This repo includes both CSS for the theme and SCSS source files. If you're new to CSS, it's probably easier to just work in those files directly and delete the SCSS directory. If you're interested in using a CSS preprocessor to add support for nesting, variables, and more, you can run `npm install` in this directory to install the dependencies for the scss compiler. After that, just run `npm run gulp` to compile the SCSS and start a process that watches for new changes.

![image](http://mattsmith.in/images/boilerplate.png)

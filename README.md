conformGridHeights.js
====================

jQuery plugin to conform grid item heights

## Usage

    $('.selector').conformGridHeight({
        'selector': '> li'
    });

## Wait for Images

If there will be images used in the grid, make sure it's wrapped with a $(window).load()

## Window resizing

If this is used in a responsive context, it will need to be wrapped with a resize event.  It will be best to use something like <a href="http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/">Paul Irish's Debounced Resize plugin</a> so the events don't bubble up.

So for the best usage including window resizing and image loading:

    $(window).load(function() {
        $(this).smartresize(function() {
           $('.selector').data('conformGridHeight').resize(); 
        });
    });

## Demo

http://degdigital.github.io/conform-grid-heights/

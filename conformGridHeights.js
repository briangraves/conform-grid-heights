/*
 * conform grid item heights
 * http://github.com/degdigital/conform-grid-heights
 * conformGridHeights.js
 */

(function($, pluginName) {

    function ConformGridHeight(element, options) {

        var defaults = {
            'selector': ' > li'
        };

        var settings = jQuery.extend(true, defaults, options),
            publicMethods = {};


        publicMethods['resize'] = function() {
            var positionLookup = {};

            $(settings.selector, element).each(function() {
                var $element = $(this);
                var topPosition = $element.position().top;

                $element.css("height", "auto");

                var data = {
                    element: $element,
                    height: $element.height()
                }

                if ( positionLookup[topPosition] )
                    positionLookup[topPosition].push(data);
                else
                    positionLookup[topPosition] = [data];
            });

            for ( var pos in positionLookup ) {
                var items = positionLookup[pos];
                var largestHeight = getLargestHeight(items);
                for ( var i = 0; i < items.length; i++)
                    items[i].element.height(largestHeight);
            }
        }

        publicMethods.resize();

        function getLargestHeight(items) {

            var height = 0;

            for ( var i = 0; i < items.length; i++)
                if ( items[i].height > height )
                    height = items[i].height;

            return height;
        }

        return publicMethods;
    }

    $.fn[pluginName] = function(args) {
        return this.each(function(){
            if (undefined == $(this).data(pluginName)) {
                var plugin = new ConformGridHeight(this, args);
                $(this).data(pluginName, plugin);
            }
        });
    };

})(jQuery, 'conformGridHeight');


var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (

            /* Some other small changes here and adding some new cool things */

            '{{#.}}' +  
                '<article class="col-md-4 col-sm-6 reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>'
                    + '</a>' +
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h3 class="reports_title">' +
                                '<a href="{{url}}" target="_blank">{{title}} '  + '<span> ({{file_size}})</span>'  + '</a>' +
                            '</h3>' +
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' + 
            '{{/.}}'
        )
    },

    init: function() {
        this.renderReports(reportData || []);
    },

    renderReports: function(reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();
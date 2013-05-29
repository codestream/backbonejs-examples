(function ($) {
    var Company = Backbone.Model.extend({
        defaults: {
            employeeNames: ["Petr", "Pavel", "Olga", "Kate"]
        }
    });

    var company = new Company();

    var CompanyEmployees = Backbone.View.extend({
        el: $('body'),

        initialize: function () {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function(){
            for(var i = 0; i < company.defaults.employeeNames.length; i++){
                $(this.el).append("<ul> <li> " + company.defaults.employeeNames[i] + "</li> </ul>");
            }
        }
    });

    var employees = new CompanyEmployees();
})(jQuery);

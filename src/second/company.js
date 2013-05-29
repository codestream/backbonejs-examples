(function ($) {

    var BaseCompany = function (name) {

        this.employeeNames = function () {
            return "";
        }
    };

    var ConcreteCompany = new BaseCompany("some company");

    ConcreteCompany.employeeNames = function () {
        var names = ["Petr", "Pavel", "Olga", "Kate"];

        var currentEmployeeNames = [];

        for (var i = 0; i < names.length - 1; i++) {
            currentEmployeeNames.push(names[i]);
        }

        return currentEmployeeNames;
    };

    var EmployeeModel = Backbone.Model.extend({
        names: {
            employeeNames: ConcreteCompany.employeeNames()
        }
    });

    var employee = new EmployeeModel();

    var EmployeeView = Backbone.View.extend({
        el: $('body'),

        initialize: function () {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function () {
            for (var i = 0; i < employee.names.employeeNames.length; i++) {
                $(this.el).append("<ul> <li> " + employee.names.employeeNames[i] + "</li> </ul>");
            }
        }
    });

    var employeeView = new EmployeeView();
})(jQuery);
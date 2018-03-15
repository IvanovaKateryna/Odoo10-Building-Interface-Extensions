odoo.define('oepetstore.petstore', function (require) {
    "use strict";
    var Class = require('web.Class');
    var Widget = require('web.Widget');
    var core = require('web.core');
    var Model = require('web.Model');
    var data = require('web.data');
    var utils = require('web.utils');
    var QWeb = core.qweb;
    var _t = core._t;
    var _lt = core._lt;


    var HomePage = Widget.extend({
        template: "HomePage",
        start: function () {
            return new MessageOfTheDay(this).appendTo(this.$el);
        },
    });

    core.action_registry.add('petstore.homepage', HomePage);

    var MessageOfTheDay = Widget.extend({
         template: "MessageOfTheDay",
         start: function() {
             var self = this;
             return new Model("oepetstore.message_of_the_day")
                 .query(["message"])
                 .order_by('-create_date', '-id')
                 .first()
                 .then(function(result) {
                     self.$(".oe_mywidget_message_of_the_day").text(result.message);
                 });
         },
     });
})

exports.install = function(framework) {
    framework.route('/admin/', view_index);
};

function view_index() {
    var self = this;
    self.view('index');
}
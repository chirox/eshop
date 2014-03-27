// Product schema
builders.schema('product', { id: 'string',
                             category: 'string',
                             picture: 'string',
                             name: 'string',
                             link: 'string',
                             description: 'string',
                             price: 'number',
                             flags: '[]',
                             created: 'date' });


function Shop(database) {
    this.db = database;
}

/*
    Description: Create/Update product
*/
Shop.prototype.save = function(product, callback) {
    var self = this;
    self.db.save('save', 'product', product, callback);
    return self;
};

/*
    Description: Remove product
*/
Shop.prototype.remove = function(product) {
    var self = this;
    self.db.remove('remove', 'product', product, callback);
    return self;
};

/*
    Description: Find products
*/
Shop.prototype.find = function(filter, callback) {
    var self = this;
    self.db.find('find', 'product', filter, callback);
    return self;
};


/*
    filter = {

        id: [];                 read all products by id

    }
*/
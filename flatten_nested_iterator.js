var NestedIterator = function(nestedList) {
    this.index = -1;
    this.nestedList = this.flatten(nestedList);
};

NestedIterator.prototype.hasNext = function() {
    return (this.index < this.nestedList.length - 1);  
};

NestedIterator.prototype.flatten = function(nestedList) {
    let result = []
    nestedList.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(this.flatten(item));
        } else {
            result.push(item);
        }
    });
    return result;
};

NestedIterator.prototype.next = function(item) {
    this.index += 1;
    return this.nestedList[this.index];
}

let nestedList = [[1,1],2,[1,1]];

 //Your NestedIterator will be called like this:
 var i = new NestedIterator(nestedList), a = [];
 while (i.hasNext()) a.push(i.next());

 console.log('a: ', a);
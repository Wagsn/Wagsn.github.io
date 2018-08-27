function inherits(child, parent) {
    var F = function () {};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
}

/**
 * Object
 */
Object.defineProperty(Object.prototype, 'extends', {
    value: function (parent) {
        inherits(this, parent);
    }
})
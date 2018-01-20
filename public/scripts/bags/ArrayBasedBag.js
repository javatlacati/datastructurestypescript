"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayBasedBag = /** @class */ (function () {
    /**
     * Constructs instances of bag class.
     *
     * @param capacity number of elements that this bag can hold.
     */
    function ArrayBasedBag(capacity) {
        this.internalArray = new Array(capacity);
        this.topPosition = 0;
    }
    /**
     * {@inheritDoc}
     */
    ArrayBasedBag.prototype.add = function (item) {
        if (this.internalArray.length > this.topPosition) {
            this.internalArray[this.topPosition++] = item;
        }
        else {
            throw new RangeError("Capacity overflow");
        }
    };
    /**
     * indexes are 0 based
     */
    ArrayBasedBag.prototype.getAtIndex = function (index) {
        return this.internalArray[index];
    };
    /**
     * {@inheritDoc}
     */
    ArrayBasedBag.prototype.isEmpty = function () {
        return this.topPosition == 0;
    };
    /**
     * {@inheritDoc}
     */
    ArrayBasedBag.prototype.disposeItems = function () {
        this.internalArray = this.internalArray = new Array(this.internalArray.length);
        this.topPosition = 0;
    };
    /**
     * {@inheritDoc}
     */
    ArrayBasedBag.prototype.size = function () {
        return this.topPosition;
    };
    /**
     * {@inheritDoc}
     * This method performs a lineal search.
     */
    ArrayBasedBag.prototype.find = function (target) {
        var index = this.internalArray.indexOf(target);
        return index === -1 ? null : this.internalArray[index];
    };
    //    get capacity(): Number {
    //        return this._capacity;
    //    }
    //
    //    set capacity(value: Number) {
    //        this._capacity = value;
    //    }
    ArrayBasedBag.prototype.toArray = function () {
        return this.internalArray.slice(0, this.topPosition);
    };
    return ArrayBasedBag;
}());
exports.ArrayBasedBag = ArrayBasedBag;

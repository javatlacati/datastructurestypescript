"use strict";
/*
 * Copyright (C) 2017 root
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var bags_1 = require("../../scripts/bags/bags");
var Chai = require("chai");
describe('Basic tests', function () {
    var arrayBasedBag;
    beforeEach(function () {
        arrayBasedBag = new bags_1.bags.ArrayBasedBag(5);
    });
    it('isEmpty test', function () {
        var result = arrayBasedBag.size();
        Chai.expect(result).to.equal(0);
    });
    it('add test', function () {
        arrayBasedBag.add("asd");
        var result = arrayBasedBag.size();
        Chai.expect(result).to.equal(1);
    });
    it('iterator test', function () {
        var expected = "holamundo";
        arrayBasedBag.add("hola");
        arrayBasedBag.add("mundo");
        var actual = "";
        //es5 doesn-t support iterators so we convert to aray to iterate
        for (var _i = 0, _a = arrayBasedBag.toArray(); _i < _a.length; _i++) {
            var el = _a[_i];
            actual += el;
        }
        Chai.expect(expected).to.equal(actual.toString());
    });
    it('disposeItems test', function () {
        for (var i = 0; i < 5; i++) {
            arrayBasedBag.add(i + "");
        }
        Chai.expect(5).to.equal(arrayBasedBag.size());
        arrayBasedBag.disposeItems();
        Chai.expect(0).to.equal(arrayBasedBag.size());
    });
    it('forEach test', function () {
        arrayBasedBag.add("hola");
        arrayBasedBag.add("mundo");
        var list = new Array(2);
        console.log("es5 doesn't support iterators");
        // list.push(...arrayBasedBag);
        // arrayBasedBag.each(e->list.push(e));
        // Chai.expect(2).to.equal(list.length);
        // Chai.expect(list[0]).to.equal(arrayBasedBag.getAtIndex(0));
        // Chai.expect(list[1]).to.equal(arrayBasedBag.getAtIndex(1));
    });
});

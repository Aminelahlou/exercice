const index = require('../index')
const should = require('chai').should()
describe('index', function() {
	describe('add', function() {
		const add = index.add
		it('should return 0 when it adds 0 and 0', function() {
			add(0, 0).should.equal(0)
		});
		it('should return 1 when it adds 0 and 1', function() {
			add(0, 1).should.equal(1)
		});
		it('should return -1 when it adds -1 and 0', function() {
			add(-1, 0).should.equal(-1)
		});
		it('should return 0 when it adds -1 and 1', function() {
			add(-1, 1).should.equal(0)
		});
		it('should return -1 when it adds -2 and 1', function() {
			add(-2, 1).should.equal(-1)
		});
		it('should return 1 when it adds 2 and -1', function() {
			add(2, -1).should.equal(1)
		});
		it('should throw :"added null or undefined" when it adds null with 1', function() {
			(() => {add(null, 1)}).should.throw(Error, "added null or undefined")
		});
		it('should throw :"added null or undefined" when it adds undefined with 1', function() {
			(() => {add(undefined, 1)}).should.throw(Error, "added null or undefined")
		});
		it('should throw :"added null or undefined" when it adds null with -1', function() {
			(() => {add(null, -1)}).should.throw(Error, "added null or undefined")
		});
		it('should throw :"added null or undefined" when it adds undefined with -1', function() {
			(() => {add(undefined, -1)}).should.throw(Error, "added null or undefined")
		});
		it('should throw :"added null or undefined" when it adds null with 0', function() {
			(() => {add(null, 0)}).should.throw(Error, "added null or undefined")
		});
		it('should throw :"added null or undefined" when it adds undefined with 0', function() {
			(() => {add(undefined, 0)}).should.throw(Error, "added null or undefined")
		});
		it('should throw :"added null or undefined" when it adds null with {}', function() {
			(() => {add(null, {})}).should.throw(Error, "added null or undefined")
		});
		it('should throw :"added null or undefined" when it adds undefined with {}', function() {
			(() => {add(undefined, {})}).should.throw(Error, "added null or undefined")
		});
		it('should throw :"added non numbers" when it adds 1 with {}', function() {
			(() => {add(1, {})}).should.throw(Error, "added non numbers")
		});
		it('should throw :"added non numbers" when it adds 1 with \'\'', function() {
			(() => {add(1, '')}).should.throw(Error, "added non numbers")
		});
	});
});

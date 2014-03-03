var should = require('chai').should,
    expect = require('chai').expect,
    app = require('../app/scripts/game');

describe('The regexp game', function(){
  before(function(){
    // ...
  });

  it('Should have the app', function(){
    expect(app).not.to.be.null;
  });

  it('Should have a evaluate entry point', function(){
    expect(app.evaluate).to.not.be.null;
    expect(app.evaluate).to.be.a('function');
  });

  
});
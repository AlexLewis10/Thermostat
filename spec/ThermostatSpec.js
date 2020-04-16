describe('Thermostat', function() { 
var thermostat; 

beforeEach(function() {  
  thermostat  = new Thermostat(20);
});

describe( 'temperature to start at 20', function(){
  it('returns 20', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });
});

describe( 'increases the temperature', function() {
  it('returns 22', function() {
    expect(thermostat.upTemperature(2)).toEqual(22);
  });
});

describe('decreases the temperature', function() {
  it('returns 17', function() {
  expect(thermostat.downTemperature(3)).toEqual(17) 
  });
})

describe('the minimum temperature is 10', function(){
  it('does not go beyond 10', function(){
    expect(thermostat.downTemperature(11)).toEqual(10)
  });
})

describe('the maximum default tempatrure is 25', function(){
  it('does not go beyond 25', function(){
    expect(thermostat.upTemperature(6)).toEqual(25)
  })
})

describe('power saving mode is on', function() {
  it('returns on', function() {
    expect(thermostat.powerModeStatus()).toEqual('on')
  })
})

describe('can switch power saving mode off', function() {
  it('returns off', function() {
    thermostat.powerModeOff()
    expect(thermostat.powerModeStatus()).toEqual('off')
  })
})

describe('can switch power saving mode on again', function() {
  it('power mode is on', function() {
    thermostat.powerModeOff()
    expect(thermostat.powerModeStatus()).toEqual('off')
    thermostat.powerModeOn()
    expect(thermostat.powerModeOn()).toEqual('on')
  })
})

describe('when power saving mode is off max temperature is 32', function() {
  it('temperature cannot go higher than 32', function() {
    thermostat.powerModeOff()
    expect(thermostat.upTemperature(15)).toEqual(32)
  })
})

describe('can reset the temperature to 20', function() {
  it('getTemperature returns 20', function() {
    thermostat.resetTemperature()
    expect(thermostat.getTemperature()).toEqual(20)
  })
})


}); 



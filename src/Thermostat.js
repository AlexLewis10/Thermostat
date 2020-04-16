const MaxTemperature = 25
const MinTemperature = 10


function Thermostat(temperature, powerMode='on') {
  this.temperature = temperature
  this.powerMode = powerMode
};

Thermostat.prototype.getTemperature = function() {
  return this.temperature
};

Thermostat.prototype.upTemperature = function(number) {
  if ((this.temperature + number) > MaxTemperature) {
    return MaxTemperature
  } else {
    return this.temperature + number
  }
}

Thermostat.prototype.downTemperature = function(number) {
  if ((this.temperature - number) < MinTemperature) {
    return MinTemperature
  } else {
    return this.temperature - number
  }
}

Thermostat.prototype.powerModeStatus = function() {
  return this.powerMode
}

Thermostat.prototype.powerModeOff = function() {
  return this.powerMode = 'off'
}

Thermostat.prototype.powerModeOn = function() {
  return this.powerMode = 'on'
}
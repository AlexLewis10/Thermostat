const MaxTemperature = 25
const MaxTempPowerSaveOff = 32
const MinTemperature = 10


function Thermostat(temperature, powerMode='on') {
  this.temperature = temperature
  this.powerMode = powerMode
};

Thermostat.prototype.getTemperature = function() {
  return this.temperature
};

Thermostat.prototype.upTemperature = function(number) {
  if ((this.powerMode === 'off') && ((this.temperature + number) > MaxTempPowerSaveOff)) {
    return this.temperature = MaxTempPowerSaveOff
  } else if ((this.powerMode === 'off') && ((this.temperature + number) < MaxTempPowerSaveOff)) { 
    return this.temperature = this.temperature + number
  } else if ((this.temperature + number) > MaxTemperature) {
    return this.temperature = MaxTemperature
  } else {
    return this.temperature = this.temperature + number
  }
}

Thermostat.prototype.downTemperature = function(number) {
  if ((this.temperature - number) < MinTemperature) {
    return this.temperature = MinTemperature
  } else {
    return this.temperature = this.temperature - number
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
'use strict'

var adcpi = require('./lib/adcpi/adcpi');
var adc = new ADCPi(0x68, 0x69, 18);

module.exports = adc

import React, { useState, useEffect } from 'react';
import './modules/App.css';
import getWeather from './modules/weatherAPI/getWeather';
import getLocation from './modules/weatherAPI/getLocation';
import getTemperature from './modules/weatherAPI/getTemperature';
import SearchBar from './modules/hooks/SearchBar';
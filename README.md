[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)


# simple-date-card
A text based simple date for people who use homeassistant on a panel

Based on https://github.com/arjhun/Homeassistant-Lovelace-Cards @arjhun


![24h clock](https://i.imgur.com/n37gyxZ.png)  

![military without seconds](https://i.imgur.com/ej4AFO3.png)

# Installation:
Follow only one of these installation methods.

<details>
  <summary><b>Installation and tracking with HACS:</b></summary>

1. You can install this custom component by adding this repository (https://github.com/fufar/simple-clock-card) to HACS in the settings menu of HACS first. You will find the custom component in the integration menu afterwards, look for 'Simple date Card'.

2. Set the lovelace panel
</details>

<details>
  <summary><b>Manual installation:</b></summary>

1. Copy simple-date-card.js into your 'www' folder in the hass config directory. The *'www'* folder can be accesed via *'/local/'* in your configuration I've put my custom elements in the sub folder *'elements'* and the js file of this card in the folder *'simple-date-card'* as an example.
2. Enable advanced mode and in your lovelace dashboard settings
3. Add a resource ![add a resource](https://i.imgur.com/pySUU4V.png)

   or if you use yaml to configure lovelace:

		resources:
			- type: module
	        	  url: /hacsfiles/elements/simple-date-card/simple-date-card.js
4. Set the lovelace panel
</details>


# Set lovelace panel

Add the following lines to a view in '*cards:*' as a *'manual card'* or use your yaml configuration and add:

		- type: 'custom:simple-date-card'

## Options
|option| default|description|
|--|--|--|
|  use_millitary| true| When true shows a 24h format clock instead of a 12h format clock with AM/ PM|
|  hide_seconds| false| When true hides the seconds
|  font_size| 4rem| Size of the font in rem. Units of measurement is required|
|  padding_size| 32px| Size of the lovelace field in px. Units of measurement is required|

## Example
- show a 24h clock with seconds:

		- type: 'custom:simple-date-card'
		  use_military: true
		  hide_seconds: false
		  font_size: 6rem
		  padding_size: 32px

Original author: github.com/arjhun

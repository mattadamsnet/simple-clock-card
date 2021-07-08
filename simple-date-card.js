class SimpleDateCard extends HTMLElement {

	set hass(hass) {

		if (!this.content) {
			var config = this.config;
			const card = document.createElement('HA-card');
			this.content = document.createElement('div');
			this.content.style.padding = this.config.padding_size ? this.config.padding_size : '16px';
			this.content.style.fontSize = this.config.font_size ? this.config.font_size : '4rem' ;
			this.style.textAlign = 'center';
			this.content.style.display = 'inline-block';
			card.appendChild(this.content);
			this.appendChild(card);
			var content = this.content;
			startTime();
			setInterval(startTime, 1000);
	
			function addZero(i){
				if (i < 10){
					i = "0" + i;
				}
				return i;
			}

			function startTime() {
		
				

				
				
var now = new Date();

var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');

var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();

function fourdigits(number)  {
	return (number < 1000) ? number + 1900 : number;
								}
let time_str =  days[now.getDay()] + ", " +
         months[now.getMonth()] + " " +
         date + ", " +
         (fourdigits(now.getYear())) ;
				
				
				content.innerHTML = time_str;
				
				
				
			}
		}
	}

    setConfig(config) {
        this.config = config;
    }

    getCardSize() {
        return 1;
    }
}

customElements.define('simple-date-card', SimpleDateCard);

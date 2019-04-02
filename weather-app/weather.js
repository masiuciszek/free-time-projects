class Weather {
    constructor(city, state) {
      this.apiKey = '99dfe35fcb7de1ee';
      this.city = city;
      this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
      const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

      const responseData = await response.json();

      return responseData.current_observation;
    }

    // Change weather location
    changeLocation(city, state) {
      this.city = city;
      this.state = state;
    }
  }


//   a37b9cccecf99c7adac7f2632bd5c0f2

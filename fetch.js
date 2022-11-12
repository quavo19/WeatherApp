class Fetch {
  async getCurrent(input) {
    const myKey = "2084166d8310efe7a8f65b8029917bb7";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}

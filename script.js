const axios = require("axios");

const ip = "192.168.0.1";
const ports = [25565, 25566, 25567, 25568, 25569];

async function updateStatus() {
  for (const port of ports) {
    const response = await axios.get(`http://${ip}:${port}`);
    console.log(`Server${port - 25564}: ${response.status === 200 ? "Online" : "Offline"}`);
  }
}

updateStatus();
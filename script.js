const ip = "saltygaming.no";
const ports = [25565, 25566, 25567, 25568, 25569];

async function updateStatus() {
  for (const port of ports) {
    const response = await fetch(`http://${ip}:${port}`);
    document.getElementById(`server${port - 25564}`).innerHTML =
      response.status === 200 ? "Online" : "Offline";
    document.getElementById(`server${port - 25564}`).className =
      response.status === 200 ? "online" : "offline";
  }
}

updateStatus();
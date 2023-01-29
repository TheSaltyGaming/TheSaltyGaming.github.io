const servers = [
  { id: "server1", name: "Server 1", ip: "saltygaming.no:25565" },
  { id: "server2", name: "Server 2", ip: "saltygaming.no:25566" },
  { id: "server3", name: "Server 3", ip: "saltygaming.no:25567" },
  { id: "server4", name: "Server 4", ip: "saltygaming.no:25568" },
  { id: "server5", name: "Server 5", ip: "saltygaming.no:25569" }
];

async function updateStatus() {
  for (const server of servers) {
    const response = await fetch(
      `https://api.mcsrvstat.us/2/${server.ip}`
    );
    const data = await response.json();
    document.getElementById(server.id).innerHTML = data.online
      ? "Online"
      : "Offline";
    document.getElementById(server.id).className = data.online
      ? "online"
      : "offline";
  }
}

updateStatus();
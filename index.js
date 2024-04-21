const dgram = require("node:dgram");
const dnsPacket = require("dns-packet");
const server = dgram.createSocket("udp4");
server.on("message", (msg, rinfo) => {
  const incomingRequest = dnsPacket.decode(msg);
  console.log("hii");
  console.log({
    questions: incomingRequest.questions,
    rinfo,
  });
});
server.bind(53, () => console.log("Dns Server is runing on port 53"));

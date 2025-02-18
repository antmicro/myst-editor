import { Transport } from "@open-rpc/client-js/src/transports/Transport";
import { getNotifications } from "@open-rpc/client-js/src/Request";

export default class PostMessageWorkerTransport extends Transport {
  constructor(worker) {
    super();
    this.worker = worker;
    this.postMessageID = `post-message-transport-${Math.random()}`;
  }

  messageHandler = (ev) => {
    this.transportRequestManager.resolveResponse(JSON.stringify(ev.data));
  };

  connect() {
    return new Promise((resolve) => {
      this.worker.addEventListener("message", this.messageHandler);
      resolve();
    });
  }

  async sendData(data) {
    const prom = this.transportRequestManager.addRequest(data, null);
    const notifications = getNotifications(data);
    if (this.worker) {
      this.worker.postMessage(data.request);
      this.transportRequestManager.settlePendingRequest(notifications);
    }
    return prom;
  }

  close() {
    this.worker.terminate();
  }
}

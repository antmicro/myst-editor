import { Component } from "preact";
import { MystState } from "../mystState";

// There doesn't seem to be a functional component equivalent to this in Preact
// https://preactjs.com/tutorial/09-error-handling/?solved
class ErrorBoundary extends Component {
  static contextType = MystState;

  componentDidCatch(err) {
    if (this.context.error.value) return;
    this.context.error.value = { src: "ErrorBoundary", error: err };
    console.error(err);
  }

  render() {
    if (this.context.error.value) {
      return null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

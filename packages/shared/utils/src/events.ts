const dispatchEvent = (event: string, data?: unknown): boolean =>
  window.dispatchEvent(new CustomEvent(event, { detail: data }));

export default dispatchEvent;

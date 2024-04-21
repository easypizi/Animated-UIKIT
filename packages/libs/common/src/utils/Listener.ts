export type ListenerHandler<T = unknown> = (
  data: T,
  event?: string,
) => void | Promise<void>;

export type ListenerUnsubscriber = () => void;
export interface ListenerEventMap {}

export class Listener<
  EventMap extends ListenerEventMap = ListenerEventMap & {
    [key: string]: unknown;
  },
> {
  static offCompose(
    unsubscribers: Array<ListenerUnsubscriber>,
  ): ListenerUnsubscriber {
    return () => {
      unsubscribers.forEach((x) => {
        if (typeof x === 'function') {
          x();
        }
      });
    };
  }

  private eventHandlers: {
    [EventType in keyof EventMap]?: Array<ListenerHandler<EventMap[EventType]>>;
  } = {};

  clearEventHanlders() {
    this.eventHandlers = {};
  }

  on<EventType extends keyof EventMap>(
    event: EventType,
    handler: ListenerHandler<EventMap[EventType]>,
  ): ListenerUnsubscriber {
    if (!(event in this.eventHandlers)) {
      this.eventHandlers[event] = [];
    }

    this.eventHandlers[event]?.push(handler);

    return () => {
      this.off(event, handler);
    };
  }

  off<EventType extends keyof EventMap>(
    event: EventType,
    handler: ListenerHandler<EventMap[EventType]>,
  ) {
    if (!(event in this.eventHandlers)) {
      return;
    }

    this.eventHandlers[event] = this.eventHandlers[event]?.filter(
      (x) => x !== handler,
    );
  }

  trigger<EventType extends keyof EventMap>(
    event: EventType,
    data: EventMap[EventType],
  ): void {
    if (event in this.eventHandlers) {
      this.eventHandlers[event]?.forEach((handler) => {
        handler(data, event as string);
      });
    }
  }

  async triggerAwait<EventType extends keyof EventMap>(
    event: EventType,
    data: EventMap[EventType],
  ): Promise<void> {
    const promises: Array<Promise<void>> = [];
    if (event in this.eventHandlers) {
      this.eventHandlers[event]?.forEach((handler) => {
        const res = handler(data, event as string);
        if (res instanceof Promise) {
          promises.push(res);
        }
      });
    }

    if (promises.length > 0) {
      try {
        await Promise.all(promises);
      } catch (e) {
        // pass
      }
    }
  }
}

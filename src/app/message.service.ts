import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];
  showMessagePanel: boolean;

  constructor() {
    this.showMessagePanel = true;
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  // Normally I'd put these next three functions in the Message Component;
  // but in this case I want option control the panel visibility via the service.
  // So the Message component will track this.showMessagePanel in this service
  messagePanelIsVisble(): boolean {
    return this.showMessagePanel;
  }
  closeMessagePanel(): void {
    this.showMessagePanel = false;
  }
  openMessagePanel(): void {
    this.showMessagePanel = true;
  }
}
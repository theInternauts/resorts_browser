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
  messagePanelIsVisble(): boolean {
    return this.showMessagePanel;
  }
  closeMessagePanel(): boolean {
    return this.showMessagePanel = false;
  }
  openMessagePanel(): boolean {
    return this.showMessagePanel = true;
  }
}
import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import * as SockJS from 'sockjs-client';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: {
    connect: (arg0: {}, arg1: (frame: any) => void) => void;
    subscribe: (arg0: string, arg1: (message: { body: string; }) => void) => void;
    send: (arg0: string, arg1: {}, arg2: string) => void;
  } | undefined;
  public messages: Subject<any> = new Subject();

  constructor() {
    this.connect();
  }

  connect() {

  }

  sendMessage(message: { senderId: number | undefined; recipientId: number | undefined; content: string | undefined; }) {
    // @ts-ignore
    this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(message));
  }
}

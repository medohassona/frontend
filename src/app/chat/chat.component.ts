import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WebSocketService} from "../services/websocket.service";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: any[] = [];
  messageContent: string | undefined;
  userId: number | undefined;

  constructor(private route: ActivatedRoute, private webSocketService: WebSocketService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
    });
    this.webSocketService.messages.subscribe((message) => {
      // @ts-ignore
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.webSocketService.sendMessage({
      senderId: this.userId,
      recipientId: this.userId, // This should be the recipient ID
      content: this.messageContent
    });
    this.messageContent = '';
  }
}

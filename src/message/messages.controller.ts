import { Controller, Post, Body } from '@nestjs/common';

import { CreateMessageDto } from '../messages/dtos/create-message.dto'

@Controller('messages')

export class MessagesController {
	@Post()

	createMessage(@Body() body: CreateMessageDto){
	
		console.log(body);
	}
}

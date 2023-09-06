'use client'

import { Conversation } from '@prisma/client'
import React, { FC } from 'react'

interface ConversationListProps{
    initialItems:Conversation[];
}

const ConversationList: FC<ConversationListProps> = ({initialItems}) => {
  return (
    <div>ConversationList</div>
  )
}

export default ConversationList
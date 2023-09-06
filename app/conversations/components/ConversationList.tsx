'use client'

import { FullConversationType } from '@/app/types';
import React, { FC } from 'react'

interface ConversationListProps{
    initialItems:FullConversationType[];
}

const ConversationList: FC<ConversationListProps> = ({initialItems}) => {
  return (
    <div>ConversationList</div>
  )
}

export default ConversationList
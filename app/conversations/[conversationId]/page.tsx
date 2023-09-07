import React from 'react'

interface IParams {
    conversationId:string;
}

const ConversationId = async({params}:{params:IParams}) => {
  return (
    <div>ConversationId:{params.conversationId}</div>
  )
}

export default ConversationId
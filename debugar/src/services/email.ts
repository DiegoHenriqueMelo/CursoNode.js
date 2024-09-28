async function getBaseEmail(senderName: string): Promise<string> {
  let base = `Olá ${senderName}, gostaria de me inscrever para uma vaga`;

  base+= "\n estou deixando meu curriculum"; 
  
  return base;
}

export { getBaseEmail };

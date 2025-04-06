// netlify/functions/block-html.js
exports.handler = async function(event, context) {
  const path = event.path;  // Pega o caminho solicitado

  // Verifica se a requisição é para um arquivo estático (imagem, js, css, etc)
  // Aqui vamos garantir que se for um arquivo estático (não HTML), vamos bloquear.
  if (path.match(/\.(jpg|jpeg|png|gif|svg|webp|js|css|pdf)$/i)) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
      body: '<html><head><title>Boa tentativa diddy</title></head><body><h1>Boa tentativa diddy</h1></body></html>',
    };
  }

  // Para qualquer outro arquivo (HTML ou outros tipos), permite que seja servido normalmente.
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: '<html><head><title>Boa tentativa diddy</title></head><body><h1>Boa tentativa diddy</h1></body></html>',
  };
};

// netlify/functions/block-html.js
exports.handler = async function(event, context) {
  const path = event.path;  // Pega o caminho solicitado

  // Verifica se o arquivo solicitado é uma imagem
  if (path.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) {
    // Se for uma imagem, devolve a imagem normalmente (ajuste conforme necessário)
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/jpeg',  // Altere conforme o tipo da imagem
      },
      body: 'AQUI VAI O CONTEÚDO DA IMAGEM', // Aqui você pode retornar o conteúdo binário da imagem.
    };
  }

  // Para qualquer outro arquivo (HTML, JS, CSS, etc), devolve um HTML vazio com a mensagem
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: '<html><head><title>Boa tentativa diddy</title></head><body><h1>Boa tentativa diddy</h1></body></html>',
  };
};

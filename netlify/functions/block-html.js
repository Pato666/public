exports.handler = async (event, context) => {
  const path = event.path;

  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const isImage = allowedExtensions.some(ext => path.endsWith(ext));

  if (path === '/index.html' || !isImage) {
    return {
      statusCode: 403,
      body: 'Acesso negado a páginas HTML.',
    };
  }

  return {
    statusCode: 200,
    body: 'Acesso permitido.',
  };
};

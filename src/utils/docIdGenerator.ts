export function generateDocId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let docId = '';

  for (let i = 0; i < 20; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    docId += chars[randomIndex];
  }

  return docId;
}

export async function onRequestGet() {
  return Response.json({
    ok: true,
    message: "API do laboratorio funcionando."
  });
}

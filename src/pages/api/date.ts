export default async function getDate(req, res) { 
  return res.status(200).json({date: Date.now()})
}

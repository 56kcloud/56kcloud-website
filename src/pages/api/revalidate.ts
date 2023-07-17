export default async function revalidate(req, res) {
  try {
    res.revalidate('/[lang]')
    return res.status(200).json({success: true})
  } catch (error) {
    return res.status(500).json({error: error.toString()})
  }
}

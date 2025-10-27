export type PartnerContentSectionProps = {
  name: string
}

export default function PartnerContentSection({name}: PartnerContentSectionProps) {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

import CouncilorCard from './CouncilorCard'

export default function CouncilorList() {
  return (
    <>
      <CouncilorCard
        name="Hon. Thomas Dave C. Santos"
        badge="SB Member"
        committees="Entrepreneurship & Economic Development, Historical Records & Preservation of Heritage, Culture and Arts"
      />
      <CouncilorCard
        name="Hon. Edwin Clifford F. Tito, O.D."
        badge="SB Member"
        committees="Health & Sanitation, Finance Appropriation and Budget"
      />
      <CouncilorCard
        name="Hon. Michael Dl. Tiongson, LPT"
        badge="SB Member"
        committees="Education, Science & Technology, Transportation, Commerce, Trade & Industry"
      />
      <CouncilorCard
        name="Hon. Walter D. Savedra, Sr."
        badge="SB Member"
        committees="Cooperative Development, Senior Citizens and Disability Affairs"
      />
      <CouncilorCard
        name="Hon. Atty. Jerome G. Marcos"
        badge="SB Member"
        committees="Legal, Good Governance, Justice, Human Rights, Environmental Management"
      />
      <CouncilorCard
        name="Hon. Roland M. Carub, J.D."
        badge="SB Member"
        committees="Agriculture, Aquaculture & Food Security, Overseas Filipino Workers Affairs"
      />
      <CouncilorCard
        name="Hon. Joseph T. Alindada"
        badge="SB Member"
        committees="Games, Entertainment & Amusement, Internal Affairs"
      />
      <CouncilorCard
        name="Hon. Luisito L. Lannu"
        badge="SB Member"
        committees="Public Safety, Peace & Order, Family, Women, Children & Social Services"
      />
      <CouncilorCard
        name="Hon. Melchor E. Marzo"
        badge="Liga ng mga Barangay President"
        committees="Barangay Affairs, Tourism"
        badgeVariant="liga"
      />
      <CouncilorCard
        name="Hon. Isaac R. Divina"
        badge="SK Federation President"
        committees="Youth & Sports Development, Legislative Drafting"
        badgeVariant="sk"
      />
      <CouncilorCard
        name="Hon. IPMR Leon G. Dumani"
        badge="IPMR"
        committees="Indigenous People Affairs"
        badgeVariant="ipmr"
      />
    </>
  )
}

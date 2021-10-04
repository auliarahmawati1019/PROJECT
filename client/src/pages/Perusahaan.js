import Navigation from "../component/header/Navigations";
import { Card, Container } from 'react-bootstrap'

const  Perusahaan = () => {

  return (
    <>
      <Navigation />
      <Container className="App">
        <Card>
          <Card.Title> Perusahaan </Card.Title>
          <hr/>
          <Card.Body></Card.Body>
          <ol align="justify">
          <li>Perusahaan PT. MELIA SEHAT SEJAHTERA adalah salah satu dari sekian banyak perusahaan Multi Level Marketing yang TerBESAR dan TerAMAN.</li>
          <li>MELIA SEHAT SEJAHTERA ditopang langsung dan didukung secara total oleh perusahaan manufacturing besar dari Malaysia, yaitu Herbal Science, Sdn, Bhd. Di mana perusahaan Herbal Science tersebut menyuplai produk Melia Propolis dan Melia Biyang yang hanya bisa didapatkan melalui member aktif PT. MELIA SEHAT SEJAHTERA.</li>
          <li>MELIA SEHAT SEJAHTERA memiliki kantor yang megah empat lantai di Gedung GRAHA GRACE, Jl. Minangkabau, No. 58, Pasar Manggis, Setia Budi, Jakarta Selatan, Indonesia 12970. Untuk melayani kepentingan semua member dengan tempat pertemuan yang sangat nyaman.</li>
          <li>MELIA SEHAT SEJAHTERA memiliki ratusan stokis/ cabang yang tersebar di seluruh Indonesia.</li>
          <li>MELIA SEHAT SEJAHTERA adalah perusahaan terdepan dan terbesar saat ini di Indonesia dan segelintir dari sekian banyak perusahaan yang paling taat aturan yang turut serta dalam pembangunan Indonesia.</li>
          <li>Manajemen PT. MELIA SEHAT SEJAHTERA telah teruji selama 11 tahun dan merupakan perusahaan terlama di Asia dengan sistem binary, yang melayani seluruh leader dan member dengan komitmen total berkembang, tumbuh bersama, serta mendukung percepatan kesuksesan seluruh member dan leader untuk selalu yang terdepan dan pelopor.</li>
          </ol>
          </Card>
      </Container>
    </>
  )
}

export default Perusahaan


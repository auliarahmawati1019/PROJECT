import Navigation from "../component/header/Navigations";
import { Card, Container } from 'react-bootstrap'

const  Surat = () => {

  return (
    <>
      <Navigation />
      <Container className="App">
        <Card>
          <Card.Title> Surat Izin Usaha </Card.Title>
          <hr/>
          <Card.Body align="justify">Sebuah badan Multi Level Marketing yang baik dan benar, WAJIB mempunyai Surat Izin Usaha Penjualan Langsung (SIUPL), karena ini berhubungan dengan Badan Koordinasi Penanaman Modal. Setelah SIUPL dimiliki, suatu perusahan MLM terserah apabila ingin menambahkan/ melengkapi surat-surat izin yang lain, yang terpenting adalah dimilikinya SIUPL tersebut.
          </Card.Body>
          <Card.Body align="justify">PT. MELIA SEHAT SEJAHTERA memang benar-benar perusahaan yang paling taat terhadap peraturan Pemerintah Indonesia, karena bukan hanya SIUPL yang kami miliki, tetapi ada juga SIUP (Surat Izin Usaha Perdagangan) dan IUPB (Izin Usaha Penjualan Berjenjang)</Card.Body>
        </Card>
        <img align="center" src="aul1.JPG" alt="surat"></img>
      </Container>
    </>
  )
}

export default Surat

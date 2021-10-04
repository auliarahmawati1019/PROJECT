import Navigation from "../component/header/Navigations";
import { Card, Container } from 'react-bootstrap'

const  Visi = () => {

  return (
    <>
      <Navigation />
      <Container className="App">
        <Card>
          <Card.Title align="center"> Visi Dan Misi </Card.Title>
          <hr/>
          <Card.Body>Perusahaan Melia Sehat Sejahtera ini didirikan dengan mengemban visi dan misi sebagai berikut:</Card.Body>
          <Card.Body align="center">VISI</Card.Body>
          <Card.Body>Menyehatkan masyarakat dengan produk-produk yang alami, berkualitas, relatif murah, dan dengan reaksi efek yang cepat.</Card.Body>
          <Card.Body align="center">MISI</Card.Body>
          <Card.Body align="justify">Solusi keuangan kepada masyarakat indonesia dengan menciptakan peluang sistem penjualan berjenjang yang revolusioner dan berpihak kepada member yang dituangkan di dalam marketing plan yang sederhana, tanpa janji muluk, bonus dibayar cepat, bonus dibayar besar, bonus dibayar tanpa syarat tutup poin serta belanja otomatis.</Card.Body>
          <Card.Body align="justify">Konsep berpihak kepada member merupakan landasan bisnis MLM Melia Sehat Sejahtera. Hal inilah yang menjadi landasan bagi perusahaan untuk roda perusahaannya.</Card.Body>
          
        
        </Card>
      </Container>
    </>
  )
}

export default Visi

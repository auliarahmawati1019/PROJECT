import Navigation from "../component/header/Navigations";
import { Card, Container } from 'react-bootstrap'

const Index = () => {
  return (
    <>
      <Navigation />
      <Container className="Index">
        <Card>
          <Card.Title align="center"> SEJARAH PT.MELIA SEHAT SEJAHTERA</Card.Title>
          <hr/>
          <Card.Body align="justify ">
          Sistem bisnis yang hebat tentunya akan lebih menguntungkan anda jika didukung oleh profil perusahaan yang kuat. Sebab tentunya anda tidak ingin mempertaruhkan harapan dan usaha untuk sukses dengan sebuah perusahaan yang tidak jelas.
          </Card.Body>
          <Card.Body>Berikut ini adalah Profil dan Sejarah Perusahaan dalam uraian singkat.</Card.Body>
          <ol align="justify">
          <li>PT. Melia Sehat Sejahtera adalah sebuah perusahaan network marketing yang menjual produk makanan kesehatan dengan legalitas terjamin karena memiliki Surat Izin Usaha Penjualan Langsung (SIUPL) dari Dirjen Perdangan Dalam Negeri - Departemen Perdagangan Republik Indonesia.</li>
          <li>Pada awalnya PT. Melia Sehat Sejahtera bernama PT. Melia Summit Indonesia yang berkantor pusat di Malaysia dan didirikan di Indonesia pada tahun 2002</li>
          <li>Dalam rangka memperkuat manajemen dan permodalan pada pertengahan tahun 2005, kepemilikan PT. Melia Summit Indonesia diambil alih oleh sebuah perusahaan besar yang memiliki pabrik Propolis dari Sidney, Australia yaitu "Mother Nature Health Product"</li>
          <li>Pada bulan Maret 2006 PT. Melia Summit Indonesia secara resmi berganti nama menjadi PT Melia Nature Indonesia dengan produk dan sistem yang sama serta aturan yang sama seperti sebelumnya.</li>
          <li>Pada bulan Maret 2006 Herbal Science dari Malaysia yang menyuplai produk Melia Biyang membeli sebagian saham kepemilikan PT Melia Nature Indonesia dari Mother Nature Health Product. Sehingga kini PT. Melia Nature Indonesia dimiliki secara bersama oleh Mother Nature Health Produk dari Australia dan Herbal Science dari Malaysia</li>
          <li>Direktur Operasional PT Melia Nature Indonesia adalah Ibu Rumintang Agustina, SE </li>
          <li>Pada tanggal 25 September 2012, terjadi perubahan nama. Dari PT.MELIA NATURE INDONESIA menjadi PT.MELIA SEHAT SEJAHTERA</li>
          <li>PT. Melia Sehat Sejahtera memiliki website resmi perusahaan yang diupdate setiap hari dan dapat diakses oleh setiap member 24 jam setiap hari di http://www.meliasehatsejahtera.com</li>
          <li>Produk–produk PT. Melia Sehat Sejahtera adalah produk makanan kesehatan yang berkualitas tinggi yang diproses di pabrik yang memiliki standar produksi yang tinggi dengan proses Good Manufacturer Preactice (GMP) di Malaysia</li>
          <li>Produk–produk PT. Melia Sehat Sejahtera adalah produk yang legal dan aman dikonsumsi dan mempunyai izin dari BPOM (Badan Pengawasan Obat dan Makanan) Indonesia dan juga dari TGA (Theurapetic Goods Administration) Australia.</li>
          </ol> 
          <p align="justify">PT. Melia Sehat Sejahtera memiliki Izin Usaha Penjualan Berjenjang (IUPB) yang dikeluarkan oleh Direktorat Perdagangan Dalam Negeri - Departemen Perdagangan Republik Indonesia No. 61/PDN/IUPB/XII/2003 yang kemudian diperbaharui dengan IUPB no. 01/PDN/IUPB–PB/1/2006. Dan sesuai dengan peraturan perundangan, IUPB tersebut kemudian diperbaharui menjadi Surat Izin Usaha Penjualan Langsung (SIUPL) dengan nomor registrasi : 62/PDN-2/SIUPL/PP/10/2006.</p>      
        </Card>
      </Container>
    </>
  );
}

export default Index

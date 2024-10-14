import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Our Services</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Logo Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-paint-brush" /></div>
          <h4>Premium WhatsApp Bot Script</h4>
          <p>Jadikan WhatsApp sebagai alat pemasaran yang efektif dengan Script Premium WhatsApp Bot kami! Dirancang untuk meningkatkan keterlibatan pelanggan, script ini memungkinkan Anda untuk mengirim pesan massal, melakukan promosi, dan menjawab pertanyaan secara otomatis dengan mudah.</p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Web Development</h4>
          <p>Pembuatan website, e-commerce, landing page, dan perbaikan bug
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}
      {/* Service Item 3: WordPress */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-wordpress" /></div>
          <h4>Virtual Assistance</h4>
          <p>Assistant virtual berbasis ai yang diaplikasikan pada WhatsApp,mencakup banntuan atau tugas-tugas keseharian secara online, seperti penjadwalan, management, hingga berbagai fitur lainnya.</p>
        </div>
      </div>
      {/* Service Item 3 End */}
      {/* Service Item 4: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-code" /></div>
          <h4>Cloud Storage & Backup Services</h4>
          <p>Jasa penyimpanan cloud memberikan ruang penyimpanan online yang aman bagi individu atau perusahaan untuk menyimpan dan mengelola data.
          Penyimpanan file, backup data, hosting website, cloud security.</p>
        </div>
      </div>
      {/* Service Item 4 End */}
      {/* Service Item 5: Video Editing */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-film" /></div>
          <h4>Bug Fixing & Code Optimization </h4>
          <p>Menawarkan perbaikan bug atau masalah dalam kode serta mengoptimalkan kinerja program yang sudah ada.</p>
        </div>
      </div>
      {/* Service Item 5 End */}
      {/* Service Item 6: SEO Optimization */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-rocket" /></div>
          <h4>Software Testing & QA (Quality Assurance)</h4>
          <p>menyediakan pengujian code untuk memastikan aplikasi bebas dari bug dan berfungsi dengan baik sesuai spesifikasi.
          
          Contoh: Pengujian fungsional, pengujian otomatis (automated testing).
          </p>
        </div>
      </div>
      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;

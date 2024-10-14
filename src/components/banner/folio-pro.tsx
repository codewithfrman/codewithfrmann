import { IoIosArrowRoundForward } from "react-icons/io";

export default function FolioProBanner() {
  return (
    <div className="banner">
      <div className="banner-wrap">
        <p className="banner-desc">
          <span className="banner-card">Folio Pro</span> Dapatkan desain website pribadi anda
        </p>
        <a href="https://folio-pro.alsiam.com" target="_blank" className="banner-btn">
          Pesan Sekarang 
          <IoIosArrowRoundForward />
        </a>
      </div>
    </div>
  );
}

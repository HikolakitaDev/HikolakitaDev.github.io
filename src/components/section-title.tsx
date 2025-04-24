
import "./section-title.css";

interface SectionTitleProps {
  sectionTitle: string;
  txt: string;
}

function SectionTitle({ sectionTitle, txt }: SectionTitleProps) {
  return (
    <div className="section-title">
      <p className="section-title-text">{sectionTitle}</p>
      <p className="sectionMessage">{txt}</p>
    </div>
  );
}

export default SectionTitle;

import { hotlines } from '@/data/navigation';

export default function HotlineBar() {
  return (
    <div className="hotline-bar">
      <div className="container">
        <div className="hotline-inner">
          <div className="hotline-items">
            {hotlines.map((hotline, index) => (
              <a 
                key={index}
                href={`tel:${hotline.number.replace(/\s/g, '')}`} 
                className="hotline-item"
              >
                <i className={`bi ${hotline.icon}`} aria-hidden="true"></i>
                <span>{hotline.name}: {hotline.number}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import Image from 'next/image';

export default () => {
  return (
    <div className="col-3">
      <div className="card_img">
        <Image
          src="/images/img_1.png"
          alt="img_1"
          width={350}
          height={320}
          layout="responsive"
          loading="lazy"
        />
      </div>
      <div className="card_info">
        <p>Learn Figma - UI/UX Design Essential Training</p>
      </div>
    </div>
  );
};

import { useState } from "react";

const data = [
  {
    id: 1,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRt-bzdXBYuGrX4KiOJJnnahNnHL3paYKMVoTOwy8MkV_8XxgEWtbpTig&s=10",
    caption: "Sample 1",
  },
  {
    id: 2,
    src: "https://media.istockphoto.com/id/171374460/photo/dahlia.jpg?s=612x612&w=0&k=20&c=7XRTa5HZpE-VNSb4i8U01FUTSV7Iei9EXGB4YVgAOS8=",
    caption: "Sample 2",
  },
  {
    id: 3,
    src: "https://c02.purpledshub.com/uploads/sites/40/2021/06/JI_150620_SingleRoses_010-22e6c94.jpg?webp=1&w=1200",
    caption: "Sample 3",
  },
];

const ImagesViwer = () => {
  const [image, setimage] = useState(data[0]);
  const [tranform, settranform] = useState(1);

  return (
    <div>
      <h3>Images Viwer</h3>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={image.src}
          alt={image.caption}
          style={{ width: 400, height: 500, objectFit: "cover" }}
        />
        <h3>{image.caption}</h3>
      </section>

      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((item) => (
          <div key={item.id} style={{ width: 150, height: 150 }}>
            <img
              srt={item.src}
              alt={item.caption}
              onClick={() => {
                setimage(item);
                settranform(item.id);
              }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",

                transform:
                  item.id === tranform
                    ? "translateY(-50px)"
                    : "translateY(0px)",
              }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesViwer;

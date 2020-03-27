export const projects = [
  {
    id: "1",
    des: "Document Classification",
    detail:
      "Using probability-based LDA and deep-learning-based Doc2vec techniques, we attempted to classify department papers. I typed the greens of my thesis and used them as data and preprocessed the data using koNLPy.",
    img: "https://miro.medium.com/max/327/1*keqyBCQ5FL6A7DZLrXamvQ.png",
    ctg: "nlp",
    github: "#",
    member: "team",
    period: "18.09 ~ 19.04"
  },
  {
    id: "2",
    des: "Normal map creation",
    detail:
      "We implemented a pix2pix model that creates a normal map used to give a three-dimensional feel to the plane in the game design. Data collection was collected from sites selling normal maps and was supplemented by image aggregation such as resizing, cloning, and mirroring. The generator part uses the U-net structure to minimize information loss and the Discriminator part uses the patch ga to increase the operation speed.",
    img:
      "https://developer.valvesoftware.com/w/images/2/2c/Brickwall021a_normalcompare.jpg",
    ctg: "deep learning",
    github: "#",
    member: "team",
    period: "19.04 ~ 19.06 "
  },
  {
    id: "3",
    des: "Low-dose-CT denoise",
    detail:
      "This is a project that uses deep learning techniques to obtain clear CT images while reducing radiation exposure of patients during CT scans. The project progress was conducted in a linux environment based on the pytorch library in the docker to use the multi gpu of the lab server. The dataset was in dicom format and was converted to a jpg file through preprocessing before using it. To compensate for the mode collapping problem of existing GAN models, WGAN models were used and PSNR, RMSE, and SSIM were used as evaluation indicators.",
    img:
      "https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-3-030-13969-8_14/MediaObjects/474206_1_En_14_Fig7_HTML.png",
    ctg: "deep learning",
    github: "#",
    member: "team",
    period: "19.06 ~ 19.09"
  },
  {
    id: "4",
    des: "MultiLabel Classfication",
    detail:
      "The project progress was conducted in a linux environment based on the cytorch library in the docker to use the multi gpu of the lab server. The dataset was in dicom format and was converted to a jpg file through preprocessing before using it. Considering the project duration, performance, and server infrastructure, we chose the pretrained efficientb0 model.",
    img:
      "https://www.neurologyadvisor.com/wp-content/uploads/sites/10/2018/12/ctofbrainsh594606644_1341028.jpg",
    ctg: "deep learning",
    github: "#",
    member: "team",
    period: "19.10 ~ 19.12"
  },
  {
    id: "5",
    des: "Facebook Clone",
    detail:
      "As a solo project, Express and React have been used to implement the main functions of Facebook (real-time chat, photo and video upload, adding friends, commenting, and like button).At first, the client part was implemented using the Pug template engine. But for better cloning, re-implemented using React.",
    img: "/images/dust.jpg",
    ctg: "Web programming",
    github: "#",
    member: "solo",
    period: "20.01 ~ 20.02"
  },
  {
    id: "6",
    des: "Weather-Todo-List",
    detail:
      "It is a website that uses basic toolist and weatherapi to inform the user of the current weather and notepad. This project was conducted to learn the basics of css3 and React.",
    img: "images/dust.jpg",
    ctg: "Web programming",
    github: "#",
    member: "solo",
    period: "20.02 ~ 20.03"
  }
];

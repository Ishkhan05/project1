const initialNewsState = [
  {
    id:1,
    image:"Images/NewsSlider_images/news1.png",
    date: new Date("2023/02/25").toLocaleDateString(),
    title:"The main spring festival is coming soon!",
    desc:"Girls love it when it's delicious, beautiful and natural. See more handmade dessert sets",
    desc2:"My favorite spring holiday is coming very soon. And we have already prepared a collection of macaroni cakes with a corporate design.💖Pies are a delight for everyone, because they are not only beautiful, but also delicious! We cook with love exclusively from natural ingredients!",
    currentNewsImages:["Images/NewsSlider_images/CurrentNewsSlider/News1.png","Images/NewsSlider_images/CurrentNewsSlider/News2.png","Images/NewsSlider_images/CurrentNewsSlider/News3.png","Images/NewsSlider_images/CurrentNewsSlider/News4.png","Images/NewsSlider_images/CurrentNewsSlider/News5.png",]
  },
  {
    id:2,
    image:"Images/NewsSlider_images/news2.png",
    date: new Date("2023/02/17").toLocaleDateString(),
    title:"The competition is on February 23rd!",
    desc:"Defender of the Fatherland Day is coming very soon! Please your sweet tooth with the help of mouth-watering sets from Macaronshop",
    desc2:"My favorite spring holiday is coming very soon. And we have already prepared a collection of macaroni cakes with a corporate design.💖Pies are a delight for everyone, because they are not only beautiful, but also delicious! We cook with love exclusively from natural ingredients!",
    currentNewsImages:["Images/NewsSlider_images/CurrentNewsSlider/News1.png","Images/NewsSlider_images/CurrentNewsSlider/News2.png","Images/NewsSlider_images/CurrentNewsSlider/News3.png","Images/NewsSlider_images/CurrentNewsSlider/News4.png","Images/NewsSlider_images/CurrentNewsSlider/News5.png",]
  },
  {
    id:3,
    image:"Images/NewsSlider_images/news3.png",
    date: new Date("2023/02/11").toLocaleDateString(),
    title:"Express competition for Valentine's Day",
    desc:"A gift in 2 days, Valentine's Day is just around the corner. Tell us about your feelings with a sweet valentine from Macaronshop",
    desc2:"My favorite spring holiday is coming very soon. And we have already prepared a collection of macaroni cakes with a corporate design.💖Pies are a delight for everyone, because they are not only beautiful, but also delicious! We cook with love exclusively from natural ingredients!",
    currentNewsImages:["Images/NewsSlider_images/CurrentNewsSlider/News1.png","Images/NewsSlider_images/CurrentNewsSlider/News2.png","Images/NewsSlider_images/CurrentNewsSlider/News3.png","Images/NewsSlider_images/CurrentNewsSlider/News4.png","Images/NewsSlider_images/CurrentNewsSlider/News5.png",]
  },
  {
    id:4,
    image:"Images/NewsSlider_images/news4.png",
    date: new Date("2023/03/30").toLocaleDateString(),
    title:"Mouth-watering sets with NEW flavors",
    desc:"We are ready to present you a collection of new mind-blowing pasta flavors",
    desc2:"My favorite spring holiday is coming very soon. And we have already prepared a collection of macaroni cakes with a corporate design.💖Pies are a delight for everyone, because they are not only beautiful, but also delicious! We cook with love exclusively from natural ingredients!",
    currentNewsImages:["Images/NewsSlider_images/CurrentNewsSlider/News1.png","Images/NewsSlider_images/CurrentNewsSlider/News2.png","Images/NewsSlider_images/CurrentNewsSlider/News3.png","Images/NewsSlider_images/CurrentNewsSlider/News4.png","Images/NewsSlider_images/CurrentNewsSlider/News5.png",]
  },
  {
    id:5,
    image:"Images/NewsSlider_images/news5.png",
    date: new Date("2023/03/23").toLocaleDateString(),
    title:"We bake fluffy and soft muffins",
    desc:"Their velvety structure and impressive weight impress absolutely anyone!",
    desc2:"My favorite spring holiday is coming very soon. And we have already prepared a collection of macaroni cakes with a corporate design.💖Pies are a delight for everyone, because they are not only beautiful, but also delicious! We cook with love exclusively from natural ingredients!",
    currentNewsImages:["Images/NewsSlider_images/CurrentNewsSlider/News1.png","Images/NewsSlider_images/CurrentNewsSlider/News2.png","Images/NewsSlider_images/CurrentNewsSlider/News3.png","Images/NewsSlider_images/CurrentNewsSlider/News4.png","Images/NewsSlider_images/CurrentNewsSlider/News5.png",]
  },
  {
    id:6,
    image:"Images/NewsSlider_images/news6.png",

    date: new Date("2023/02/11").toLocaleDateString(),
    title:"Sweet gifts for February 23rd",
    desc:"Our new series of pasta sets is designed specifically to please your sweet tooth. After all, men also love sweets",
    desc2:"My favorite spring holiday is coming very soon. And we have already prepared a collection of macaroni cakes with a corporate design.💖Pies are a delight for everyone, because they are not only beautiful, but also delicious! We cook with love exclusively from natural ingredients!",
    currentNewsImages:["Images/NewsSlider_images/CurrentNewsSlider/News1.png","Images/NewsSlider_images/CurrentNewsSlider/News2.png","Images/NewsSlider_images/CurrentNewsSlider/News3.png","Images/NewsSlider_images/CurrentNewsSlider/News4.png","Images/NewsSlider_images/CurrentNewsSlider/News5.png",]
  },
  {
    id:7,
    image:"Images/NewsSlider_images/news7.png",
    date: new Date("2023/02/26").toLocaleDateString(),
    title:"Gifts for a woman",
    desc:"Defender of the Fatherland Day is coming very soon! Please your sweet tooth with the help of mouth-watering sets from Macaronshop",
    desc2:"My favorite spring holiday is coming very soon. And we have already prepared a collection of macaroni cakes with a corporate design.💖Pies are a delight for everyone, because they are not only beautiful, but also delicious! We cook with love exclusively from natural ingredients!",
    currentNewsImages:["Images/NewsSlider_images/CurrentNewsSlider/News1.png","Images/NewsSlider_images/CurrentNewsSlider/News2.png","Images/NewsSlider_images/CurrentNewsSlider/News3.png","Images/NewsSlider_images/CurrentNewsSlider/News4.png","Images/NewsSlider_images/CurrentNewsSlider/News5.png",]
  },
  {
    id:8,
    image:"Images/NewsSlider_images/news8.png",
    date: new Date("2023/02/25").toLocaleDateString(),
    title:"Is there a wedding ahead?",
    desc:"We offer several original and simple design ideas. The guests will definitely remember",
    desc2:"My favorite spring holiday is coming very soon. And we have already prepared a collection of macaroni cakes with a corporate design.💖Pies are a delight for everyone, because they are not only beautiful, but also delicious! We cook with love exclusively from natural ingredients!",
    currentNewsImages:["Images/NewsSlider_images/CurrentNewsSlider/News1.png","Images/NewsSlider_images/CurrentNewsSlider/News2.png","Images/NewsSlider_images/CurrentNewsSlider/News3.png","Images/NewsSlider_images/CurrentNewsSlider/News4.png","Images/NewsSlider_images/CurrentNewsSlider/News5.png",]
  },
  {
    id:9,
    image:"Images/NewsSlider_images/news9.png",
    date: new Date("2023/04/05").toLocaleDateString(),
    title:"Easter holiday is ahead",
    desc:"Please your loved ones with delicious Easter pasta sets Our new gift collection is already on sale",
    desc2:"My favorite spring holiday is coming very soon. And we have already prepared a collection of macaroni cakes with a corporate design.💖Pies are a delight for everyone, because they are not only beautiful, but also delicious! We cook with love exclusively from natural ingredients!",
    currentNewsImages:["Images/NewsSlider_images/CurrentNewsSlider/News1.png","Images/NewsSlider_images/CurrentNewsSlider/News2.png","Images/NewsSlider_images/CurrentNewsSlider/News3.png","Images/NewsSlider_images/CurrentNewsSlider/News4.png","Images/NewsSlider_images/CurrentNewsSlider/News5.png",]
  },
]

export default initialNewsState